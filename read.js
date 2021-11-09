const fs = require('fs');
const path = require('path');
const { input } = require('./args');

let readStream;
let readableFile = path.resolve(input);

if (input) {
  try {
    fs.accessSync(readableFile, fs.constants.R_OK);
    readStream = fs.createReadStream(readableFile);
  } catch (err) {
    process.stderr.write(`Error: No access!`);
    process.exit(1);
  }
} else {
  readStream = process.stdin;
}


module.exports = readStream;