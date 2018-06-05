const express = require('express');
const mongoose = require('moongoose');
const app = express();


mongoose.Promise = global.Promise;
const uri = 'mongodb://localhost/gladiatorii';

if(process.env.NODE_ENV !== 'test') {
    mongoose.connect(uri);
}

module.exports = app;