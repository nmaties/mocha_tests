const UserValidator = {};
UserValidator['valid'] = { 
    username: 'bja', 
    email: 'email@test.com', 
    name: 'Nicu', 
    avatar: 'base64', 
    telephone: '0757779423' 
};

UserValidator['invalid'] = { 
    username: '', 
    email: '', 
    name: '', 
    avatar: '', 
    telephone: '' 
};

module.exports = UserValidator;