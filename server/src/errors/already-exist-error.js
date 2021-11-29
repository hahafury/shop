const ApplicationError = require('./application-error');

class AlreadyExistError extends ApplicationError{
  constructor (message) {
    super(message || 'Already exist', 409);
  }
}

module.exports = AlreadyExistError;
