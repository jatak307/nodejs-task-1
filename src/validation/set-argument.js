const errorHundler = require('../errors/error-hundler');
const isDuplicated = require('./duplication-check');
const isValid = require('./is-valid');

module.exports = function setArgument(obj, key, arg) {
  const checkArgument = !isDuplicated(obj, key) && isValid(key, arg);
  checkArgument
    ? obj[key] = arg
    : errorHundler('The process was aborted because some of the arguments are duplicated');
}
