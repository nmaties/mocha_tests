const assert = require('assert');

//List
const List = require('../../models/label');

//Board
const Board = require('../../models/board');
const BoardValidator = require('../../mocks/board-mocks');

describe('Deleting a list', () =>{
    let newlist, boardOne;

    beforeEach((done) => {
        boardOne = new Board(BoardValidator.valid);       
        newlist = new List({ title: 'Shopping List', board: boardOne._id });  
        newlist.save().then(() => {
            done();
        });
    });

    it('removes a list', (done) =>{
        List.remove({ _id : newlist._id })
            .then(() => {
                List.findOne({ _id: newlist._id})
            })
            .then((item) => {
                assert(item === undefined);
                done();
        });
    });
});