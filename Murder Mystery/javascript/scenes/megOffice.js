function megofficeActions(action, state) {
    var newState = state;
    switch (action) {
        case 'ent':  
               newState = Object.assign(newState, {
                dialog: '[Meghan McWaters] - "You can look around my room and ask me if you have any questions"',
                choices: ['ask her what kind of pills she has on the the table and why', 'ask her why she has a same coffee cup as John Stalwart'],
                actions: ['megoffice.dia', 'megoffice.snop'],
            });
            

            break;
    }
    switch (action) {
        case 'ent2':  
               newState = Object.assign(newState, {
                dialog: '[Lloyd Newman] - "Miss McWaters i saw you bringing coffee over to Mr.Stalwart',
                choices: ['ask her if she does brings him coffee everyday or she did it today', 'ask her if she knew how did john puts in his coffee'],
                actions: ['megoffice.dia2', 'megoffice.snop2'],
            });
            break;
    }
    return newState;
}
    switch (action) {
        case '':  
               newState = Object.assign(newState, {
                dialog: '',
                choices: ['', ''],
                actions: ['', ''],
            });
            break;
    }