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
            if (!fs.existsSync(`.${directoryPath}`)) {
            await fs.mkdirSync(`.${directoryPath}`, { recursive: true });
        }

        // Save the image to the new directory
        const localImagePath = `${directoryPath}/${name}.jpg`;
        await fs.writeFileSync(`.${localImagePath}`, imageBuffer);

        console.log(`Image for ${name} saved successfully at ${localImagePath}`);

        return localImagePath;
    } catch (error) {
        console.error(`Error downloading image for ${name}: ${error.message}`);
        return error;
    }
}

async function writeMarkdownFile(directory, name, content) {
  console.log('writeMarkdownFile ', name);
  const fileName = dashCaseString(name);
  const contentBuffer = Buffer.from(content);

  try {
    // Create a file with the user's name
    const filePath = `${directory}/${fileName}.md`;

    console.log(`write to .${filePath}`);
    // Save the file to the directory
    fs.writeFileSync(`.${filePath}`, contentBuffer);

    console.log(`Bio for ${name} saved successfully at ${filePath}`);

    return filePath;
  } catch (error) {
      console.error(`Error writing markdown file for ${name}: ${error.message}`);
      return error;
  }
}

function dashCaseString(str) {
  return str && str.match(
/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(s => s.toLowerCase())
    .join('-');
}

module.exports = { deepCompare, downloadAndSaveImage, writeMarkdownFile, dashCaseString };