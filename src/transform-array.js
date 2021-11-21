const atbashStream = require('./transform-streams/transform-atbash');
const caesarStream = require('./transform-streams/transform-caesar');
const rotStream = require('./transform-streams/transform-rot');

const transformArray = (config) => {
  configArr = config.split('-');
  const transformArr = configArr.reduce((acc, cur, i, arr) => {
    let value = cur[0] === 'A' ? atbashStream() : cur[0] === 'C' ? caesarStream(cur) : rotStream(cur);
    acc.push(value);
    return acc;
  }, []);
  
  return transformArr;
};

module.exports = transformArray;