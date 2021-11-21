const { expect } = require('@jest/globals');
const isValid = require('../../src/validation/is-valid');

describe('Success scenarios', () => {
  test('should be truthy', () => {
    const iKey = 'input';
    const arg = './input.txt';
    expect(isValid(iKey, arg)).toBe(true);
  });
  test('should be truthy', () => {
    const iKey = 'config';
    const arg = 'C1-C1-R0-A';
    expect(isValid(iKey, arg)).toBe(true);
  });
});


