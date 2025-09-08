import express from 'express';
import {createUser, deleteUser, getAllUsers} from '../controllers/userController.js';

const userRouter = express.Router();


userRouter.post('/createUser', createUser);
userRouter.get('/users', getAllUsers);
userRouter.delete('/deleteUser/:id', deleteUser);

export default userRouter;