const assert = require('assert');
const User = require('../../models/user');
const Card = require('../../models/card');
const List = require('../../models/list');
const Board = require('../../models/board');
const UserValidator = require('../../mocks/user-mocks.js');
const CardValidator = require('../../mocks/card-mocks.js');
const BoardValidator = require('../../mocks/board-mocks.js');

describe('Creating a card', () => {
    let newcard, newmember, newlist, newboard;

    beforeEach((done) =>{
        newboard = new Board(BoardValidator.valid);
        newmember = new User(UserValidator.valid);
        newlist = new List({
            title: 'Shopping List',
            board: newboard._id
        });
        CardValidator.valid.list = newlist;
        CardValidator.valid.author = newmember;
        newcard = new Card(CardValidator.valid);
    
        Promise.all([newcard.save()])
            .then(() => done());
    });

    it('saves a card', (done) => {
        Card.findOne({ _id: newcard._id })
            .then((cardSaved) => {
            
                assert(cardSaved.title === 'Card Cumatru');
                done();
        });
    });
});