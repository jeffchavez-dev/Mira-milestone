#!/usr/bin/env node


import { promises as fsPromises } from 'fs';

const directoryPath = './assets';

async function generateObjects() {
  try {
    const files = await fsPromises.readdir(directoryPath);

    const info = files.map((file, index) => ({
      name: `${index + 1}`,
      tag: 'Tag',
      image: `\\assets\\${file}`
    }));

    console.log(info);
  } catch (error) {
    console.error('Error reading directory:', error);
  }
}

generateObjects();




