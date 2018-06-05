const assert = require('assert');
const mongoose = require('mongoose');

//Board
const Board = require('../../models/board');
const BoardValidator = require('../../mocks/board-mocks');

//User
const User = require('../../models/user');
const UserValidator = require('../../mocks/user-mocks');

//Team
const Team = require('../../models/team');
const TeamValidator = require('../../mocks/team-mocks');

//List
const List = require('../../models/list');

describe('Updating a board', () =>{
    let newboard, newuser, teamOne, teamTwo, listOne, listTwo;

    beforeEach((done) => {
        teamOne = new Team(TeamValidator.valid);
        teamTwo = new Team(TeamValidator.valid);

        listOne = new List({ title: 'ListONE'});
        listTwo = new List({ title: 'ListTWO'});

        newuser = new User(UserValidator.valid);
        newboard = new Board(BoardValidator.valid);
        newboard.teams = [teamOne._id];
        newboard.lists = [listOne._id];
        
        newboard.save().then(() => { 
            done();
        });
    });

    it('update a board title', (done) => {
        Board.findOneAndUpdate( newboard._id, { title: 'Board Updated'}, { new: true})
            .then((createdboard) => {
                assert(createdboard.title === 'Board Updated');
                done();
        });
    });

    it('update a board team by adding one more team', (done) => {
        Board.findOneAndUpdate( newboard._id, { $push:{ teams : teamTwo}}, { new: true})
            .then((createdboard) => {
                assert(createdboard.teams.indexOf(teamTwo._id) > -1)
                done();
        });
    });

    it('update a board author', (done) => {
        Board.findOneAndUpdate( newboard._id, { author: newuser._id }, { new: true})
            .then((createdboard) => {
                assert(createdboard.author.toString() === newuser._id.toString());
                done();
        });
    });

    it('update a board list', (done) => {
        Board.findOneAndUpdate( newboard._id, { $push:{ lists : listTwo }}, { new: true})
            .then((createdboard) => {
                assert(createdboard.lists.indexOf(listTwo._id) > -1)
                done();
        });
    });

    it('update a board settings(bg_color and visibility)', (done) => {
        let newSettings = { visibility: 1, bg_color: 'red' }; 
        Board.findOneAndUpdate( newboard._id, { settings: newSettings }, { new: true})
            .then((createdboard) => {
                assert(createdboard.settings.visibility === 1 && createdboard.settings.bg_color === 'red');
                done();
        });
    });
});