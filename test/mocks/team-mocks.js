const TeamValidator = {};
TeamValidator['valid'] = { 
    name: 'Team Bobiteii',
    isActive: true,
    settings: {
        private: true
    }
};

TeamValidator['invalid'] = { 
    name: '',
    isActive: false,
    settings: {
        private: false
    }
};

module.exports = TeamValidator;