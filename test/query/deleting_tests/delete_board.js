const assert = require('assert');

//Board
const Board = require('../../models/board');
const BoardValidator = require('../../mocks/board-mocks');

describe('Deleting a board', () =>{
    let newboard;

    beforeEach((done) => {
        newboard = new Board(BoardValidator.valid);

        newboard.save()
            .then(() => done());
    });

    it('removes a board', (done) =>{
        Board.remove({ _id : newboard._id })
            .then(() => {
                Board.findOne({ _id: newboard._id})
            })
            .then((item) => {
                assert(item === undefined);
                done();
        });
    });
});