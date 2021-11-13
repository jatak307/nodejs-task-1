const { pipeline } = require('stream');
const readStream = require('./read');
const writeStream = require('./write');
const atbashStream = require('./transform-atbash');
const caesarStream = require('./transform-caesar');
const rotStream = require('./transform-rot');
const args = require('./args');

console.log('INDEX', args);

pipeline(readStream, caesarStream('C1'), caesarStream('C1'), rotStream('R0'), atbashStream, writeStream, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('success');
  }
});