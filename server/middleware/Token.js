const jwt = require('jsonwebtoken');
const User = require('../models/user');
const key = require('../models/key');

Token = (req, res, next) => {
    let token = req.headers['x-access-token'];
    if (!token) return res.status(403).json({ message: "No Token." });

    jwt.verify(token, key, (err, decoded) => {
        if (err) {
            return res.status(500).send({
                message: 'Fail to Authentication. Error -> ' + err
            });
        }
        console.log("decoded" + decoded);

        // req.User = decoded.id;
        next();
    }).catch(err => {
        res.status(403).send("Fail -> Samting worng" + err);
    })
}
module.exports = Token;