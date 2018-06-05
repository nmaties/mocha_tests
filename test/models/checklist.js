const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChecklistSchema = new Schema({
    description: {
        type: String,
        required: [true, 'Description is required.']
    },
    completed: Boolean
});

const Checklist = mongoose.model('checklist', ChecklistSchema);

module.exports = Checklist;
