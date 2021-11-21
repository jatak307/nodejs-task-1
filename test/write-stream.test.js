const { expect } = require('@jest/globals');
const writeReadStream = require('../src/write-stream');

describe('Ciphers scenarios', () => {
  test('Should check if a variable is defined', () => {
    const output = 'output.txt';
    expect(writeReadStream(output)).toBeDefined();
    expect(writeReadStream()).toBeDefined();
  });
});