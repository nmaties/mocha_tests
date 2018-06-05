const assert = require('assert');
const User = require('../../models/user');
const Password = require('../../models/password');
const UserValidator = require('../../mocks/user-mocks.js');

describe('Creating a password', () => {
    let newuser, newpassword;
    beforeEach((done) =>{ 
        newuser = new User(UserValidator.valid);
        newpassword = new Password({ user: newuser._id, hash: '32131kshfsjdfs21'});
    
        Promise.all([newuser.save(), newpassword.save()])
            .then(() => {
                done();
        });
    });

    it('saves a password', (done) => {
        Password.findOne({ _id: newpassword._id })
            .then((password) => {
            assert(password.hash.toString() === '32131kshfsjdfs21');
            done();
        });
    });
});