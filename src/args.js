const isValidConfig = require('./validation/config-validation');
const isDuplicated = require('./validation/duplication-check');

if (process.argv.length < 3) {
  process.stderr.write(`Error: Arguments must be provided to run the application.\nFor example: -c "C1" -i "input.txt" -o "output.txt"`);
  process.exit(1);
}

const args = process.argv.reduce((acc, current, i, arr) => {
  if (current === '-c' || current === '--config') {
    isDuplicated(acc, 'config');
    if (isValidConfig(arr[i + 1])) {
      acc['config'] = arr[i + 1];
    } else {
      process.stderr.write(`Error: The config is not valid.`);
      process.exit(1);
    }
  } else if (current === '-i' || current === '--input') {
    isDuplicated(acc, 'input');
    acc['input'] = arr[i + 1];
  } else if (current === '-o' || current === '--output') {
    isDuplicated(acc, 'output');
    acc['output'] = arr[i + 1];
  }
  return acc;
}, {});

module.exports = args;
