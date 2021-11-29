const NotFoundError = require('../errors/not-found-error');
const PermissionError = require('../errors/permission-error');
const ServerError = require('../errors/server-error');
const smartphonesRepository = require('../repositories/smartphones');

module.exports.get = async (req, res, next) => {
    try {
        res.status(200).send(await smartphonesRepository.get(req.query))
    } catch (error) {
        next(new ServerError(error));
    };
};