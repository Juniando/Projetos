import express from 'express';
import { login } from '../controllers/authController.js';

const authRouter = express.Router();

authRouter.post("/login", login); // POST /api/auth/login

export default authRouter;