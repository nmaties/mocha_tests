const mongoose = require('mongoose');

before(done => {
    mongoose.connect('mongodb://localhost/mocha_test');
    mongoose.connection
        .once('open', () => done())
        .on('error', err => {
            console.warn('Warning', err);
        });
});

beforeEach((done) =>{
    const {
        users,
        teams,
        boards,
        passwords,
        cards,
        lists,
        bios,
        labels,
        activities,
        attachments,
        checklists,
        comments
    } = mongoose.connection.collections;

    users.drop(() => {
        teams.drop(() => {
            boards.drop(() => {
                passwords.drop(() => { 
                    cards.drop(() =>  {
                        lists.drop(() => {
                            bios.drop(() =>{
                                labels.drop(() =>{
                                    activities.drop(() =>{
                                        attachments.drop(() =>{                                   
                                            checklists.drop(() =>{                                   
                                                comments.drop(() =>{                                   
                                                    done();
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});