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
                dialog: '[Lloyd Newman] - "Miss McWaters',
                choices: ['', ''],
                actions: ['megoffice.dia2', 'megoffice.snop2'],
            });
            break;
    }
    return newState;
}