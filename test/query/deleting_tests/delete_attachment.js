const assert = require('assert');

//Attachment
const Attachment = require('../../models/attachment');

//User
const User = require('../../models/user');
const UserValidator = require('../../mocks/user-mocks');


describe('Deleting an attachment', () =>{
    let newattachment, newuser;

    beforeEach((done) => {
        newuser = new User(UserValidator.valid);
        newattachment = new Attachment({ title: 'New file', author: newuser._id, content: 'content attachment'});

        newattachment.save()
            .then(() => done());
    });

    it('removes an attachment', (done) =>{
        Attachment.remove({ _id : newattachment._id })
            .then(() => {
                Attachment.findOne({ _id: newattachment._id})
            })
            .then((item) => {
                assert(item === undefined);
                done();
        });
    });
});