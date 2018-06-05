const assert = require('assert');
const Checklist = require('../../models/checklist');

describe('creating a checklist', ()=> {
    let newchecklist;

    beforeEach((done) => {
        newchecklist = new Checklist({
            description : 'Checklist added',
            completed: false
        });

        newchecklist.save()
            .then(() => {
                done();
            });
    });

    it('saves a checklist', (done) => {
        Checklist.findOne({ _id: newchecklist._id })
            .then((checklistSaved) =>{
                assert(checklistSaved.description === 'Checklist added');
                done();
            });
    });

});