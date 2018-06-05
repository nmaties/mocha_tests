const assert = require('assert');

//Comment
const Comment = require('../../models/comment');

//User
const User = require('../../models/user');
const UserValidator = require('../../mocks/user-mocks');

describe('Updating a comment', () =>{
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

    it('update a comment content', (done) => {
        Comment.findOneAndUpdate( newcomment._id, { content: 'New comment'}, { new: true })
            .then((createdcomment) => {
                assert(createdcomment.content === 'New comment');
                done();
        });
    });

});