const { pipeline } = require('stream');
const readStream = require('./read-stream');
const writeStream = require('./write-stream');
const transformArray = require('./transform-array');
const { config } = require('./args');

pipeline(readStream, ...transformArray(config), writeStream, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('success');
  }
});