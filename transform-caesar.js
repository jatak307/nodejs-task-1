const { Transform } = require('stream');
const caesar = require('./ciphers/caesar');

module.exports = (type) => {
  return new Transform({
    transform(chunk, enc, cb) {
      const chunkArr = chunk.toString().split('');
      const newArr = chunkArr.map((letter) => caesar(letter, type)).join('');
      cb(null, newArr);
    }
  })
}
