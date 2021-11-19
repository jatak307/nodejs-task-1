const isDuplicated = require('../../src/validation/duplication-check');

test('Should get the arguments object', () => {
  const obj = { input: 'input.txt'}
  expect(isDuplicated(obj, 'config')).toBe(false);
});