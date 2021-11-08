const { pipeline } = require('stream');
const readStream = require('./read');
const writeStream = require('./write');

pipeline(readStream, writeStream, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('success');
  }
});