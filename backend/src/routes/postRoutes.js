const express = require('express')

const postRouter = express.Router();

const {createPost, getAllPosts} = require ('../controllers/postController');
const validatePost = require('../middlewares/validatePostMiddlewares');

postRouter.post('/createPost', validatePost, createPost);
postRouter.get('/posts', getAllPosts);


module.exports = postRouter;