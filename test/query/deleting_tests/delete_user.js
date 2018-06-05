const assert = require('assert');

//User
const User = require('../../models/user');
const UserValidator = require('../../mocks/user-mocks');

describe('Deleting a user', () =>{
    let newuser;

    beforeEach((done) => {
        newuser = new User(UserValidator.valid);
        newuser.save().then(() => {
            done();
        });
    });

    it('removes a user', (done) =>{
        User.remove({ _id : newuser._id })
            .then(() => {
                User.findOne({ _id: newuser._id})
            })
            .then((item) => {
                assert(item === undefined);
                done();
        });
    });
});