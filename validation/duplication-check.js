function isDuplicated(obj, key) {
  if (obj[key]) {
    process.stderr.write(`Error: The process was aborted because some of the arguments are duplicated.`);
    process.exit(1);
  }
}

module.exports = isDuplicated;