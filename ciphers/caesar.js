const commonCipher = require('./common-caesar');

function caesar(letter, type) {
  const rangeOfLetters = /[A-Za-z]/g;
  if (!rangeOfLetters.test(letter)) {
    return letter;
  }

  const step = 1;
  
  return commonCipher(letter, type[1], step);
}

module.exports = caesar;