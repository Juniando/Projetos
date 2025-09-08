import express from 'express';
import {createPost, deletePost, getAllPosts, getPost} from '../controllers/postController.js';
import validatePost from '../middlewares/validatePostMiddleware.js';
import checkPostExist from '../middlewares/checkPostExistsMiddleware.js'
const postRouter = express.Router();

postRouter.post('/createPost', validatePost, createPost);
postRouter.get('/posts', getAllPosts);
postRouter.delete('/deletePost/:id', checkPostExist, deletePost);
postRouter.get('/post/:id',checkPostExist, getPost);

export default postRouter;