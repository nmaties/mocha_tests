const assert = require('assert');
const Label = require('../../models/label');

describe('Creating a label', () =>{
    let newlabel;
    beforeEach((done) => {
        newlabel = new Label({
            title: 'My latest label',
            color: '#fff'
        });

        Promise.all([newlabel.save()])
            .then(() => done());
    });

    it('saves a label', (done) =>{
        Label.findOne({ _id : newlabel._id})
            .then((savedLabel) => {
                assert(savedLabel.color === '#fff');
                done();
        });
    });
});