const assert = require('assert');

//Team
const Team = require('../../models/team');

describe('Validating records', ()=> {
    it('team requires a name', () => {
        const team = new Team({
            name : undefined 
        });
        const validationResult = team.validateSync();
        const { message } = validationResult.errors.name;

        assert(message === 'Name is required.');
    });

    xit('team requires an author', () => {
        const team = new Team({
            name: 'new team',
            authors : [] 
        });
        const validationResult = team.validateSync();
        console.log(validationResult);
        const { message } = validationResult.errors.authors[0];

        assert(message === 'Author is required.');
    });

});