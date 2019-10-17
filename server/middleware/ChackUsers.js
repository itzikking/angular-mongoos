const User = require('../models/user');

ChackUsers = (req, res, next) => {
    let chack_Email = req.body.email
    console.log("ChackUsers:" + chack_Email);

    // -> Check Username is already in use
    const USER = User.findOne({ email: chack_Email }, function (err, results) {
        if (err) return handleError(err);
    });
    USER.then(results => {
        if (results) {
            res.status(400).send("Fail -> Email is already taken!");
            console.log("USER IN DATA");
            return;
        }
        next()
    }).catch(err => {
        res.status(403).send("Fail -> Samting worng" + err);
    })
}
const Singup = {};
Singup.ChackUsers = ChackUsers;
module.exports = Singup