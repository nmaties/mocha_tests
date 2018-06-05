const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required.']
    },
    list: {
        type: Object,
        required: [true, 'List is required.']
    },
    assigned_user: Object,
    author: {
        type: Object,
        required: [true, 'Author is required.']
    },
    description: {
        type: String,
        required: [true, 'Description is required.']
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'comment'
    }],
    activity_log: [{
        type: Schema.Types.ObjectId,
        ref: 'activityLog'
    }],
    members: [{
        type: Schema.Types.ObjectId,
        ref: 'member'
    }],
    labels: [{
        type: Schema.Types.ObjectId,
        ref: 'label'
    }],
    checklist: {
        title: String,
        items: [{
            type: Schema.Types.ObjectId,
            ref: 'item'
        }]
    },
    due_date: Date,
    attachments: [{
            type: Schema.Types.ObjectId,
            ref: 'attachment'
    }]
});

const Card = mongoose.model('card', CardSchema);

module.exports = Card;