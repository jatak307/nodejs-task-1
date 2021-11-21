const { expect } = require('@jest/globals');
const isValidConfig = require('../../src/validation/config-validation');

describe('Error scenarios: 2, 5 points', () => {
  test('should throw an exception if the file name is invalid or if the file cannot be accessed', () => {
    const config = 'C';
    expect(() => isValidConfig(config)).toThrow();
  });
  test('should throw an exception if the file name is invalid or if the file cannot be accessed', () => {
    const config = 'A1';
    expect(() => isValidConfig(config)).toThrow();
  });
  test('should throw an exception if the file name is invalid or if the file cannot be accessed', () => {
    const config = 'R3';
    expect(() => isValidConfig(config)).toThrow();
  });
  test('should throw an exception if the file name is invalid or if the file cannot be accessed', () => {
    expect(() => isValidConfig()).toThrow();
  });
});

describe('Success scenarios: 1,2 points', () => {
  test('should be truthy', () => {
    const config = 'C1-C0-A-R1-R0-A-R0-R0-C1-A';
    expect(isValidConfig(config)).toBe(true);
  });
  test('should be truthy', () => {
    const config = 'A-A-A-R1-R0-R0-R0-C1-C1-A';
    expect(isValidConfig(config)).toBe(true);
  });
  test('should be truthy', () => {
    const config = 'C1-R1-C0-C0-A-R0-R1-R1-A-C1';
    expect(isValidConfig(config)).not.toBeFalsy();
  });
});
