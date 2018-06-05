const assert = require('assert');

//Card
const Card = require('../../models/card');
const CardValidator = require('../../mocks/card-mocks');

//User
const User = require('../../models/user');
const UserValidator = require('../../mocks/user-mocks');

//List
const List = require('../../models/list');

//Comment
const Comment = require('../../models/comment');

//Activity
const Activity = require('../../models/activity');

//Label
const Label = require('../../models/label');

//Attachment
const Attachment = require('../../models/attachment');

describe('Updating a card', () =>{
    let newcard, newuser, newlist, newcomment, newactivity;

    beforeEach((done) => {
        newlist = new List({ title: 'done tickets'});
        newuser = new User(UserValidator.valid);
        newcard = new Card(CardValidator.valid);
        newcomment = new Comment({ author: newuser._id, content: '1 aprilie' });
        newactivity = new Activity({ author: newuser._id, action: 'Removed a ticket' });
        newlabel = new Label({ title: 'My latest label', color: '#fff'});
        newattachment = new Attachment({
            title: 'My file',
            author: newuser._id,
            content: 'fisier js'
        });
        newcard.save().then(() => {
            done();
        });
    });

    it('update a card title', (done)=>{
        Card.findOneAndUpdate( newcard._id, { title: 'New Card'}, { new: true })
            .then((createdcard) => {
                assert(createdcard.title === 'New Card');
                done();
        });
    });

    it('update a card assigned user', (done)=>{
        Card.findOneAndUpdate( newcard._id, { assigned_user: newuser._id }, { new: true })
            .then((createdcard) => {
                assert(createdcard.assigned_user.toString() === newuser._id.toString());
                done();
        });
    });

    it('update a card description', (done)=>{
        Card.findOneAndUpdate( newcard._id, { description: 'voila' }, { new: true })
            .then((createdcard) => {
                assert(createdcard.description === 'voila');
                done();
        });
    });

    it('update a card due_date', (done)=>{
        Card.findOneAndUpdate( newcard._id, { due_date: '11/11/2011' }, { new: true })
            .then((createdcard) => {
                assert(createdcard.due_date.toISOString() === new Date('11/11/2011').toISOString());
                done();
        });
    });


    it('update a card list', (done)=>{
        Card.findOneAndUpdate( newcard._id, { list: newlist._id }, { new: true })
            .then((createdcard) => {
                assert(createdcard.list.toString() === newlist._id.toString());
                done();
        });
    });

    it('update a card comments', (done)=>{
        Card.findOneAndUpdate( newcard._id, { $push : { comments: newcomment } }, { new: true })
            .then((createdcard) => {
                assert(createdcard.comments[0].toString() === newcomment._id.toString());
                done();
        });
    });

    it('update a card activity', (done)=>{
        Card.findOneAndUpdate( newcard._id, { $push : { activity_log: newactivity } }, { new: true })
            .then((createdcard) => {
                assert(createdcard.activity_log[0].toString() === newactivity._id.toString());
                done();
        });
    });

    it('update a card members', (done)=>{
        Card.findOneAndUpdate( newcard._id, { $push : { members: newuser } }, { new: true })
            .then((createdcard) => {
                assert(createdcard.members[0].toString() === newuser._id.toString());
                done();
        });
    });

    it('update a card labels', (done)=>{
        Card.findOneAndUpdate( newcard._id, { $push : { labels: newlabel } }, { new: true })
            .then((createdcard) => {
                assert(createdcard.labels[0].toString() === newlabel._id.toString());
                done();
        });
    });

    it('update a card attachemnt', (done)=>{
        Card.findOneAndUpdate( newcard._id, { $push : { attachments: newattachment } }, { new: true })
            .then((createdcard) => {
                assert(createdcard.attachments[0].toString() === newattachment._id.toString());
                done();
        });
    });
});