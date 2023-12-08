const fs = require('fs');
const Airtable = require('airtable');

const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base('appuZMt69pZnTis2t');

const xdContent = {};
const cacheFilePath = './airtable-cache.json';
const newsFilePath = './collections/_import/news.md';
const biosFilePath = './collections/_import/bios.md';

// Utility function we'll use to compare our data
const deepCompare = (arg1, arg2) => {
    if (Object.prototype.toString.call(arg1) === Object.prototype.toString.call(arg2)){
      if (Object.prototype.toString.call(arg1) === '[object Object]' || Object.prototype.toString.call(arg1) === '[object Array]' ){
        if (Object.keys(arg1).length !== Object.keys(arg2).length ){
          return false;
        }
        return (Object.keys(arg1).every(function(key){
          return deepCompare(arg1[key],arg2[key]);
        }));
      }
      return (arg1===arg2);
    }
    return false;
}

// Fetch our airtable content and generate some markup with it
// Optionally (if newer), write to our cache file with new data
const fetchAirtablePromise = (path) => new Promise((resolve, reject) => {

    base('xd.gov Content').select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 20,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.
        // Grab only content with a content type field
        const filteredRecords = records.filter(record => record.fields['Content Type'] !== undefined);
        // Filter content types to set as xdContent keys
        const xdFieldNames = new Set(filteredRecords.filter(record => record.fields['Content Type'] !== undefined).map(record => record.fields['Content Type'][0]));
        xdFieldNames.forEach(name => xdContent[name] = []);
    
        filteredRecords.forEach(function(record) {
            let fieldType = record.fields['Content Type'];
            xdContent[fieldType].push(record.fields);
        });               
        
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();

        resolve(xdContent)
    
    }, function done(err) {
        if (err) { console.error(err); reject(error); return; }
    });

});

const generateXdMarkup = (content) => {
    let newsMarkDown = '---\n' + 'layout: news-landing\n' + 'title: News\n' + '---';

    // Create News page elements 
    content['News'].forEach((record) => {
        let name = record['Name'];
        let blurb = record['Blurb'];
        newsMarkDown += `\n<div>\n<h3>${name}</h3>\n<p>${blurb}</p>\n</div>`;
    })

    let biosMarkdown = '---\n' + 'layout: bios\n' + 'title: Bios\n' + '---';

    // Create Bios page elements
    content['Bio for team page'].forEach((record) => {

        let name = record['Name'];
        let blurb = record['Blurb'];
        let image = record['Images'];

        if ([name, blurb, image].every(item => item !== undefined)) {
            biosMarkdown += `\n<div>\n<img id="${image[0].id}" src="${image[0].url}" />\n<h3>${name}</h3>\n<p>${blurb}</p>\n</div>`
        }
    })
    
    console.log(newsMarkDown, biosMarkdown);

    return [newsMarkDown, biosMarkdown];
}

fetchAirtablePromise(cacheFilePath, newsFilePath, biosFilePath)
    .then((data) => {

        const cacheData = fs.readFileSync(cacheFilePath);

        // Compare our cache with the newly fetched data.
        // If the same, we don't need to continue.
        if (deepCompare(JSON.parse(cacheData), data)) {
            console.log('Data is a match to cache, aborting.');
            return;
        }

        const markup = generateXdMarkup(data);

        // Write to json airtable-cache file
        fs.writeFile(cacheFilePath, JSON.stringify(data, null, 2), (error) => {
            if (error) {
                console.log('An error has occurred ', error);
                return;
            }
            console.log('Data written successfully to disk');
        }); 
        
        // Write to json airtable-cache file
        fs.writeFile(newsFilePath, markup[0], (error) => {
            if (error) {
                console.log('An error has occurred ', error);
                return;
            }
            console.log('News markup written successfully to disk');
        });
        
        // Write to json airtable-cache file
        fs.writeFile(biosFilePath, markup[1], (error) => {
            if (error) {
                console.log('An error has occurred ', error);
                return;
            }
            console.log('Bios markup written successfully to disk');
        });        
    })
