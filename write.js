const fs = require('fs');

const writeStream = fs.createWriteStream('./output.txt');

module.exports = writeStream;