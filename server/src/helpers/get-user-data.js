const userRepository = require('../repositories/user');
const jwt = require('jsonwebtoken');

module.exports = async (token) => {
    return userRepository.get({
        id: (jwt.verify(token, process.env.JWT_SECRET)).id
    });
};