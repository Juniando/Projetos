import express from 'express';
import {createPost, getAllPosts} from '../controllers/postController.js';
import validatePost from '../middlewares/validatePostMiddlewares.js';

const postRouter = express.Router();

postRouter.post('/createPost', validatePost, createPost);
postRouter.get('/posts', getAllPosts);

export default postRouter;