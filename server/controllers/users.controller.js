const PostsSchema = require('../models/psots')
const User = require('../models/user')



const jwt = require('jsonwebtoken');
const key = require('../models/key');

exports.Post_register = (req, res, next) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        role: req.body.role
    })
    try {
        const newuser = user.save()
            .then(result => {
                res.status(201).json({
                    message: "user created",
                    token: jwt.sign({ email: user.email, role: user.role }, key.secret, {
                        expiresIn: 86400 // expires in 24 hours
                    })
                })
            })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}


exports.Post_login = (req, res, next) => {
    try {
        res.send("yofi")
    } catch (err) {
        console.log(err);
    }
    finally { }
}