const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imgDir = '../../assets/img/projects/deploying-privacy-enhancing-technologies';
const SHARP_FORMATS = ['jpeg', 'jpg', 'png', 'webp', 'gif', 'avif', 'tiff'];
const IMAGE_SIZES = [
  ['s', 300],
  ['m', 700],
  ['l', 1000],
  ['xl', 1500],
  ['xxl', 2500],
];

fs.readdirSync(imgDir).map(async file => {
  const filePath = `${imgDir}/${file}`;
  // check if file is not an image format
  if (!SHARP_FORMATS.includes(path.parse(filePath).ext.replace('.', ''))) return;

  const sharpFile = sharp(filePath);
  const filename = path.parse(filePath).name;
  const fileExtension = path.parse(filePath).ext;

  // create multiple sizes of original image
  for (newSize of IMAGE_SIZES) {
    const [sizeLabel, newWidth] = newSize;

    sharpFile
      .resize(newWidth) // sharp will maintain aspect ratio
      .toFile(`${imgDir}/${filename}-${sizeLabel}${fileExtension}`);
  }

  // create webp version of original image
  sharpFile
    .toFormat('webp')
    .toFile(`${imgDir}/${filename}.webp`)
});
