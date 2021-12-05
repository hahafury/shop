const smartphonesController = require('../controllers/smartphones');

module.exports = (router) => {
    router.get(
        '/smartphones/:brand',
        smartphonesController.getAll
    );
    router.get(
        '/smartphone/:id',
        smartphonesController.get
    );
};