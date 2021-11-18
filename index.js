const { pipeline } = require('stream');
const readStream = require('./src/read-stream');
const writeStream = require('./src/write-stream');
const transformArray = require('./src/transform-array');
const { config } = require('./src/args');

pipeline(readStream, ...transformArray(config), writeStream, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('success');
  }
});