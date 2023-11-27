const fs = require('fs');
const Airtable = require('airtable');

const base = new Airtable({apiKey: 'patGd6p6kCeNSORjV.1d29b4f5276b20b82a16edd890e8f747a047a4164a984a49c81e1469605cfaff'}).base('appuZMt69pZnTis2t');
const xdContent = {};
const jsonFilePath = './airtable-cache.json';

// function readFile(name) {
//     return new Promise((resolve, reject) =>
//         fs.readFile(name, function (err, data) {
//             if (err) { reject(err); }
//             resolve(data);
//         });
//     });
// }

// Promise.all(readFile('file1'), readFile('file2')).then(data => {
//     var file1 = data[0];
//     var file2 = data[1];
//  });

const fetchAirtablePromise = (path) => new Promise((resolve, reject) => {

    base('xd.gov Content').select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 20,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.
        // let div = document.createElement('div');
        // Grab only content with a content type field
        const filteredRecords = records.filter(record => record.fields['Content Type'] !== undefined);
        // Filter content types to set as xdContent keys
        const xdFieldNames = new Set(filteredRecords.filter(record => record.fields['Content Type'] !== undefined).map(record => record.fields['Content Type'][0]));
        xdFieldNames.forEach(name => xdContent[name] = []);
    
        filteredRecords.forEach(function(record) {
            let fieldType = record.fields['Content Type'];
            xdContent[fieldType].push(record.fields);
            // console.log('Retrieved', fieldType, record.fields);
        });
    
        // if (moreNewsEl) {
        //     // Create page elements and render to more_news element.
        //     xdContent['News'].forEach((record) => {
        //         let p = document.createElement('p');
        //         let h3 = document.createElement('h3');
        //         let name = record['Name'];
        //         let blurb = record['Blurb'];
        //         h3.append(`${name}`)
        //         p.append(`${blurb}`)
        //         div.append(h3, p);
        //     })
        //     moreNewsEl.appendChild(div);
        // } else if (teamBiosEl) {
        //     // Create page elements and render to team_bios element.
        //     xdContent['Bio for team page'].forEach((record) => {
        //         let p = document.createElement('p');
        //         let h3 = document.createElement('h3');
        //         let img = document.createElement('img');
        //         let name = record['Name'];
        //         let blurb = record['Blurb'];
        //         let image = record['Images'];
    
        //         if ([name, blurb, image].every(item => item !== undefined)) {
        //             img.setAttribute('id', image[0].id);
        //             img.setAttribute('src', image[0].url);
        //             h3.append(`${name}`)
        //             p.append(`${blurb}`)
        //             div.append(img, h3, p);
        //         }
        //     })                    
        //     teamBiosEl.appendChild(div);
        // }
    
        // console.log(xdContent);  
    
        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();

        resolve(xdContent)
    
    }, function done(err) {
        if (err) { console.error(err); reject(error); return; }
    });

});

fetchAirtablePromise(jsonFilePath)
    .then((data) => {
        fs.writeFile(jsonFilePath, JSON.stringify(data, null, 2), (error) => {
            if (error) {
                console.log('An error has occurred ', error);
                return;
            }
            console.log('Data written successfully to disk');
        });          
    })