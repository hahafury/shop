const ServerError = require('../errors/server-error');
const shoppingCartService = require('../services/shopping-cart');
const shoppingCartRepository = require('../repositories/shopping-cart-repository');

module.exports.add = async (req, res, next) => {
    try {
        res.status(201).send(
            await shoppingCartService.add(req.body, req.user.id)
        );
    } catch (error) {
        next(new ServerError(error));
    };
};

module.exports.get = async (req, res, next) => {
    try {
        res.status(200).send(
            await shoppingCartRepository.get({
                userId: req.user.id
            })
        );
    } catch (error) {
        next(new ServerError(error));
    };
};

module.exports.delete = async (req, res, next) => {
    try {
        await shoppingCartRepository.delete(req.params);
        res.sendStatus(200);
    } catch (error) {
        next(new ServerError(error));
    };
};