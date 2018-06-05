const assert = require('assert');

//Password
const Password = require('../../models/password');

//User
const User = require('../../models/user');
const UserValidator = require('../../mocks/user-mocks');

describe('Deleting a password', () =>{
    let newpassword, newuser;

    beforeEach((done) => {
        newuser = new User(UserValidator.valid);
        newpassword = new Password({ user: newuser._id, hash: '3213232sadai2u31'});
        newpassword.save().then(() => {
            done();
        });
    });

    it('removes a password', (done) =>{
        Password.remove({ _id : newpassword._id })
            .then(() => {
                Password.findOne({ _id: newpassword._id})
            })
            .then((item) => {
                assert(item === undefined);
                done();
        });
    });
});