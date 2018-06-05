const assert = require('assert');

//Label
const Label = require('../../models/label');

describe('Updating a label', () =>{
    let newlabel;

    beforeEach((done) => {
        newlabel = new Label({ title: 'My latest label', color: '#fff'});
        newlabel.save().then(() => {
            done();
        });
    });

    it('update a label', (done)=>{
        Label.findOneAndUpdate( newlabel._id, { title: 'New Label'}, { new: true })
            .then((createdlabel) => {
                assert(createdlabel.title === 'New Label');
                done();
        });
    });

    it('update a label', (done)=>{
        Label.findOneAndUpdate( newlabel._id, { color: 'yellow'}, { new: true })
            .then((createdlabel) => {
                assert(createdlabel.color === 'yellow');
                done();
        });
    });
});