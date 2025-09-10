import express from 'express';
import {createUser, createAdminUser, deleteUser, getAllUsers, getMe} from '../controllers/userController.js';
import { adminMiddleware } from '../middlewares/adminMiddleware.js';
import  authMiddleware  from '../middlewares/authMiddleware.js';

const userRouter = express.Router();


// rotas públicas
userRouter.post("/", createUser); // POST /api/users → criar usuário normal

// rotas privadas
userRouter.get("/me", authMiddleware, getMe); // GET /api/users/me

// apenas admin
userRouter.post("/admin", authMiddleware, adminMiddleware, createAdminUser); // POST /api/users/admin
userRouter.get("/", authMiddleware, adminMiddleware, getAllUsers);           // GET /api/users
userRouter.delete("/:id", authMiddleware, adminMiddleware, deleteUser);      // DELETE /api/users/:id


export default userRouter;