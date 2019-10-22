const User = require('../models/user');

ChackUsers = (req, res, next) => {
    let chack_Role = req.body.role;
    let chack_Email = req.body.email;
    console.log("ChackUsers:" + chack_Email + " Role:" + chack_Role);
    if (chack_Role == "USER") {
        // -> Check USER is already in 
        const USER = User.findOne({ email: chack_Email, role: chack_Role }, function (err, results) {
            if (err) return handleError(err);
        });
        USER.then(results => {
            if (results) {
                res.status(400).send("Fail -> Email is already taken!");
                console.log("USER already in");
                return;
            }
            next()
        }).catch(err => {
            res.status(403).send("Fail -> Samting worng" + err);
        })
    } else if (chack_Role == "ADMIN") {
        // -> Check ADMIN is already in 
        const USER = User.findOne({ email: chack_Email, role: chack_Role }, function (err, results) {
            if (err) return handleError(err);
        });
        USER.then(results => {
            if (results) {
                res.status(400).send("Fail -> Email is already taken!");
                console.log("ADMIN already in");
                return;
            }
            next()
        }).catch(err => {
            res.status(403).send("Fail -> Samting worng" + err);
        })
    } else if (chack_Role === undefined) {
        res.status(403).send("Fail -> Samting worng");
    }
};
const Singup = {};
Singup.ChackUsers = ChackUsers;
module.exports = Singup