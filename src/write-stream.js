const fs = require('fs');
const path = require('path');
const { output } = require('./args');

let writeStream;

if (output) {
  writeStream = fs.createWriteStream(path.resolve(output), { flags: 'a' });
} else {
  writeStream = process.stdout;
}

module.exports = writeStream;