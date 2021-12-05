const shoppingCartController = require('../controllers/shopping-cart');
const checkToken = require('../middlewares/check-token');

module.exports = (router) => {
    router.post(
        '/shopping-cart',
        checkToken,
        shoppingCartController.add
    );
    router.get(
        '/shopping-cart',
        checkToken,
        shoppingCartController.get
    );
    router.delete(
        '/shopping-cart/:id',
        checkToken,
        shoppingCartController.delete
    );
};