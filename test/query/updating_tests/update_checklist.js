const assert = require('assert');

//Checklist
const Checklist = require('../../models/checklist');

describe('Updating a checklist', () =>{
    let newchecklist;

    beforeEach((done) => {
        newchecklist = new Checklist({ description: "New description", completed: false})
        newchecklist.save().then(() => {
            done();
        });
    });

    it('update a checklist', (done)=>{
        Checklist.findOneAndUpdate( newchecklist._id, { description: 'updated description' }, { new: true })
            .then((createdchecklist) => {
                assert(createdchecklist.description === 'updated description');
                done();
        });
    });

    it('update a checklist', (done)=>{
        Checklist.findOneAndUpdate( newchecklist._id, { completed: true }, { new: true })
            .then((createdchecklist) => {
                assert(createdchecklist.completed === true );
                done();
        });
    });
});