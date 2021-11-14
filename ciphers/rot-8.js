const commonCipher = require('./common-caesar');

function rot(letter, type) {
  const rangeOfLetters = /[A-Za-z]/g;
  if (!rangeOfLetters.test(letter)) {
    return letter;
  }

  const step = 8;

  return commonCipher(letter, type[1], step);
}

module.exports = rot;