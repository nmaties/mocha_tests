const assert = require('assert');

//Attachment
const Attachment = require('../../models/attachment');

//User
const User = require('../../models/user');
const UserValidator = require('../../mocks/user-mocks');

describe('Updating an attachment', () =>{
    let newattachment;

    beforeEach((done) => {
        newuser = new User(UserValidator.valid);
        newattachment = new Attachment({ title: 'New file', author: newuser._id, content: 'content attachment'});
        newattachment.save().then(() => {
            done();
        });
    });

    it('update an attachment title', (done)=>{
        Attachment.findOneAndUpdate( newattachment._id, { title: 'title updated'}, { new: true })
            .then((createdattachment) => {
                assert(createdattachment.title === 'title updated');
                done();
        });
    });

    it('update an attachment content', (done)=>{
        Attachment.findOneAndUpdate( newattachment._id, { content: 'content updated'}, { new: true })
            .then((createdattachment) => {
                assert(createdattachment.content === 'content updated');
                done();
        });
    });
});