const fs = require('fs');
const path = require('path');

function createWrStream(output) {
  let writeStream;
  
  if (output) {
    writeStream = fs.createWriteStream(path.resolve(output), { flags: 'a' });
  } else {
    writeStream = process.stdout;
  }
  return writeStream;
}

module.exports = createWrStream;