import express from 'express';
import {createUser, getAllUsers} from '../controllers/userController.js';

const userRouter = express.Router();


userRouter.post('/createUser', createUser);
userRouter.get('/users', getAllUsers);

export default userRouter;