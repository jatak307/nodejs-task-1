const { expect } = require('@jest/globals');
const isValidFileName = require('../../src/validation/filename-validation');

describe('Error scenarios: 3, 4 points', () => {
  test('should throw an exception if the file name is invalid or if the file cannot be accessed', () => {
    const iKey = 'input';
    const incorrectInputName = './iugiug';
    expect(() => isValidFileName(iKey, incorrectInputName)).toThrow();
  });
});

test('should be truthy', () => {
  const iKey = 'input';
  const correctInputName = './input.txt';
  expect(isValidFileName(iKey, correctInputName)).toBe(true);
});
