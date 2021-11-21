const { Transform } = require('stream');
const rot = require('./ciphers/rot-8');

module.exports = (type) => {
  return new Transform({
    transform(chunk, enc, cb) {
      const chunkArr = chunk.toString().split('');
      const newChunk = chunkArr.map((letter) => rot(letter, type)).join('');
      cb(null, newChunk);
    }
  })
}
