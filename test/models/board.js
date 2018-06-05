const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BoardSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required.']
    },
    teams: [{
        type: Schema.Types.ObjectId,
        ref: 'team'
    }],
    author: {
        type: Object,
        required: [true, 'Author is required.']
    },
    members: [{
        type: Schema.Types.ObjectId,
        ref: 'member'
    }],
    lists: [{
        type: Schema.Types.ObjectId,
        ref: 'list'
    }],
    settings: {
        visibility: Number,
        bg_color: String
    }
});

const Board = mongoose.model('board', BoardSchema);
module.exports = Board;