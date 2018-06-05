const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    author: {
        type: Object,
        required: [true, 'User is required.']
    },
    creation_date: {
        type: Date,
        default: Date.now()
    },
    content: {
        type: String,
        required: [true, 'Content is required.']
    },
});

const Comment = mongoose.model('comment', CommentSchema);

module.exports = Comment;