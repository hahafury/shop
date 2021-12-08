const ServerError = require('../errors/server-error');
const smartphonesRepository = require('../repositories/smartphones');

module.exports.getAll = async (req, res, next) => {
    try {
        res.status(200).send(
            await smartphonesRepository.getAll(req.params, req.query)
        );
    } catch (error) {
        next(new ServerError(error));
    };
};

module.exports.get = async (req, res, next) => {
    try {
        res.status(200).send(await smartphonesRepository.get(req.params));
    } catch (error) {
        next(new ServerError(error));
    };
};