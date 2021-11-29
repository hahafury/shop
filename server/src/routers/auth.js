const hashPass = require('../middlewares/hash-pass');
const auth = require('../controllers/auth');

module.exports = (router) => {
    router.post(
        '/signup',
        hashPass,
        auth.registration
    );

    router.post(
        '/login',
        auth.login
    );
};