const ApplicationError = require('./application-error');

class PermissionError extends ApplicationError{
  constructor (message) {
    super(message || 'Not enough rights', 423);
  }
}

module.exports = PermissionError;
