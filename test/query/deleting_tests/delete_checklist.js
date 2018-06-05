const assert = require('assert');

//Checklist
const Checklist = require('../../models/bio');


describe('Deleting a checklist', () =>{
    let newchecklist;

    beforeEach((done) => {
        newchecklist = new Checklist({ description: "New description", completed: false})
        newchecklist.save().then(() => {
            done();
        });
    });

    it('removes a checklist', (done) =>{
        Checklist.remove({ _id : newchecklist._id })
            .then(() => {
                Checklist.findOne({ _id: newchecklist._id})
            })
            .then((item) => {
                assert(item === undefined);
                done();
        });
    });
});