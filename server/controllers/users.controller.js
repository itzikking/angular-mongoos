const PostsSchema = require('../models/psots');
const User = require('../models/user');

const jwt = require('jsonwebtoken');
const key = require('../models/key');

exports.Post_register = (req, res, next) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        gender: req.body.gender,
        age: req.body.age,
        email: req.body.email,
        role: req.body.role
    })
    try {
        const newuser = user.save()
            .then(result => {
                res.status(201).json({
                    message: "hellow" + username,
                    token: jwt.sign({ email: user.email, role: user.role }, key.secret)
                })
            })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}


exports.Post_login = (req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;
    try {
        const newuser = user.save()
            .then(result => {
                res.status(201).json({
                    message: "user sing in",
                    token: jwt.sign({ email: user.email, role: user.role }, key.secret, {
                        expiresIn: 86400 // expires in 24 hours
                    })
                })
            })
    } catch (err) {
        console.log(err);
    }
    finally { }
}