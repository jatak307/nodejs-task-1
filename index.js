const { pipeline } = require('stream');
const readStream = require('./read');
const writeStream = require('./write');
const atbashStream = require('./transform');
const args = require('./args');

console.log('INDEX', args);

pipeline(readStream, atbashStream, writeStream, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('success');
  }
});