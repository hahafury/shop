const ordersController = require('../controllers/orders');
const checkToken = require('../middlewares/check-token');

module.exports = (router) => {
    router.post(
        '/orders',
        checkToken,
        ordersController.create
    );
    router.get(
        '/orders',
        checkToken,
        ordersController.getAll
    );
    router.patch(
        '/orders/:id',
        checkToken,
        ordersController.update
    );
};