const hashPass = require('../middlewares/hash-pass');
const authController = require('../controllers/auth');

module.exports = (router) => {
    router.post(
        '/signup',
        hashPass,
        authController.registration
    );

    router.post(
        '/login',
        authController.login
    );
};