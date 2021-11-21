const { expect } = require('@jest/globals');
const transformArray = require('../src/transform-array');

describe('Success scenarios', () => {
  test('Should be equal to three', () => {
    const config = 'C1-A-R0';
    expect(transformArray(config)).toHaveLength(3);
  });
});