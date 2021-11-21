const { expect } = require('@jest/globals');
const setArgument = require('../../src/validation/set-argument');

describe('Error scenarios: 3, 4 points', () => {
  it('Should throw an error if no config passed', async () => {
    const obj = {};
    const key = 'config';
    const mockExit = jest.spyOn(process, 'exit').mockImplementation((number) => { 
      throw new Error('process.exit: ' + number); 
    });
    expect(() => setArgument(obj, key)).toThrow();
    expect(mockExit).toHaveBeenCalledWith(1);
    mockExit.mockRestore();
  });

  it('Should throw an error if config is resubmitted', async () => {
    const obj = {config: 'C1'};
    const key = 'config';
    const arg = 'A-R0';
    const mockExit = jest.spyOn(process, 'exit').mockImplementation((number) => { 
      throw new Error('process.exit: ' + number); 
    });
    expect(() => setArgument(obj, key, arg)).toThrow();
    expect(mockExit).toHaveBeenCalledWith(1);
    mockExit.mockRestore();
  });
});

describe('Success scenarios', () => {
  test('If arguments are passed correctly, the function must write them to the object', () => {
    const obj = {config: 'C1'};
    const key = 'output';
    const arg = 'input.txt';
    setArgument(obj, key, arg);
    const obj2 = {config: 'C1', output: 'input.txt'};
    expect(obj).toEqual(obj2);
  });
});