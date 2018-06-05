const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username is required.']
    },
    email: {
        type: String,
        required: [true, 'Email is required.']
    },
    telephone: {
        type: String,
        required: [true, 'Telephone is required.']
    },
    name: {
        type: String,
        required: [true, 'Name is required.']
    },
    avatar: {
        type:String,
        required: [true, 'Avatar is required.']
    },
    bio: [{
        type: Schema.Types.ObjectId,
        ref: 'bio'
    }],
    isActive: {
        type: Boolean,
        default: false
    },
    teams: [{
        type: Schema.Types.ObjectId,
        ref: 'team'
    }],
    boards: [{
        type: Schema.Types.ObjectId,
        ref: 'board'
    }],
    pwd_hash: [{
        type: Schema.Types.ObjectId,
        ref: 'password'
    }],
    settings: {
        notifications: {
            frequency: Number
        },
        language: Number
    }
});

const User = mongoose.model('user', UserSchema);

module.exports = User;