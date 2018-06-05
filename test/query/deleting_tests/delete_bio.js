const assert = require('assert');

//Bio
const Bio = require('../../models/bio');

//User
const User = require('../../models/user');
const UserValidator = require('../../mocks/user-mocks');


describe('Deleting a bio', () =>{
    let newbio, newuser;

    beforeEach((done) => {
        newuser = new User(UserValidator.valid);
        newbio = new Bio({ user: newuser._id, content: 'content bio'});

        newbio.save()
            .then(() => done());
    });

    it('removes a bio', (done) =>{
        Bio.remove({ _id : newbio._id })
            .then(() => {
                Bio.findOne({ _id: newbio._id})
            })
            .then((item) => {
                assert(item === undefined);
                done();
        });
    });
});