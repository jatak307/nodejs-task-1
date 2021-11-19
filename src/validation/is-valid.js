const isValidConfig = require('./config-validation');
const isValidFileName = require('./filename-validation');
const errorHundler = require('../errors/error-hundler');

module.exports = function isValid(key, arg) {
  const configKey = 'config';
  if (key === configKey) {
    if (isValidConfig(arg)) {
      return true;
    } else {
      errorHundler('The config is not valid');
      return false;
    }
  } else {
      if (isValidFileName(arg)) {
        return true;
      } else {
        errorHundler('Filename error');
        return false;
      }
  }
}