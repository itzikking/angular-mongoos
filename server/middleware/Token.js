const jwt = require('jsonwebtoken');
const User = require('../models/user');
const key = require('../models/key');

Token = (req, res, next) => {
    let token = req.headers['x-access-token'];
    if (!token) return res.status(403).json({ admin: false, message: "No Token." });

    jwt.verify(token, key, (err, decoded) => {
        if (err) {
            return res.status(500).send({
                admin: false,
                message: 'Fail to Authentication. Error -> ' + err
            });
        }
        console.log("decoded" + decoded);

        // req.User = decoded.id;
        next();
    });
}
module.exports = Token;