const { Transform } = require('stream');

module.exports = (type) => {
  return new Transform({
    transform(chunk, enc, cb) {
      const chunkArr = chunk.toString().split('');
      const newArr = chunkArr.map((letter) => caesar(letter, type)).join('');
      cb(null, newArr);
    }
  })
}

function caesar(letter, type) {
  const rangeOfLetters = /[A-Za-z]/g;
  if (!rangeOfLetters.test(letter)) {
    return letter;
  }

  let charcode = letter.charCodeAt();
  let bigStart = 65;
  let bigEnd = 90;
  let smallStart = 97;
  let smallEnd = 122;
  let res;

  if (type === "C1") {
    const sum = charcode + 1;
    if (charcode >= bigStart && charcode <= bigEnd) {
      let newCharcode = sum > bigEnd ? bigStart + (sum - bigEnd - 1) : sum;
      res = String.fromCharCode(newCharcode);
    } else {
      let newCharcode = sum > smallEnd ? smallStart + (sum - smallEnd - 1) : sum;
      res = String.fromCharCode(newCharcode);
    }
  }
  if (type === "C0") {
    const sum = charcode - 1;
    if (charcode >= bigStart && charcode <= bigEnd) {
      let newCharcode = sum < bigStart ? (bigEnd - (bigStart - sum + 1)) : sum;
      res = String.fromCharCode(newCharcode);
    } else {
      let newCharcode = sum < smallStart ? (smallEnd - (smallStart - sum + 1)) : sum;
      res = String.fromCharCode(newCharcode);
    }
  }
  return res;
}