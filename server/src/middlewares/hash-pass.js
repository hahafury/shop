const CONSTANTS = require('../constants');
const ServerError = require('../errors/server-error');
const bcrypt = require('bcrypt');

module.exports = async (req, res, next) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, parseInt(process.env.SALT_ROUNDS));
        next();
    } catch (err) {
        next(new ServerError('Server Error on hash password'));
    };
};