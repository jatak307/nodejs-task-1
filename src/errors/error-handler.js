module.exports = function errorHandler (error) {
  const { isCustom, message, errorCode } = error;

  if (isCustom) {
      process.stderr.write(message);
      process.exit(errorCode);
  } else {
      throw error;
  }
};

// module.exports = function errorHundler(message) {
//   process.stderr.write(`Error: ${message}.`);
//   process.exit(1);
// }