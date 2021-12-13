const ServerError = require('../errors/server-error');
const smartphonesRepository = require('../repositories/smartphones');
const smartphoneService = require('../services/smartphones');

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

module.exports.create = async (req, res, next) => {
    try {
        const smartphoneData = JSON.parse(req.body.smartphoneData);
        smartphoneData.images = [];
        req.files.forEach(file => {
            smartphoneData.images.push(file.filename);
        })
        await smartphoneService.create(smartphoneData);
        res.sendStatus(201);
    } catch (error) {
        next(new ServerError(error));
    };
};