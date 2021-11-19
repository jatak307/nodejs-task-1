module.exports = function isValidFileName(arg) {
  const name = arg.replace('./', '');
  return name.match(/^([\w\-]+)\.txt$/) ? true : false;
}