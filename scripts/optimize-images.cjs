const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ASSETS_DIR = path.join(__dirname, '../public/assets');

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });

  return arrayOfFiles;
}

async function optimize() {
  const files = getAllFiles(ASSETS_DIR);
  const imageFiles = files.filter(f => /\.(jpg|jpeg|png)$/i.test(f));

  console.log(`Found ${imageFiles.length} images to optimize.`);

  for (const file of imageFiles) {
    const ext = path.extname(file);
    const webpPath = file.replace(ext, '.webp');

    console.log(`Optimizing: ${path.basename(file)}...`);

    try {
      await sharp(file)
        .webp({ quality: 80 })
        .toFile(webpPath);
      
      const oldSize = fs.statSync(file).size / 1024 / 1024;
      const newSize = fs.statSync(webpPath).size / 1024 / 1024;
      
      console.log(`  Done! ${oldSize.toFixed(2)}MB -> ${newSize.toFixed(2)}MB (${((1 - newSize/oldSize) * 100).toFixed(1)}% reduction)`);
    } catch (err) {
      console.error(`  Error optimizing ${file}:`, err);
    }
  }
}

optimize();
