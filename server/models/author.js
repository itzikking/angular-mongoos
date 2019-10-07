var mongoose = require('mongoose');


const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    county: {
        type: String,
        required: true
    }

})
module.exports = mongoose.model('author', authorSchema)

