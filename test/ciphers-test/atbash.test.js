const { expect } = require('@jest/globals');
const atbash = require('../../src/ciphers/atbash');

describe('Ciphers scenarios', () => {
  test('If arguments are passed correctly, the function must write them to the object', () => {
    const letter = 'a';
    const letterAtbash = 'z';
    expect(atbash(letter)).toBe(letterAtbash);
  });

  test('If arguments are passed correctly, the function must write them to the object', () => {
    const letter = 'ф';
    const letterAtbash = 'ф';
    expect(atbash(letter)).toBe(letterAtbash);
  });

  test('If arguments are passed correctly, the function must write them to the object', () => {
    const letter = 'B';
    const letterAtbash = 'Y';
    expect(atbash(letter)).toBe(letterAtbash);
  });
});