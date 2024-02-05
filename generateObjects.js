#!/usr/bin/env node


const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'assets');

const info = [];

fs.readdirSync(directoryPath).forEach(file => {
  const filePath = path.join(directoryPath, file);

  // Customize this part based on your requirements
  info.push({
    name: file.replace(/\.[^/.]+$/, ''),
    tag: 'Tag', // You can customize the tag as needed
    image: filePath.replace(/\\/g, "/") // Convert backslashes to forward slashes for URLs
  });
});

console.log(info);