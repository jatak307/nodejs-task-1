const { expect } = require('@jest/globals');
const atbash = require('../../src/ciphers/atbash');

describe('Ciphers scenarios', () => {
  test('Should return the same letter in order on the other side of the alphabet', () => {
    const letter = 'a';
    const letterAtbash = 'z';
    expect(atbash(letter)).toBe(letterAtbash);
  });

  test('Shouldn\'t change symbol', () => {
    const letter = 'ф';
    const letterAtbash = 'ф';
    expect(atbash(letter)).toBe(letterAtbash);
  });

  test('Should return the same letter in order on the other side of the alphabet', () => {
    const letter = 'B';
    const letterAtbash = 'Y';
    expect(atbash(letter)).toBe(letterAtbash);
  });
});