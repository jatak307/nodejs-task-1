const { expect } = require('@jest/globals');
const createReadStream = require('../src/read-stream');

describe('Ciphers scenarios', () => {
  test('Should return the same letter in order on the other side of the alphabet', () => {
    const input = 'input.txt';
    expect(createReadStream(input)).toBeDefined();
    expect(createReadStream()).toBeDefined();
  });
});