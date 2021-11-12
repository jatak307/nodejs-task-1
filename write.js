const fs = require('fs');
const path = require('path');
const { output } = require('./args');

let writeStream;

if (output) {
  try {
    fs.accessSync(path.resolve(output), fs.constants.R_OK);
    readStream = fs.createWriteStream(path.resolve(output));
  } catch (err) {
    process.stderr.write(`Error: Failed to access file ${output}!`);
    process.exit(1);
  }
} else {
  writeStream = process.stdout;
}

module.exports = writeStream;