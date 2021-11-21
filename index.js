const { pipeline } = require('stream');
const readStream = require('./src/read-stream');
const writeStream = require('./src/write-stream');
const transformArray = require('./src/transform-array');
const errorHandler = require('./src/errors/error-handler');
const getArguments = require('./src/args');

let mainObj;

try {
  mainObj = getArguments(process.argv);
} catch (error) {
  errorHandler(error);
}

pipeline(readStream(mainObj.input), ...transformArray(mainObj.config), writeStream(mainObj.output), (err) => {
  if (err) {
    errorHandler(error);
  } else {
    console.log('success');
  }
});