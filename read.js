const fs = require('fs');

const readStream = fs.createReadStream('./input.txt');

module.exports = readStream;