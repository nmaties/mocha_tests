const assert = require('assert');

//List
const List = require('../../models/list');

//Board
const Board = require('../../models/board');
const BoardValidator = require('../../mocks/board-mocks');

describe('Updating a list', () =>{
    let newlist, boardOne, boardTwo;

    beforeEach((done) => {
        boardOne = new Board(BoardValidator.valid);
        boardTwo = new Board(BoardValidator.valid);        
        newlist = new List({ title: 'Shopping List', board: boardOne._id });  
        newlist.save().then(() => {
            done();
        });
    });

    it('update a list title', (done)=>{
        List.findOneAndUpdate( newlist._id, { title: 'New List'}, { new: true })
            .then((createdlist) => {
                assert(createdlist.title === 'New List');
                done();
        });
    });

    it('update a list board', (done)=>{
        List.findOneAndUpdate( newlist._id, { board: boardTwo._id}, { new: true })
            .then((createdlist) => {
                assert(createdlist.board.toString() === boardTwo._id.toString());
                done();
        });
    });
});