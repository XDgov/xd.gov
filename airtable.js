const fs = require('fs');
const Airtable = require('airtable');
const { deepCompare, downloadAndSaveImage } = require('./helpers/utilities')

// const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base('appuZMt69pZnTis2t');
const base = new Airtable({apiKey: 'patGd6p6kCeNSORjV.1d29b4f5276b20b82a16edd890e8f747a047a4164a984a49c81e1469605cfaff'}).base('appuZMt69pZnTis2t');

const xdContent = {};
const cacheFilePath = './airtable-cache.json';
const newsFilePath = './collections/_import/news.md';
const biosFilePath = './collections/_import/bios.md';

// Image ingestion to check for new images and save them to our repo
const checkAndCleanImages = (newData, cacheData) => {
    const promisesArray = Array.from(Object.entries(newData)).map(async (contentArray, index) => {
        const contentName = contentArray[0];
        const contentData = contentArray[1];
        let cacheEquivalent = Array.from(Object.entries(cacheData))[index][1];
          
        for (const item of contentData) {
            const contentImages = item['Images'];
            const cachedMatch = cacheEquivalent.find(entry => {
                if (entry['Images']) {
                    return entry['Images'][0].id === contentImages[0].id
                }
            })
            const cacheImages = cachedMatch['Images'];

            console.log(cachedMatch)

            // Check if image already exists in this location (newLocalPath key exists)           
            if (!contentImages || cacheImages[0].newLocalPath) {
                return;
            }

            // Construct our new image path from the content type and item name
            const name = item["Name"].toLowerCase().replaceAll(' ', '-');
            const directory = `assets/img/import/${contentName.toLowerCase().replaceAll(' ', '_')}`;

            // Copy image file to our repo and replace with new path
            await downloadAndSaveImage(directory, name, contentImages[0].url)
                .then((newLocalImagePath) => {
                    if (typeof newLocalImagePath !== 'string') return;
    
                    // Replace the image url with the local one, so our comparison lines up.
                    contentImages[0].url = contentImages[0].newLocalPath = newLocalImagePath;
                })
        }
    });

    return Promise.all(promisesArray);
}

// Fetch our airtable content and generate some markup with it
// Optionally (if newer), write to our cache file with new data
const fetchAirtablePromise = (path) => new Promise((resolve, reject) => {

    base('xd.gov Content').select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 20,
        view: "Grid view"
    }).eachPage((records, fetchNextPage) => {
        // This function will get called for each page of records.
        // Grab only content with a content type field
        const filteredRecords = records.filter(record => record.fields['Content Type'] !== undefined);
        // Filter content types to set as xdContent keys
        const xdFieldNames = new Set(filteredRecords.filter(record => record.fields['Content Type'] !== undefined).map(record => record.fields['Content Type'][0]));
        xdFieldNames.forEach(name => xdContent[name] = []);

        filteredRecords.forEach((record) => {
            let fieldType = record.fields['Content Type'];
            xdContent[fieldType].push(record.fields);
        });

        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();

        resolve(xdContent);

    }, function done(err) {
        if (err) { console.error(err); reject(error); return; }
    });

});

const generateXdMarkup = (content) => {
    let newsMarkDown = '---\n' + 'layout: news-landing\n' + 'title: News\n' + '---';

    // Create News page elements
    content['News'].forEach(({ Name: name, Blurb: blurb }) => {
        newsMarkDown += `\n<div>\n<h3>${name}</h3>\n<p>${blurb}</p>\n</div>`;
    })

    let biosMarkdown = '---\n' + 'layout: bios\n' + 'title: Bios\n' + '---';

    // Create Bios page elements
    content['Bio for team page'].forEach(({ Name: name, Blurb: blurb, Images: images }) => {
        if ([name, blurb, images].every(item => item !== undefined)) {
            biosMarkdown += `\n<div>\n<img id="${images[0].id}" alt="Image of ${name}" src="${images[0].url}" />\n<h3>${name}</h3>\n<p>${blurb}</p>\n</div>`
        }
    })

    // Keep log for Action debugging
    console.log(newsMarkDown, biosMarkdown);

    return [newsMarkDown, biosMarkdown];
}

(async () => {
    const newAirtableData = await fetchAirtablePromise(cacheFilePath, newsFilePath, biosFilePath);
    const cacheData = JSON.parse(fs.readFileSync(cacheFilePath));

    // Before we compare this data to cache, we need to sanitize the image paths
    try {
        await checkAndCleanImages(newAirtableData, cacheData);
        console.log('Check images complete')
    } catch (error) {
        console.log('An error has occurred ', error);
    }

    // Compare our cache with the newly fetched data.
    // If the same, we don't need to continue.
    if (deepCompare(cacheData, newAirtableData)) {
        console.log('Data is a match to cache, aborting.');
        return;
    }

    const markup = generateXdMarkup(newAirtableData);

    // Write to json airtable-cache file
    try {
        await fs.promises.writeFile(cacheFilePath, JSON.stringify(newAirtableData, null, 2));
        console.log('Data written successfully to disk');
    } catch (error) {
        console.log('An error has occurred ', error);
        return;
    }

    // Write to news file
    try {
        await fs.promises.writeFile(newsFilePath, markup[0]);
        console.log('News markup written successfully to disk');
    } catch (error) {
        console.log('An error has occurred ', error);
        return;
    }
    
    // Write to bios file
    try {
        await fs.promises.writeFile(biosFilePath, markup[1]);
        console.log('Bios markup written successfully to disk');
    } catch (error) {
        console.log('An error has occurred ', error);
        return;
    }     
})();
