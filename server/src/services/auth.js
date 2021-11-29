const AlreadyExistError = require('../errors/already-exist-error');
const NotFoundError = require('../errors/not-found-error');
const passwordCompare = require('../helpers/password-compare');
const jwtSign = require('../helpers/jwt-sign');
const userRepository = require('../repositories/user');

module.exports.signup = async (data) => {
    const foundUser = await userRepository.get({
        login: data.login
    });
    
    if (!foundUser) {
        const newUser = await userRepository.create(data);
        console.log(newUser.id)
        const accessToken = jwtSign(newUser);
        const refreshToken = jwtSign(newUser, true);

        await userRepository.update({ refreshToken: refreshToken }, { id: newUser.id });

        return {
            accessToken,
            refreshToken
        };
    } else {
        throw new AlreadyExistError('User with this login already exists');
    };
};

module.exports.login = async (data) => {
    const foundUser = await userRepository.get({
        login: data.login
    });

    if (foundUser) {
        await passwordCompare(data.password, foundUser.password);

        const accessToken = jwtSign(foundUser);
        const refreshToken = jwtSign(foundUser, true);

        await userRepository.update({ refreshToken: refreshToken }, { id: foundUser.id });

        return {
            accessToken,
            refreshToken
        };
    } else {
        throw new NotFoundError('User with this login was not found');
    };
};
