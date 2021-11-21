const errorHandler = require('../errors/error-handler');
const isDuplicated = require('./duplication-check');
const isValid = require('./is-valid');

module.exports = function setArgument(obj, key, arg) {
  try {
    const checkArgument = !isDuplicated(obj, key) && isValid(key, arg);
    if (checkArgument) obj[key] = arg;
  } catch (error) {
    errorHandler(error);
  }
}
