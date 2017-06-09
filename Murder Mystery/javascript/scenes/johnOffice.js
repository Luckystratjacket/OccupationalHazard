function johnofficeActions(action, state) {
    var newState = state;
    switch (action) {
        case 'ent':
            newState = Object.assign(newState, {
                dialog: 'You enter John\'s office. You can see a figure near his desk, sorting through things.',
                choices: ['Hey! Who is that?', 'Oh hi.'],
                actions: ['johnoffice.dia', 'johnoffice.dia'],
            });
            break;
        case 'dia':
            newState = Object.assign(newState, {
                dialog: '[Alexandria Epicron]-"Ahh! I didn\'t see you over there! I was just looking around the room to see if I could find something of mine. Nevermind."',
                choices: ['Find anything interesting?', 'You seem far more sane than when we last spoke.'],
                actions: ['johnoffice.dia2', ''],
            });
            break;
        case 'dia2':
            newState = Object.assign(newState, {
                dialog: '[Alexandria Epicron]-"Well, actually, I did. I found this check made out to John. It\'s from Dave. Labelled Shush Money. Dave\'s such a jokester. Probably just a bonus."',
                choices: ['Has it been cashed?', 'You don\'t seem that enthusiastic. What were you looking for here?'],
                actions: ['johnoffice.dia3', 'johnoffice.dia4'],
            });
            break;
        case 'dia3':
            newState = Object.assign(newState, {
                dialog: '[Alexandria Epicron]-"Doesn\'t look like it. Have you seen anything that looks suspicious around here? I know thats usually your job, but I just need to get some sort of idea on if I can get Benny. His grandparents are monsters and I don\'t want him entering the foster system either!"',
                choices: ['Nope', ''],
                actions: ['', ''],
            });
            break;
        case 'dia4':
            newState = Object.assign(newState, {
                dialog: '[Alexandria Epicron]-"Have you seen anything that looks suspicious around here? I know thats usually your job, but I just need to get some sort of idea on if I can get Benny. His grandparents are monsters and I don\'t want him entering the foster system either!"',
                choices: ['', ''],
                actions: ['', ''],
            });
            break;
        case 'dia5':
            newState = Object.assign(newState, {
                dialog: '[Alexandria Epicron]-""',
                choices: ['', ''],
                actions: ['', ''],
            });
            break;
        case 'dia6':
            newState = Object.assign(newState, {
                dialog: '[Alexandria Epicron]-""',
                choices: ['', ''],
                actions: ['', ''],
            });
            break;
    }
    return newState;
}