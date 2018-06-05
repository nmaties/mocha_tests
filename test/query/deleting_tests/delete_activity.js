const assert = require('assert');

//Activity
const Activity = require('../../models/activity');

//User
const User = require('../../models/user');
const UserValidator = require('../../mocks/user-mocks');


describe('Deleting an activity', () =>{
    let newactivity, newuser;

    beforeEach((done) => {
        newuser = new User(UserValidator.valid);
        newactivity = new Activity({ author: newuser._id, action: 'Removed a ticket'});

        newactivity.save()
            .then(() => done());
    });

    it('removes an activity', (done) =>{
        Activity.remove({ _id : newactivity._id })
            .then(() => {
                Activity.findOne({ _id: newactivity._id})
            })
            .then((item) => {
                assert(item === undefined);
                done();
        });
    });
});