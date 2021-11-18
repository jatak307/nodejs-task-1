const { Transform } = require('stream');
const atbash = require('../ciphers/atbash');

module.exports = () => {
  return new Transform({
    transform(chunk, enc, cb) {
      const chunkArr = chunk.toString().split('');
      const newChunk = chunkArr.map((letter) => atbash(letter)).join('');
      cb(null, newChunk);
    }
  })
}
