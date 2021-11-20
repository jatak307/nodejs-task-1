const { DuplicatedError } = require('../errors/errors')

module.exports = function isDuplicated(obj, key) {
  if(obj[key]) {
    throw new DuplicatedError(`Error: You provided -${key} argument more than once`);
  }
  return false;
}
