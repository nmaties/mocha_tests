const CardValidator = {};
CardValidator['valid'] = { 
    title: 'Card Cumatru',
    description : 'cumatru sef',
    due_date : '10/10/2010'
    // member default author
    //list required
    //author required
};

CardValidator['invalid'] = { 
    title: '',
    description : '',
    due_date : ''
    // member default author
    //list required
    //author required
};

module.exports = CardValidator;