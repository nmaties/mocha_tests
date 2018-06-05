const assert = require('assert');
const User = require('../../models/user');
const Comment = require('../../models/comment');
const UserValidator = require('../../mocks/user-mocks');

describe('creating a comment', ()=> {
     let newuser, newcomment;

     beforeEach((done) =>{
        newuser = new User(UserValidator.valid);
        newcomment = new Comment({
            author: newuser._id,
            content: '1 aprilie'
        });

        Promise.all([newcomment.save()])
            .then(() => done());
     });

     it('reads a comment', (done) =>{
        Comment.findOne({ _id: newcomment._id})
            .then((comment) =>{
                assert(comment.content === '1 aprilie');
                done();
        });
     });
});