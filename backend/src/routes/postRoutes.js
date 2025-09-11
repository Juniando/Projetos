import express from 'express';
import {createPost, deletePost, getAllPosts, getMyPosts, getPost} from '../controllers/postController.js';
import validatePost from '../middlewares/validatePostMiddleware.js';
import checkPostExist from '../middlewares/checkPostExistsMiddleware.js'
import authMiddleware from '../middlewares/authMiddleware.js'
const postRouter = express.Router();

// rotas públicas
postRouter.get("/", getAllPosts);                     // GET /api/posts
postRouter.get("/:id", checkPostExist, getPost);      // GET /api/posts/:id

// rotas privadas
postRouter.post("/", authMiddleware, validatePost, createPost);     // POST /api/posts
postRouter.get("/me/mine", authMiddleware, getMyPosts);             // GET /api/posts/me/mine
postRouter.delete("/:id", authMiddleware, checkPostExist, deletePost); // DELETE /api/posts/:id



export default postRouter