const axios = require('axios');
const fs = require('fs');

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
        const directoryPath = `/${directory}/${name}`;
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
        return error;
    }
}

module.exports = { deepCompare, downloadAndSaveImage };