const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

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
const imgDirectories = [
  `${assetsImagesDir}/heroes`,
  `${assetsImagesDir}/import`,
  `${assetsImagesDir}/logos`,
  `${assetsImagesDir}/news`,
  `${assetsImagesDir}/pages`,
  `${assetsImagesDir}/praise`,
];

function makeResponsiveImages(imagesList) {
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
    }

    // create webp version of original image
    sharpFile
      .toFormat('webp')
      .toFile(`${filepath}/${filename}.webp`)
  });
}


imgDirectories.map(async (dir) => {
  const currentImages = await getFileListOfTypes(dir, SHARP_FORMATS);
  // TODO: create image cache to avoid duplicate processing
  makeResponsiveImages(currentImages);
});
