const assert = require('assert');
const List = require('../../models/list');
const Board = require('../../models/board');
const BoardValidator = require('../../mocks/board-mocks.js');

describe('Creating a list', () => {
    let newlist, newboard;

    beforeEach((done) =>{ 
        newboard = new Board(BoardValidator.valid);
        newlist = new List({
            title: 'Shopping List',
            board: newboard._id
        });
    
        Promise.all([newboard.save(), newlist.save()])
            .then(() => {
                done();
        });
    });

    it('saves a list', (done) => {
        List.findOne({ _id: newlist._id })
            .then((listCreated) => {
            assert(listCreated.title === 'Shopping List');
            done();
        });
    });
});