const assert = require('assert');
const User = require('../../models/user');
const UserValidator = require('../../mocks/user-mocks.js');

describe('Creating a user', () => {
    it('saves a user', (done) => {
        const nicu = new User(UserValidator.valid);

        nicu.save()
            .then((usersaved) => {
            assert(usersaved.username === 'bja');
            done();
        });
    });
});
