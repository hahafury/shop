const ApplicationError = require('./ApplicationError');

class UncorrectedPassword extends ApplicationError{
  constructor (message) {
    super(message || 'Uncorrected password', 406);
  }
}

module.exports = UncorrectedPassword;

