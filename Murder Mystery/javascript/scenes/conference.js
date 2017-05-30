function conferenceActions(action, state) {
    switch (action) {
        case '':
            newState = Object.assign(newState, {
                dialog: '',
                choices: ['', ''],
                actions: ['', ''],
            });


            break;
        case '':
            newState = Object.assign(newState, {
                dialog: '',
                choices: ['', ''],
                actions: ['', ''],
            });
        default:
            return false;
    }
}