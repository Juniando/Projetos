const express = require('express')

const postRouter = express.Router();

const {createPost, getAllPosts} = require ('../controllers/postController')

postRouter.get('/posts', getAllPosts);

module.exports = postRouter;