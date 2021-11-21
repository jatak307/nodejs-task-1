const fs = require('fs');
const path = require('path');
const { input } = require('./args');

let readStream;

if (input) {
  readStream = fs.createReadStream(path.resolve(input));
} else {
  readStream = process.stdin;
}

module.exports = readStream;