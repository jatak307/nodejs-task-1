const errorHundler = require('../errors/error-hundler');

function isValidConfig(config) {
  if(config === undefined) errorHundler('Config not found');
  
  let configArr;
  if (config[config.length - 1] === '-') {
    const configArr = config.slice(0, -1).split('-');
    return configArr.every((elem) => isValidElem(elem));
  }
  configArr = config.split('-');
  return configArr.every((elem) => isValidElem(elem));
}

function isValidElem(el) {
  return el.length === 1
    ? isValidAtbash(el)
    : el.length === 2
      ? isValidCaesar(el)
      : false;
}

function isValidAtbash(el) {
  return el === 'A' ? true : false;
}

function isValidCaesar(el) {
  if (el[0] === 'C' || el[0] === 'R') {
    return Number(el[1]) <= 1 ? true : false;
  } else {
    return false;
  }
}

module.exports = isValidConfig;