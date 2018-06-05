const assert = require('assert');

//Bio
const Bio = require('../../models/bio');

//User
const User = require('../../models/user');
const UserValidator = require('../../mocks/user-mocks');

describe('Updating an activity', () =>{
    let newbio, newuser;

    beforeEach((done) => {
        newuser = new User(UserValidator.valid);
        newbio = new Bio({ user: newuser._id, content: 'content bio'});
        newbio.save().then(() => {
            done();
        });
    });

    it('update a bio content', (done)=>{
        Bio.findOneAndUpdate( newbio._id, { content: 'New Content'}, { new: true })
            .then((createdbio) => {
                assert(createdbio.content === 'New Content');
                done();
        });
    });
});