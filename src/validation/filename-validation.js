const fs = require('fs');
const path = require('path');
const ValidFileNameError = require('../errors/errors');

module.exports = function isValidFileName(key, arg) {
  // const name = arg.replace('./', '');
  // const regName = name.match(/^([\w\-]+)\.txt$/);
  if (fs.accessSync(path.resolve(arg), fs.constants.R_OK) !== undefined) {
    throw new ValidFileNameError(`${key} no access!`);
  } else {
    return true;
  }
}
