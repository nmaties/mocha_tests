const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeamSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required.']
    },
    isActive: {
        type: Boolean,
        default: false
    },
    boards: [{
        type: Schema.Types.ObjectId,
        ref: 'board'
    }],
    members: [{
        type: Schema.Types.ObjectId,
        ref: 'member'
    }],
    authors: [{
        type: Schema.Types.ObjectId,
        ref: 'author',
        required: [true, 'Author is required.']
    }],
    settings: {
        private: Boolean,
        admins: [{
            type: Schema.Types.ObjectId,
            ref: 'admin'
        }],
    },
});

const Team = mongoose.model('team', TeamSchema);
module.exports = Team;