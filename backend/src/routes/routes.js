const express = require('express')

const router = express.Router();

const {getAllUsers} = require('../controllers/controller')

router.get('/users', getAllUsers);

module.exports = router;