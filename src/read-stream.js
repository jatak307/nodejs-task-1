const fs = require('fs');
const path = require('path');

function createReadStream(input) {
  let readStream;
  
  if (input) {
    readStream = fs.createReadStream(path.resolve(input));
  } else {
    readStream = process.stdin;
  }
  return readStream;
}

module.exports = createReadStream;