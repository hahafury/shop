const smartphonesController = require('../controllers/smartphones');

module.exports = (router) => {
    router.get(
        '/smartphones',
        smartphonesController.get
    );
};