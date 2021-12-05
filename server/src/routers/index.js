const express = require('express');
const router = express.Router();
const authRouter = require('./auth');
const userRouter = require('./user');
const smartphonesRouter = require('./smartphones');
const shoppingCartRouter = require('./shopping-cart');

authRouter(router);
userRouter(router);
smartphonesRouter(router);
shoppingCartRouter(router);

module.exports = router;