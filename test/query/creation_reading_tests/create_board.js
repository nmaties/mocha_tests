const assert = require('assert');
const User = require('../../models/user');
const Board = require('../../models/board');
const BoardValidator = require('../../mocks/board-mocks.js');
const UserValidator = require('../../mocks/user-mocks.js');

describe('Creating a board', () => {
    let newboard, newuser;
    beforeEach((done) => {
        newuser = new User(UserValidator.valid);
        BoardValidator.valid.author = newuser._id;
        newboard = new Board(BoardValidator.valid);

        Promise.all([ newboard.save()])
            .then(() => {
                done();
        });
    });

    it('reads a board', (done) => {
        Board.findOne( { _id: newboard._id })
            .then((board) => {
            assert(board.title === 'Board Zero');
            done();
        });
    });
});