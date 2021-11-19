module.exports = function errorHundler(message) {
  process.stderr.write(`Error: ${message}.`);
  process.exit(1);
}