const TokenError = require('../errors/token-error');
const ServerError = require('../errors/server-error');
const getUserData = require('../helpers/get-user-data');

module.exports = async (req, res, next) => {
    if (!req.headers.authorization) {
        return next(new TokenError('Need token'));
    }
    try {
        const token = JSON.parse(req.headers.authorization);
        req.user = await getUserData(token.accessToken);
        next();
    } catch (error) {
        next(new ServerError(error))
    };
};