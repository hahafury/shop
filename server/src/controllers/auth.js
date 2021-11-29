const NotFoundError = require('../errors/not-found-error');
const PermissionError = require('../errors/permission-error');
const AlreadyExistError = require('../errors/already-exist-error');
const ServerError = require('../errors/server-error');
const authService = require('../services/auth');

module.exports.login = async (req, res, next) => {
    try {
        res.status(200).send(
            await authService.login(req.body)
        );
    } catch (error) {
        error instanceof PermissionError && next(new PermissionError('Wrong password'));
        error instanceof NotFoundError && next(new NotFoundError('User with this login was not found'));
        next(new ServerError(error));
    };
};

module.exports.registration = async (req, res, next) => {
    try {
        res.status(200).send(
            await authService.signup(req.body)
        );
    } catch (error) {
        error instanceof AlreadyExistError && next(new AlreadyExistError('User with this login already exists'));
        next(new ServerError(error));
    };
};