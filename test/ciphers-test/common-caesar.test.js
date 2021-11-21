const { expect } = require('@jest/globals');
const commonCipher = require('../../src/ciphers/common-caesar');

describe('Ciphers scenarios', () => {
  test('Should return letter "a"', () => {
    const letter = 'z';
    const type = '1';
    const step = 1;
    const letterCaesar = 'a';
    expect(commonCipher(letter, type, step)).toBe(letterCaesar);
  });

  test('Should return letter "z"', () => {
    const letter = 'a';
    const type = '0';
    const step = 1;
    const letterCaesar = 'z';
    expect(commonCipher(letter, type, step)).toBe(letterCaesar);
  });

  test('Should return letter "a"', () => {
    const letter = 'b';
    const type = '0';
    const step = 1;
    const letterCaesar = 'a';
    expect(commonCipher(letter, type, step)).toBe(letterCaesar);
  });

  test('Should return letter "Z"', () => {
    const letter = 'H';
    const type = '0';
    const step = 8;
    const letterCaesar = 'Z';
    expect(commonCipher(letter, type, step)).toBe(letterCaesar);
  });
  test('Should return letter "H"', () => {
    const letter = 'Z';
    const type = '1';
    const step = 8;
    const letterCaesar = 'H';
    expect(commonCipher(letter, type, step)).toBe(letterCaesar);
  });
  test('Should return letter "Z"', () => {
    const letter = 'R';
    const type = '1';
    const step = 8;
    const letterCaesar = 'Z';
    expect(commonCipher(letter, type, step)).toBe(letterCaesar);
  });
});