const ServerError = require('../errors/server-error');
const smartphonesRepository = require('../repositories/smartphones');

module.exports.getAll = async (req, res, next) => {
    try {
        const smartphones = await smartphonesRepository.getAll(req.params);
        const maxSmartphonesPrice = await smartphonesRepository.maxPrice(req.params);
        const minSmartphonesPrice = await smartphonesRepository.minPrice(req.params);
        res.status(200).send(Object.assign({}, {
            smartphones: smartphones,
            maxPrice: maxSmartphonesPrice,
            minPrice: minSmartphonesPrice
        }));
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