const { expect } = require('@jest/globals');
const getArguments = require('../src/args');
const { ConfigError } = require('../src/errors/errors');

// describe('Error scenarios: 3, 4 points', () => {
//   it('Should throw an error if process data isn\'t correct', async () => {
//     let customStdin = 'node my_ciphering_cli';
//     const processData = customStdin.split(' ');
//     const mockExit = jest.spyOn(process, 'exit').mockImplementation((number) => { 
//       throw new ConfigError('process.exit: ' + number); 
//     });
//     expect(() => getArguments(processData)).toThrow();
//     expect(mockExit).toHaveBeenCalledWith(1);
//     mockExit.mockRestore();
//   });
// });


describe('Success scenarios', () => {
  test('Should return the config object', () => {
    let customStdin = 'node my_ciphering_cli -c C1-C1-R0-A -i ./input.txt -o ./output.txt';
    const processData = customStdin.split(' ');
    const resultObj = {
      config: 'C1-C1-R0-A',
      input: './input.txt',
      output: './output.txt'
    }
    expect(getArguments(processData)).toEqual(resultObj);
  });
});