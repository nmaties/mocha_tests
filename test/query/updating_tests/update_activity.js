const assert = require('assert');

//Activity
const Activity = require('../../models/activity');

//User
const User = require('../../models/user');
const UserValidator = require('../../mocks/user-mocks');

describe('Updating an activity', () =>{
    let newactivity, newuser, testuser;

    beforeEach((done) => {
        newuser = new User(UserValidator.valid);
        testuser = new User(UserValidator.valid);
        newactivity = new Activity({ author: newuser._id, action: 'Removed a ticket'});
        newactivity.save().then(() => {
            done();
        });
    });

    it('update an activity action', (done) => {
        Activity.findOneAndUpdate( newactivity._id, { action: 'New Activity'}, { new: true })
            .then((createdactivity) => {
                assert(createdactivity.action === 'New Activity');
                done();
        });
    });

    it('update an activity user', (done) => {
        Activity.findOneAndUpdate( newactivity._id, { author: testuser._id }, { new: true })
            .then((item) => {
                assert(item.author.toString() === testuser._id.toString());
                done();
        });
    });
});