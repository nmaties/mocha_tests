const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AttachmentSchema = new Schema({
    title: String,
    author: {
        type: Object,
        required: [true, 'Author is required.']
    },
    content: String
});

const Attachment = mongoose.model('attachment', AttachmentSchema);

module.exports = Attachment;