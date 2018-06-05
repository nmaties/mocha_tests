const assert = require('assert');
const Team = require('../../models/team');
const User = require('../../models/user');
const TeamValidator = require('../../mocks/team-mocks.js');
const UserValidator = require('../../mocks/user-mocks.js');

describe('Creating a team', () => {
    let teamBiserica, user, teammembers = [];
    beforeEach((done) => {
        nicu = new User({ username: 'nicu', email: 'email@test.com', name: 'Nicu', avatar: 'base64', telephone: '0757779423'});
        mihai = new User({ username: 'mihai', email: 'email@test.com', name: 'Mihai', avatar: 'base64', telephone: '0757779423'});
        george = new User({ username: 'george', email: 'email@test.com', name: 'George', avatar: 'base64', telephone: '0757779423'});
        teamBiserica = new Team(TeamValidator.valid);
        user = new User(UserValidator.valid);
        teammembers.push(nicu, mihai, george);

        teamBiserica.authors = user._id;
        teamBiserica.members = teammembers;

        Promise.all([teamBiserica.save(), user.save()])
            .then(() => done());

    });

    it('saves a team', (done) => {
        Team.findOne({ _id: teamBiserica._id })
            .then((item) => {
            
            assert(item.name === 'Team Bobiteii');
            done();
        });
    });

    it('has an author id', (done) => {     
        Team.findOne({ _id: teamBiserica._id })
            .then((item) => {
                assert(item.authors[0]);
                done();
        })
    });
    
    it('has more than 1 member', (done) => {
        Team.findOne({ _id: teamBiserica._id })
            .then((item) => {
                assert(item.members.length > 1);
                done();
        });
    });
});

