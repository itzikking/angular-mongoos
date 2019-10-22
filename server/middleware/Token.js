const jwt = require('jsonwebtoken');
const User = require('../models/user');
const key = require('../models/key');

Token = (req, res, next) => {
    let token = req.headers.token;
    let username = req.body.username;
    let password = req.body.password;

    const USER = User.findOne({ username: username, }, function (err, results) {
        if (err) return handleError(err);
        console.log(results);
    });
    // if (!token) return res.status(403).json({ message: "No Token." });

    jwt.verify(token, key, (err, decoded) => {
        if (err) {
            return res.status(500).send({
                message: 'Fail to Authentication. Error -> ' + err
            });
        }
        console.log("decoded" + decoded);
        next();
    }).catch(err => {
        res.status(403).send("Fail -> Samting worng" + err);
    })
}
module.exports = Token;