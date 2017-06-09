function johnofficeActions(action, state) {
    var newState = state;
        switch (action) {
        case 'ent':  
               newState = Object.assign(newState, {
                dialog: 'You enter John\'s office. You can see a figure near his desk, sorting through things.',
                choices: ['Hey! Who is that?', 'Oh hi.'],
                actions: ['', ''],
            });
            break;
            case 'dia':  
               newState = Object.assign(newState, {
                dialog: '[Alexandria Epicron]-"Ahh! I didn\'t see you over there! I was just looking around the room to see if I could find something of mine. Nevermind."',
                choices: ['FInd anything interesting?', 'You seem far more than '],
                actions: ['', ''],
            });
            break;
    }
    return newState;
}