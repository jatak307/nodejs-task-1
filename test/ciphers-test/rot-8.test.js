const { expect } = require('@jest/globals');
const rot = require('../../src/ciphers/rot-8');

describe('Ciphers scenarios', () => {
  test('Should return a letter 8 steps forward alphabetically', () => {
    const letter = 'a';
    const type = 'R1';
    const letterCaesar = 'i';
    expect(rot(letter, type)).toBe(letterCaesar);
  });

  test('Shouldn\'t change symbol', () => {
    const letter = '-';
    const type = 'R0';
    const letterCaesar = '-';
    expect(rot(letter, type)).toBe(letterCaesar);
  });

  test('Should return a letter 8 steps back alphabetically', () => {
    const letter = 'J';
    const type = 'R0';
    const letterCaesar = 'B';
    expect(rot(letter, type)).toBe(letterCaesar);
  });
});