var express = require('express');
var router = express.Router();

//Models
const PostsSchema = require('../models/psots');
const User = require('../models/user');
const author = require('../models/author');
//Middlewares
const controller = require('../controller');
const Token = require('../middleware/Token');
const Singup = require('../middleware/ChackUsers');


router.post('/register', [Singup.ChackUsers], controller.Post_register);

router.post('/login', [Singup.ChackUsers, Token], controller.Post_login);


module.exports = router;
