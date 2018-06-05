const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PasswordSchema = new Schema({
    user: {
        type: Object,
        required: [true, 'User is required.']
    },
    hash: {
        type: String,
        required: [true, 'Password hash is required.']
    }
});

const Password = mongoose.model('password', PasswordSchema);

module.exports = Password;