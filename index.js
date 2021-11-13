const { pipeline } = require('stream');
const readStream = require('./read');
const writeStream = require('./write');
const transformArray = require('./transform-array');
const { config } = require('./args');

pipeline(readStream, ...transformArray(config), writeStream, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('success');
  }
});