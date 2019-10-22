var mongoose = require('mongoose');


const User = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        admin: true
    }
})
module.exports = mongoose.model('Users', User)