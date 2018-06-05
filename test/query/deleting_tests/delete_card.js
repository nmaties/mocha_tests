const assert = require('assert');

//Card
const Card = require('../../models/card');
const CardValidator = require('../../mocks/card-mocks');

describe('Deleting a card', () =>{
    let newcard;

    beforeEach((done) => {
        newcard = new Card(CardValidator.valid);

        newcard.save()
            .then(() => done());
    });

    it('removes a card', (done) =>{
        Card.remove({ _id : newcard._id })
            .then(() => {
                Card.findOne({ _id: newcard._id})
            })
            .then((item) => {
                assert(item === undefined);
                done();
        });
    });
});