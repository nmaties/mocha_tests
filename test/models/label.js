const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LabelSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required.']
    },
    color: String
});

const Label = mongoose.model('label', LabelSchema);

module.exports = Label;