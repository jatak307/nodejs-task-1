const { expect } = require('@jest/globals');
const createReadStream = require('../src/read-stream');

describe('Ciphers scenarios', () => {
  test('Should check if a variable is defined', () => {
    const input = 'input.txt';
    expect(createReadStream(input)).toBeDefined();
    expect(createReadStream()).toBeDefined();
  });
});