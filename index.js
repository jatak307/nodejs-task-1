const { pipeline } = require('stream');
const readStream = require('./read');
const writeStream = require('./write');
const atbashStream = require('./transform-atbash');
const caesarStream = require('./transform-caesar');
const args = require('./args');

console.log('INDEX', args);

pipeline(readStream, atbashStream, caesarStream('C1'), writeStream, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('success');
  }
});