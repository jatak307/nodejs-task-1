const isValidConfig = require('./config-validation');
const isValidFileName = require('./filename-validation');

module.exports = function isValid(key, arg) {
  const configKey = 'config';
  if (key === configKey) {
    return isValidConfig(arg);
  } else {
    return isValidFileName(key, arg);
  }
}