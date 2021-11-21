const { expect } = require('@jest/globals');
const caesar = require('../../src/ciphers/caesar');

describe('Ciphers scenarios', () => {
  test('Should return the next letter of the alphabet', () => {
    const letter = 'a';
    const type = 'C1';
    const letterCaesar = 'b';
    expect(caesar(letter, type)).toBe(letterCaesar);
  });

  test('Shouldn\'t change symbol', () => {
    const letter = 'ф';
    const type = 'C1';
    const letterCaesar = 'ф';
    expect(caesar(letter, type)).toBe(letterCaesar);
  });

  test('Should return the previous letter of the alphabet', () => {
    const letter = 'B';
    const type = 'C0';
    const letterCaesar = 'A';
    expect(caesar(letter, type)).toBe(letterCaesar);
  });
});