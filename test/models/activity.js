const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
    author: {
        type: Object,
        required: [true, 'Author is required']
    },
    action: {
        type: String,
        required: [true, 'Action is required.']
    }
});

const Activity = mongoose.model('activity', ActivitySchema);

module.exports = Activity;