const express = require('express')

const userRouter = express.Router();

const { createUser ,getAllUsers} = require('../controllers/userController')

userRouter.post('/createUser', createUser);
userRouter.get('/users', getAllUsers);


module.exports = userRouter;