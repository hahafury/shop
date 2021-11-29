const express = require('express');
const router = express.Router();
const authRouter = require('./auth');
const userRouter = require('./user');
const smartphonesRouter = require('./smartphones');

authRouter(router);
userRouter(router);
smartphonesRouter(router);


module.exports = router;