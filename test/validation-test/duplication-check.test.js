const isDuplicated = require('../../src/validation/duplication-check');

describe('Error scenarios: 1 point', () => {
  test('Should throw an error if the -c argument is passed more than once', () => {
    const obj = { config: 'C1'};
    expect(() => isDuplicated(obj, 'config')).toThrow();
  });
  test('Should throw an error if the -i argument is passed more than once', () => {
    const obj = { input: 'input.txt'};
    expect(() => isDuplicated(obj, 'input')).toThrow();
  });
  test('Should throw an error if the -o argument is passed more than once', () => {
    const obj = { output: 'input.txt'};
    expect(() => isDuplicated(obj, 'output')).toThrow();
  });
});

describe('Success scenarios', () => {
  test('should be falsy', () => {
    const obj = { output: 'input.txt'};
    expect(isDuplicated(obj, 'input')).toBe(false);
  });
});