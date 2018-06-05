const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required.']
    },
    board: {
        type: Object,
        required: [true, 'Board is required']
    }
});

const List = mongoose.model('list', ListSchema);

module.exports = List;