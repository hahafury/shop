const ApplicationError = require('./application-error');

class NotSoldYetError extends ApplicationError{
  constructor (message) {
    super(message || 'Not sold yet', 404);
  }
}

module.exports = NotSoldYetError;
