const ServerError = require('../errors/server-error');
const ordersService = require('../services/orders');
const ordersRepository = require('../repositories/orders');

module.exports.create = async (req, res, next) => {
    try {
        await ordersService.create(req.body, req.user);
        res.sendStatus(200);
    } catch (error) {
        next(new ServerError(error));
    };
};

module.exports.getAll = async (req, res, next) => {
    try {
        res.status(200).send(
            await ordersRepository.getAll(req.user.role === 'ADMIN' ? null : req.user.id, req.query.id)
        )
    } catch (error) {
        next(new ServerError(error));
    };
};

module.exports.update = async (req, res, next) => {
    try {
        await ordersService.update(req.params, req.body, req.user);
        res.sendStatus(200);
    } catch (error) {
        next(new ServerError(error));
    }  
};