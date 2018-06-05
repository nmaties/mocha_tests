const assert = require('assert');

//Team
const Team = require('../../models/team');
const TeamValidator = require('../../mocks/team-mocks');

describe('Deleting a team', () =>{
    let newteam, newteamsettings, newuser;

    beforeEach((done) => {
        newteam = new Team(TeamValidator.valid);
        newteam.save().then(() => {
            done();
        });
    });

    it('removes a team', (done) =>{
        Team.remove({ _id : newteam._id })
            .then(() => {
                Team.findOne({ _id: newteam._id})
            })
            .then((item) => {
                assert(item === undefined);
                done();
        });
    });
});