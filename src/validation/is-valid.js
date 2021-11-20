const isValidConfig = require('./config-validation');
const isValidFileName = require('./filename-validation');
const errorHandler = require('../errors/error-handler');

module.exports = function isValid(key, arg) {
  const configKey = 'config';
  if (key === configKey) {
    // if (isValidConfig(arg)) {
    //   return true;
    // } else {
    //   errorHandler('The config is not valid');
    //   return false;
    // }
    return isValidConfig(arg);
  } else {
    return isValidFileName(key, arg);
      // if (isValidFileName(key, arg)) {
      //   return true;
      // } else {
      //   errorHundler('Filename error');
      //   return false;
      // }
  }
}