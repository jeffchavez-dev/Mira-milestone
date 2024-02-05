#!/usr/bin/env node


import fs from 'fs';
import path from 'path';

const folderPath = './assets'; // Change this to your local folder path
const info = [];

// Read the contents of the folder
fs.readdir(folderPath, (err, files) => {
    if (err) {
        console.error('Error reading folder:', err);
        return;
    }

    // Generate objects based on file names
    files.forEach((file, index) => {
        const imageName = path.basename(file, path.extname(file)); // Get the name of the image without extension
        const imageObject = {
            name: imageName,
            tag: 'Tag', // You can customize or omit this property
            image: path.join('/assets', file) // Adjust the path as needed
        };

        info.push(imageObject);
    });

    // Display the generated array
    console.log(info);
});

console.log(info);