const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A user must have a name'],
        trim: true
    },
    username: {
        type: String,
        required: [true, 'A user must have a username'],
        trim: true,
        unique: true
        },
    password: {
        type: String,
        required: [true, 'A user must have a password'],
        trim: true
    },
    role:{
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    }
}
);

const UserModel = mongoose.model('Users', userSchema);

module.exports = UserModel;