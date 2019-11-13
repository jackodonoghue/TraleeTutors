const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

mongoose.model('Users', usersSchema);