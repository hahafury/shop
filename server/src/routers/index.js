const express = require('express');
const router = express.Router();
const authRouter = require('./auth');
const userRouter = require('./user');
const smartphonesRouter = require('./smartphones');
const shoppingCartRouter = require('./shopping-cart');
const ordersRouter = require('./orders');

authRouter(router);
userRouter(router);
smartphonesRouter(router);
shoppingCartRouter(router);
ordersRouter(router);

module.exports = router;