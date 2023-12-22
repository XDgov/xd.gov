const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const { readFile, writeFile } = fs.promises;
const { getFileListOfTypes } = require('../../helpers/utilities');


const SHARP_FORMATS = ['jpeg', 'jpg', 'png', 'webp', 'gif', 'avif', 'tiff'];
const IMAGE_SIZES = [
  ['s', 300],
  ['m', 700],
  ['l', 1000],
  ['xl', 1500],
  ['xxl', 2500],
];
const assetsImagesDir = './assets/img';
const imageCacheFilePath = './.github/sharp/image-cache.json';
const imgDirectories = [
  `${assetsImagesDir}/heroes`,
  `${assetsImagesDir}/import`,
  `${assetsImagesDir}/logos`,
  `${assetsImagesDir}/news`,
  `${assetsImagesDir}/pages`,
  `${assetsImagesDir}/praise`,
];

async function retrieveCache() {
  const cacheFile = await readFile(imageCacheFilePath, 'utf8');
  const cache = JSON.parse(cacheFile);

  return cache;
}

const imageInCache = (imagePath, cache) => cache[imagePath];

const addImageToCache = (imagePath, cache) => (cache[imagePath] = true);

async function saveImageCacheFile(cache) {
  return await writeFile(imageCacheFilePath, JSON.stringify(cache), (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Image cache updated');
  });
}

function makeResponsiveImages(imagesList, cache) {
  imagesList.map((imgDir) => {
    const sharpFile = sharp(imgDir);
    const filepath = path.parse(imgDir).dir;
    const filename = path.parse(imgDir).name;
    const fileExtension = path.parse(imgDir).ext;

    // create multiple sizes of original image
    for (newSize of IMAGE_SIZES) {
      const [sizeLabel, newWidth] = newSize;

      sharpFile
        .resize(newWidth) // sharp module will maintain aspect ratio
        .toFile(`${filepath}/${filename}-${sizeLabel}${fileExtension}`);

      addImageToCache(`${filepath}/${filename}-${sizeLabel}${fileExtension}`, cache);
    }

    // create webp version of original image
    sharpFile
      .toFormat('webp')
      .toFile(`${filepath}/${filename}.webp`)

    addImageToCache(`${filepath}/${filename}.webp`, cache);
  });
}

async function checkAndUpdateImages(cache) {
  return imgDirectories.map(async (dir) => {
    let currentImages = await getFileListOfTypes(dir, SHARP_FORMATS);

    // ensure responsive images are created for new images only
    currentImages = currentImages.filter((image) => !imageInCache(image, cache));
    makeResponsiveImages(currentImages, cache);
    currentImages.map((image) => addImageToCache(image, cache));
  });
}

// TODO: add templating for responsive and webp images in markdown files
(async () => {
  const cache = await retrieveCache();

  await Promise.all(await checkAndUpdateImages(cache));
  await saveImageCacheFile(cache);
})();
