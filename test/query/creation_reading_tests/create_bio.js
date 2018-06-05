const assert = require('assert');
const Bio = require('../../models/bio');
const User = require('../../models/user');
const UserValidator = require('../../mocks/user-mocks');


describe('creating a bio', () => {
    let newbio, newuser;

    beforeEach((done) => {
        newuser = new User(UserValidator.valid);
        newbio = new Bio({
            user: newuser._id,
            content: 'bio content'
        });

        Promise.all([newbio.save()])
            .then(() => done());
    });

    it('saves a bio', (done) => {
        Bio.findOne({ _id: newbio._id})
            .then((savedBio) =>{
                assert(savedBio.content === 'bio content');
                done();
            })
    });
});