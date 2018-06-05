const assert = require('assert');

//Comment
const Comment = require('../../models/comment');

//User
const User = require('../../models/user');
const UserValidator = require('../../mocks/user-mocks');


describe('Deleting a checklist', () =>{
    let newcomment, newuser;

    beforeEach((done) => {
        newuser = new User(UserValidator.valid);
        newcomment = new Comment({
            author: newuser._id,
            content: '2 aprilie'
        });
        newcomment.save().then(() => {
            done();
        });
    });

    it('removes a comment', (done) =>{
        Comment.remove({ _id : newcomment._id })
            .then(() => {
                Comment.findOne({ _id: newcomment._id})
            })
            .then((item) => {
                assert(item === undefined);
                done();
        });
    });
});