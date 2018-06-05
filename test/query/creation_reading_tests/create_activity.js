const assert = require('assert');
const User = require('../../models/user');
const Activity = require('../../models/activity');

const UserValidator = require('../../mocks/user-mocks');

describe('creating an activity', ()=> {
     let newuser, newactivity;

     beforeEach((done) =>{
        newuser = new User(UserValidator.valid);
        newactivity = new Activity({
            author: newuser._id,
            action: 'Removed a ticket'
        });

        Promise.all([newactivity.save()])
            .then(() => done());
     });

     it('save an activity', (done) =>{
        Activity.findOne({ _id: newactivity._id})
            .then((activity) =>{
                assert(activity.action === 'Removed a ticket');
                done();
        });
     });
});