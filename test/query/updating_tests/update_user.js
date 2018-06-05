const assert = require('assert');

//Bio
const Bio = require('../../models/bio');

//Password
const Password = require('../../models/password');

//User
const User = require('../../models/user');
const UserValidator = require('../../mocks/user-mocks');

//Team
const Team = require('../../models/team');
const TeamValidator = require('../../mocks/team-mocks');

//Board
const Board = require('../../models/board');
const BoardValidator = require('../../mocks/board-mocks');

describe('Updating a user', () =>{
    let newuser, newbio, newteam, newboard, newsettings;

    beforeEach((done) => {
        newuser = new User(UserValidator.valid);
        newbio = new Bio({ user: newuser._id, content: 'content bio'});
        newteam = new Team(TeamValidator.valid);
        newboard = new Board(BoardValidator.valid);
        newpassword = new Password({ user: newuser._id, hash: '3213232sadai2u31'});
        newsettings = {
            notifications: {
                frequency: 3
            },
            language: 2
        };
        newuser.save().then(() => {
            done();
        });
    });

    it('update a users username', (done)=>{
        User.findOneAndUpdate( newuser._id, { username: 'Fanica Sculeru'}, { new: true })
            .then((createduser) => {
                assert(createduser.username === 'Fanica Sculeru');
                done();
        });
    });

    it('update a users email', (done)=>{
        User.findOneAndUpdate( newuser._id, { email: 'fanicasculeru@gmail.com'}, { new: true })
            .then((createduser) => {
                assert(createduser.email === 'fanicasculeru@gmail.com');
                done();
        });
    });

    it('update a users telephone', (done)=>{
        User.findOneAndUpdate( newuser._id, { telephone: '0757779321'}, { new: true })
            .then((createduser) => {
                assert(createduser.telephone === '0757779321');
                done();
        });
    });

    it('update a users name', (done)=>{
        User.findOneAndUpdate( newuser._id, { name: 'Oliver Frumosu'}, { new: true })
            .then((createduser) => {
                assert(createduser.name === 'Oliver Frumosu');
                done();
        });
    });

    it('update a users name', (done)=>{
        User.findOneAndUpdate( newuser._id, { avatar: 'base64/image.jpeg'}, { new: true })
            .then((createduser) => {
                assert(createduser.avatar === 'base64/image.jpeg');
                done();
        });
    });

    it('update a users bio', (done)=>{
        User.findOneAndUpdate( newuser._id, { bio: newbio }, { new: true })
            .then((createduser) => {
                assert(createduser.bio.toString() === newbio._id.toString());
                done();
        });
    });

    it('update a users status', (done)=>{
        User.findOneAndUpdate( newuser._id, { isActive: true }, { new: true })
            .then((createduser) => {
                assert(createduser.isActive === true);
                done();
        });
    });

    it('update a users team', (done)=>{
        User.findOneAndUpdate( newuser._id, { $push:{ teams: newteam }} , { new: true })
            .then((createduser) => {
                assert(createduser.teams[0].toString() === newteam._id.toString());
                done();
        });
    });

    it('update a users boards', (done)=>{
        User.findOneAndUpdate( newuser._id, { $push:{ boards: newboard }} , { new: true })
            .then((createduser) => {
                assert(createduser.boards[0].toString() === newboard._id.toString());
                done();
        });
    });

    it('update a users password hash', (done)=>{
        User.findOneAndUpdate( newuser._id, { pwd_hash: newpassword } , { new: true })
            .then((createduser) => {
                assert(createduser.pwd_hash.toString() === newpassword._id.toString());
                done();
        });
    });

    it('update a users settings', (done)=>{
        User.findOneAndUpdate( newuser._id, { settings: newsettings } , { new: true })
            .then((createduser) => {
                assert(createduser.settings.notifications.frequency === 3 &&
                    createduser.settings.language === 2
                );
                done();
        });
    });
});