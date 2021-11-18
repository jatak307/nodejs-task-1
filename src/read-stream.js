const fs = require('fs');
const path = require('path');
const { input } = require('./args');

let readStream;

if (input) {
  try {
    fs.accessSync(path.resolve(input), fs.constants.R_OK);
    readStream = fs.createReadStream(path.resolve(input));
  } catch (err) {
    process.stderr.write(`Error: No access!`);
    process.exit(1);
  }
} else {
  readStream = process.stdin;
}


module.exports = readStream;