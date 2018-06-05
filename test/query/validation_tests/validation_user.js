const assert = require('assert');

//User
const User = require('../../models/user');

describe('Validating records', ()=> {
    it('user requires a name', () => {
        const user = new User({
            name : undefined 
        });
        const validationResult = user.validateSync();
        const { message } = validationResult.errors.name;

        assert(message === 'Name is required.');
    });

    it('user requires a username', () => {
        const user = new User({
            username : undefined 
        });
        const validationResult = user.validateSync();
        const { message } = validationResult.errors.username;

        assert(message === 'Username is required.');
    });

    it('user requires a telephone', () => {
        const user = new User({
            telephone : undefined 
        });
        const validationResult = user.validateSync();
        const { message } = validationResult.errors.telephone;

        assert(message === 'Telephone is required.');
    });

    it('user requires a email', () => {
        const user = new User({
            email : undefined 
        });
        const validationResult = user.validateSync();
        const { message } = validationResult.errors.email;

        assert(message === 'Email is required.');
    });

    it('user requires a avatar', () => {
        const user = new User({
            avatar : undefined 
        });
        const validationResult = user.validateSync();
        const { message } = validationResult.errors.avatar;

        assert(message === 'Avatar is required.');
    });

});