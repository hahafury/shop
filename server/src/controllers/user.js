
const ServerError = require('../errors/server-error');
const userService = require('../services/user');

module.exports.get = async (req, res, next) => {
    try {
        res.status(200).send(
            await userService.get(req.headers.authorization)
        );
    } catch (error) {
        next(new ServerError(error));
    };
};