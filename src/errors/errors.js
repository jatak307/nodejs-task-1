class ValidFileNameError extends Error {
  constructor(message) {
      super(message);
      this.message = message;
      this.name = 'ValidFileName';
      this.isCustom = true;
      this.errorCode = 1;
  }
}

class DuplicatedError extends Error {
  constructor(message) {
      super(message);
      this.message = message;
      this.name = 'DuplicatedError';
      this.isCustom = true;
      this.errorCode = 1;
  }
}

class ConfigError extends Error {
  constructor(message) {
      super(message);
      this.message = message;
      this.name = 'ConfigError';
      this.isCustom = true;
      this.errorCode = 1;
  }
}

module.exports = {
  ValidFileNameError,
  DuplicatedError,
  ConfigError
}