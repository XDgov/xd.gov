const fs = require('fs');
const Airtable = require('airtable');
const axios = require('axios');

// const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base('appuZMt69pZnTis2t');
const base = new Airtable({apiKey: 'patGd6p6kCeNSORjV.1d29b4f5276b20b82a16edd890e8f747a047a4164a984a49c81e1469605cfaff'}).base('appuZMt69pZnTis2t');

const xdContent = {};
const cacheFilePath = './airtable-cache.json';
const newsFilePath = './collections/_import/news.md';
const biosFilePath = './collections/_import/bios.md';

// Utility function we'll use to compare our data
function deepCompare(arg1, arg2) {
    if (JSON.stringify(arg1) === JSON.stringify(arg2)) {
      if (typeof arg1 === 'object' || Array.isArray(arg1)) {
        if (Object.keys(arg1).length !== Object.keys(arg2).length ){
          return false;
        }
        return (Object.keys(arg1).every((key) => {
          return deepCompare(arg1[key],arg2[key]);
        }));
      }
      return (arg1===arg2);
    }
    return false;
}

// Function to download and save images
async function downloadAndSaveImage(directory, name, imageUrl) {
    try {
        const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        const imageBuffer = Buffer.from(response.data, 'binary');

        // Create a directory with the user's name
        const directoryPath = `./${directory}/${name}`;
            if (!fs.existsSync(directoryPath)) {
            await fs.mkdirSync(directoryPath, { recursive: true });
        }

        // Save the image to the new directory
        const localImagePath = `${directoryPath}/${name}.jpg`;
        await fs.writeFileSync(localImagePath, imageBuffer);

        console.log(`Image for ${name} saved successfully at ${localImagePath}`);

        return localImagePath;
    } catch (error) {
        console.error(`Error downloading image for ${name}: ${error.message}`);
    }
}
  

// Image ingestion to check for new images and save them to our repo
const checkAndCleanImages = async (cacheData) => {
    Array.from(Object.entries(cacheData)).forEach((contentArray) => {
        const contentName = contentArray[0];
        const contentData = contentArray[1];

        contentData.forEach(async (item, index) => {
            if (item['Images']) {
                // Construct our new image path from the content type and item name
                const name = item["Name"].toLowerCase().replaceAll(' ', '-');
                const directory = `assets/img/import/${contentName.toLowerCase().replaceAll(' ', '_')}`;

                // If we haven't yet, copy image file to our repo and replace with new path
                const newLocalImagePath = await downloadAndSaveImage(directory, name, item['Images'][0].url);

                // Replace the image url with the local one, so our comparison lines up.
                item['Images'][0].url = newLocalImagePath;

                console.log(newLocalImagePath);
            }
        });    
    });
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

        resolve(xdContent)

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

fetchAirtablePromise(cacheFilePath, newsFilePath, biosFilePath)
    .then(async (data) => {

        const cacheData = JSON.parse(await fs.readFileSync(cacheFilePath));

        // Before we compare this data to cache, we need to sanitize the image paths
        await checkAndCleanImages(cacheData);

        // Compare our cache with the newly fetched data.
        // If the same, we don't need to continue.
        // if (deepCompare(cacheData, data)) {
        //     console.log('Data is a match to cache, aborting.');
        //     return;
        // }

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
