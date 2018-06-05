const assert = require('assert');

//Team
const Team = require('../../models/team');
const TeamValidator = require('../../mocks/team-mocks');

//User
const User = require('../../models/user');
const UserValidator = require('../../mocks/user-mocks');

//Board
const Board = require('../../models/board');
const BoardValidator = require('../../mocks/board-mocks');

describe('Updating a team', () =>{
    let newteam, newteamsettings, newuser;

    beforeEach((done) => {
        newuser = new User(UserValidator.valid);
        newteam = new Team(TeamValidator.valid);
        newboard = new Board(BoardValidator.valid);
        newteamsettings = {
            private: true,
            admins: newuser._id
        }
        newteam.save().then(() => {
            done();
        });
    });

    it('update a team name', (done)=>{
        Team.findOneAndUpdate( newteam._id, { name: 'New Team'}, { new: true })
            .then((createdteam) => {
                assert(createdteam.name === 'New Team');
                done();
        });
    });

    it('update a team status', (done)=>{
        Team.findOneAndUpdate( newteam._id, { isActive: true }, { new: true })
            .then((createdteam) => {
                assert(createdteam.isActive === true);
                done();
        });
    });

    it('update a team settings', (done)=>{
        Team.findOneAndUpdate( newteam._id, { settings: newteamsettings }, { new: true })
            .then((createdteam) => {
                assert(createdteam.settings.private === true 
                    && createdteam.settings.admins.toString() === newteamsettings.admins.toString()
                );
                done();
        });
    });

    it('update a team author', (done)=>{
        Team.findOneAndUpdate( newteam._id, { authors: newuser._id }, { new: true })
            .then((createdteam) => {
                assert(createdteam.authors.toString() === newuser._id.toString());
                done();
        });
    });

    it('update a team boards', (done)=>{
        Team.findOneAndUpdate( newteam._id, { $push: { boards: newboard }}, { new: true })
            .then((createdteam) => {
                assert(createdteam.boards.indexOf(newuser._id));
                done();
        });
    });

    it('update a team member', (done)=>{
        Team.findOneAndUpdate( newteam._id, { $push: { members: newuser._id }}, { new: true })
            .then((createdteam) => {
                assert(createdteam.members.toString() === newuser._id.toString());
                done();
        });
    });
});