const express = require('express')

const userRouter = express.Router();

const {getAllUsers} = require('../controllers/userController')

userRouter.get('/users', getAllUsers);

module.exports = userRouter;