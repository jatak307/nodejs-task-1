function rot(letter, type) {
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

  if (type === "R1") {
    const sum = charcode + 8;
    if (charcode >= bigStart && charcode <= bigEnd) {
      let newCharcode = sum > bigEnd ? bigStart + (sum - bigEnd - 1) : sum;
      res = String.fromCharCode(newCharcode);
    } else {
      let newCharcode = sum > smallEnd ? smallStart + (sum - smallEnd - 1) : sum;
      res = String.fromCharCode(newCharcode);
    }
  } else if (type === "R0") {
    const sum = charcode - 8;
    if (charcode >= bigStart && charcode <= bigEnd) {
      let newCharcode = sum < bigStart ? (bigEnd - (bigStart - sum - 1)) : sum;
      res = String.fromCharCode(newCharcode);
    } else {
      let newCharcode = sum < smallStart ? (smallEnd - (smallStart - sum - 1)) : sum;
      res = String.fromCharCode(newCharcode);
    }
  }
  return res;
}

module.exports = rot;