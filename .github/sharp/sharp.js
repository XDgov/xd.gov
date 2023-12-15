const sharp = require('sharp');
const fs = require('fs');

const imgDir = '../../assets/img/heroes';

console.log('cwd', process.cwd());

fs.readdirSync(imgDir).forEach(file => {
  // check if file is an image type accepted by sharp
  if (!file.match(/.(jpg|jpeg|png|gif)$/i)) return;

  sharp(`${imgDir}/${file}`)
    .resize(200, 100) // width, height
    .toFile(`${imgDir}/${file}-small.jpg`);
  });
