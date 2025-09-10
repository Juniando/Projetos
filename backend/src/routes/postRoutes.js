import express from 'express';
import {createPost, deletePost, getAllPosts, getMyPosts, getPost} from '../controllers/postController.js';
import validatePost from '../middlewares/validatePostMiddleware.js';
import checkPostExist from '../middlewares/checkPostExistsMiddleware.js'
import authMiddleware from '../middlewares/authMiddleware.js'
const postRouter = express.Router();


// depois de popular o banco, adicionar o authMiddleware.
postRouter.post('/createPost', validatePost, createPost);

postRouter.get('/posts', authMiddleware, getAllPosts);
postRouter.get('/post/:id',checkPostExist, getPost);
postRouter.get('/myPosts', authMiddleware, getMyPosts);
postRouter.delete('/deletePost/:id', authMiddleware,checkPostExist, deletePost);

export default postRouter;