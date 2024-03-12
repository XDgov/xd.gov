const fs = require('fs');
const Airtable = require('airtable');
const marked = require('marked');
const { deepCompare, downloadAndSaveImage, writeMarkdownFile, dashCaseString } = require('./helpers/utilities');


// Load environment variables
require('dotenv').config();
marked.use({
    breaks: true,
    gfm: true,
})

const websiteContentBase = new Airtable({apiKey: process.env.AIRTABLE_ACCESS_TOKEN}).base(process.env.AIRTABLE_BASE_ID);

const xdContent = {};
const cacheFilePath = './airtable-cache.json';
const newsFilePath = './collections/_import/news.md';


// Image ingestion to check for new images and save them to our repo
const checkAndCleanImages = (newData, cacheData) => {
    const promisesArray = Array.from(Object.entries(newData)).map(async (contentArray, index) => {
        const contentName = contentArray[0];
        const contentData = contentArray[1];
        let count = 0;

        for (const item of contentData) {
            const contentImages = item['Images'];

            if (!contentImages) continue;

            // Have cache on hand at each content level
            const cacheEquivalent = Array.from(Object.entries(cacheData))[index][1][count];

            // Construct our new image path from the content type and item name
            const names = item["Author(s)"];
            let name;
            if (names.length === 1) {
                name = names[0].name.toLowerCase().replaceAll(' ', '-');
            }
            const directory = `assets/img/import/${contentName.toLowerCase().replaceAll(' ', '_')}`;

            // Lookup the same image from our cache
            const cachedImage = cacheEquivalent['Images'].find(image => {
                return image.imageId === item.ID || image.id === contentImages[0].id;
            });

            // Check if image already exists in this location (newLocalPath key exists)
            if (cachedImage.newLocalPath)  {
                // Replace the image url with the local one, so our new/cache comparison lines up
                contentImages[0].url = contentImages[0].newLocalPath = cachedImage.newLocalPath;
            } else {
                // If new, copy image file to our repo then replace with new local path
                await downloadAndSaveImage(directory, name, contentImages[0].url)
                    .then((newLocalImagePath) => {

                        if (typeof newLocalImagePath !== 'string') return;

                        // Replace the image url with the local one, so our new/cache comparison lines up
                        contentImages[0].url = contentImages[0].newLocalPath = newLocalImagePath;
                    })
            }
            contentImages[0].imageId = item.ID;
            count++;
        }
    });

    return Promise.all(promisesArray);
}

// Fetch our airtable content and generate some markup with it
// Optionally (if newer), write to our cache file with new data
const fetchAirtablePromise = () => new Promise((resolve, reject) => {

    websiteContentBase('xd.gov Content').select({
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
        if (err) { console.error(err); reject(err); return; }
    });

});

const findProject = (projectId) => new Promise((resolve, reject) => {
    websiteContentBase('All Projects').find(projectId, (err, record) => {
        if (err) { console.error(err); return; }
        return resolve(record.fields['Project Name']);
    });
});

const writeBioMarkdown = ({ Name, Images, Title, Blurb, Skillsets, ProjectsList}) => {
    return `---
name: ${Name}
title: ${Name}
permalink: /team/${dashCaseString(Name)}/
image_id: ${Images[0].id}
image_path: ${Images[0].newLocalPath}
job_title: ${Title}
portfolio: ${ProjectsList?.join(",") || ''}
blurb: ${marked.parse(Blurb)}
skillsets: ${Skillsets?.join(",") || ''}
---`;
}

const generateXdMarkdown = (content) => {
    const fullMarkdownObj = {};

    for (const contentType in content) {
        const contentMarkdownArray = [];
        let markdown = '';

        // Create a landing page for News and Bios only
        if (contentType === 'News') {
            markdown += `---\n layout: news-landing\n title: News\n---`
        } else if (contentType === 'Bio') {
            markdown += `---\n layout: bios-landing\n title: Bios\n---`
        }

        // Loop through content types and generate unique markdown for each
        content[contentType].map(async (obj) => {
            const { Title, Images, Attachments, Blurb, Projects } = obj;
            const Skillsets = obj['What is your area of expertise?'];
            let itemMarkdown = ``

            switch (contentType) {
                // case 'News':
                //     if ([Name, Blurb].some(item => item === undefined)) return;

                //     itemMarkdown += `
                //         \n<div>\n
                //             <h3>${Name}</h3>\n
                //             ${marked.parse(Blurb)}
                //         </div>
                //     `;
                //     break;

                case 'Bio':
                    const Name = obj['Author(s)'][0].name; // Bio should have one author
                    const directory = '/collections/_team_members';
                    const ProjectsList = [];
                    const content = { Name, Images, Title, Blurb, Skillsets, ProjectsList };
                    let bioMarkdownAttrs = '';

                    if ([Name, Title, Images, Blurb].some(item => item === undefined)) return;
                    console.log('Projects', Projects);
                    if (Skillsets !== undefined) {
                        await Promise.all(Projects.map(async (projectId) => {
                            const skillsetName = await findProject(projectId);
                            content.ProjectsList.push(skillsetName);
                        }));
                    }
                    bioMarkdownAttrs = writeBioMarkdown(content);

                    await writeMarkdownFile(directory, Name, bioMarkdownAttrs);
                    break;

                case 'Project':
                    // console.log('Project', obj);
                    // if ([Name, Title, Images, Blurb, Portfolio, Attachments].some(item => item === undefined)) return;

                    // itemMarkdown += `---\n layout: project\n title: ${Title} Project\n---`

                    // // TODO: Create unique project file path from title and store it

                    // itemMarkdown += `
                    //     \n<div>\n
                    //         <img id="${Images[0].id}" alt="Image of ${Name}" src="${Images[0].newLocalPath}" />\n
                    //         <h1>${Title}</h1>\n
                    //         <h4>Author(s): ${Name}</h4>\n
                    //         <h4>Project Status: ${Portfolio}</h4>\n
                    //         <div class="breadcrumb"></div>\n
                    //         ${marked.parse(Blurb)}\n
                    //         <p>Materials: ${Attachments}</p>
                    //     </div>\n
                    //     --End--
                    // `;
                    break;
            }

            markdown += itemMarkdown;
        })

        contentMarkdownArray.push(markdown)

        fullMarkdownObj[contentType] = contentMarkdownArray;

    }

    // Keep log for Action debugging
    // console.log(fullMarkdownObj);

    return fullMarkdownObj;
}

(async () => {
    const newAirtableData = await fetchAirtablePromise();
    const cacheData = JSON.parse(await fs.promises.readFile(cacheFilePath));

    // Before we compare this data to cache, we need to sanitize the image paths
    try {
        await checkAndCleanImages(newAirtableData, cacheData);
        console.log('Check images complete')
    } catch (error) {
        console.error('An error has occurred ', error);
    }

    // Compare our cache with the newly fetched data.
    // If the same, we don't need to continue.
    if (deepCompare(cacheData, newAirtableData)) {
        console.log('Data is a match to cache, aborting.');
        return;
    }

    const markdown = generateXdMarkdown(newAirtableData);

    // Write to json airtable-cache file
    try {
        await fs.promises.writeFile(cacheFilePath, JSON.stringify(newAirtableData, null, 2));
        console.log('Data written successfully to disk');
    } catch (error) {
        console.error('An error has occurred ', error);
        return;
    }

    // Write to news file
    try {
        await fs.promises.writeFile(newsFilePath, markdown['News']);
        console.log('News markdown written successfully to disk');
    } catch (error) {
        console.error('An error has occurred ', error);
        return;
    }

    // TODO: Create Bio pages individually

    // TODO: Create Project pages individually
    // First separate project markdown by separator...
    markdown['Project'] = markdown['Project'][0].split('--End--');

    // Then Write project pages to disk per entry
    markdown['Project'].forEach((project) => {
        // Must reference stored file path (see: TODO in generateXdMarkdown() )
        // [Code goes here]
    })

})();
