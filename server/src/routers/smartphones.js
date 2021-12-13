const smartphonesController = require('../controllers/smartphones');
const checkToken = require('../middlewares/check-token');
const imageUpload = require('../middlewares/image-upload');
const isSmartphoneExist = require('../middlewares/is-smartphone-exist');

module.exports = (router) => {
    router.get(
        '/smartphones/:brand',
        smartphonesController.getAll
    );
    router.get(
        '/smartphone/:id',
        smartphonesController.get
    );
    router.post(
        '/smartphone',
        checkToken,
        imageUpload.array('smartphoneImages[]'),
        smartphonesController.create
    );
};