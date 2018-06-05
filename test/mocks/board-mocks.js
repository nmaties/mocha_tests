const BoardValidator = {};
BoardValidator['valid'] = { 
    title: 'Board Zero',
    teams: undefined,
    lists: undefined,
    settings: {
        visibility: 1,
        bg_color: '#fff'
    }
};

BoardValidator['invalid'] = { 
    title: '',
    settings: {
        visibility: 1,
        bg_color: '#fff'
    }
};

module.exports = BoardValidator;