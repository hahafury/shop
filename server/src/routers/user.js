const user = require('../controllers/user');

module.exports = (router) => {
    router.get(
        '/user',
        user.get
    );
};