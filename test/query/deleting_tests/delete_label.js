const assert = require('assert');

//Label
const Label = require('../../models/label');

describe('Deleting a label', () =>{
    let newlabel;

    beforeEach((done) => {
        newlabel = new Label({ title: 'My latest label', color: '#fff'});
        newlabel.save().then(() => {
            done();
        });
    });

    it('removes a label', (done) =>{
        Label.remove({ _id : newlabel._id })
            .then(() => {
                Label.findOne({ _id: newlabel._id})
            })
            .then((item) => {
                assert(item === undefined);
                done();
        });
    });
});