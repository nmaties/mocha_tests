const assert = require('assert');
const User = require('../../models/user');
const Attachment = require('../../models/attachment');
const UserValidator = require('../../mocks/user-mocks');

describe('creating an attachment', ()=>{
    let newattachment, newuser;
    beforeEach((done) => {
        newuser = new User(UserValidator.valid);
        newattachment = new Attachment({
            title: 'My file',
            author: newuser._id,
            content: 'fisier js'
        });

        Promise.all([newattachment.save()])
            .then(() => done());
    });

    it('saves an attachment', (done) => {
        Attachment.findOne({ _id: newattachment._id})
            .then((attachment)=> {
                assert(attachment.title === 'My file');
                done();
        });
    });
});