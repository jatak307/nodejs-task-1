const { Transform } = require('stream');

const createAtbashStream = () => {
  return new Transform({
    transform(chunk, enc, cb) {
      const chunkArr = chunk.toString().split('');
      const newArr = chunkArr.map((letter) => atbash(letter)).join('');
      cb(null, newArr);
    }
  })
}

function atbash(letter) {
  const rangeOfLetters =  /[A-Za-z]/g;
  if (!rangeOfLetters.test(letter)) {
    return letter;
  }
  let charcode = letter.charCodeAt();
  let bigStart = 65;
  let bigEnd = 90;
  let smallStart = 97;
  let smallEnd = 122;
  let res;
  if (charcode >= bigStart && charcode <= bigEnd) {
    res = String.fromCharCode(bigEnd - (charcode - bigStart));
  }
  else if (charcode >= smallStart && charcode <= smallEnd) {
    res = String.fromCharCode(smallEnd - (charcode - smallStart));
  }
  return res;
}

module.exports = createAtbashStream();