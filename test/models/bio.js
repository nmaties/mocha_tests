const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BioSchema = new Schema({
    user: Object,
    content: String
});

const Bio = mongoose.model('bio', BioSchema);

module.exports = Bio;