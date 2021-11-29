const ApplicationError = require('./application-error');

class TokenError extends ApplicationError{
  constructor (message) {
    super(message || 'Token error', 408);
  }
}

module.exports = TokenError;

