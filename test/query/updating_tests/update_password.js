const assert = require('assert');

//Password
const Password = require('../../models/password');

//User
const User = require('../../models/user');
const UserValidator = require('../../mocks/user-mocks');

describe('Updating a password', () =>{
    let newpassword, newuser;

    beforeEach((done) => {
        newuser = new User(UserValidator.valid);
        newpassword = new Password({ user: newuser._id, hash: '3213232sadai2u31'});
        newpassword.save().then(() => {
            done();
        });
    });

    it('update a password hash', (done)=>{
        Password.findOneAndUpdate( newpassword._id, { hash: '2sa12ad121224dsa'}, { new: true })
            .then((createdpassword) => {
                assert(createdpassword.hash === '2sa12ad121224dsa');
                done();
        });
    });
});