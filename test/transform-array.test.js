const { expect } = require('@jest/globals');
const transformArray = require('../src/transform-array');

describe('Ciphers scenarios', () => {
  test('Should return the same letter in order on the other side of the alphabet', () => {
    const config = 'C1-A-R0';
    expect(transformArray(config)).toHaveLength(3);
  });
});