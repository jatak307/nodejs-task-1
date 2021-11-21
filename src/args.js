const setArgument = require('./validation/set-argument');
const errorHandler = require('./errors/error-handler');
const { ConfigError } = require('./errors/errors');

let args;

function getArguments() {
  if (process.argv.length < 3) throw new ConfigError(
    `Error: Arguments must be provided to run the application.\nFor example: -c "C1" -i "input.txt" -o "output.txt"`
    );

  const args = process.argv.reduce((acc, current, i, arr) => {
    if (current === '-c' || current === '--config') {
      setArgument(acc, 'config', arr[i + 1]);
    } else if (current === '-i' || current === '--input') {
      setArgument(acc, 'input', arr[i + 1]);
    } else if (current === '-o' || current === '--output') {
      setArgument(acc, 'output', arr[i + 1]);
    }
    return acc;
  }, {});

  return args;
}

try {
  args = getArguments();
} catch (error) {
  errorHandler(error);
}

module.exports = args;
