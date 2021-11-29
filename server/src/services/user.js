const TokenError = require('../errors/token-error');
const ServerError = require('../errors/server-error');
const getUserData = require('../helpers/get-user-data');

module.exports.get = async (token) => {
    if (!token) {
        throw new TokenError('Need token');
    };
    try {
        const tokens = JSON.parse(token);
        const userData = await getUserData(tokens.accessToken, true);
        return userData;
    } catch (error) {
        throw new ServerError(error);
    };
};
  