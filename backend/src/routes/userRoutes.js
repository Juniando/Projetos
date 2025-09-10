import express from 'express';
import {createUser, createAdminUser, deleteUser, getAllUsers, getMe} from '../controllers/userController.js';
import { adminMiddleware } from '../middlewares/adminMiddleware.js';
import  authMiddleware  from '../middlewares/authMiddleware.js';

const userRouter = express.Router();


userRouter.post('/createUser', createUser);
userRouter.get('/me', authMiddleware, getMe);
userRouter.post("/create-admin", authMiddleware, adminMiddleware, createAdminUser);
userRouter.get('/users', authMiddleware, adminMiddleware, getAllUsers);
userRouter.delete('/deleteUser/:id', authMiddleware, adminMiddleware, deleteUser);

export default userRouter;