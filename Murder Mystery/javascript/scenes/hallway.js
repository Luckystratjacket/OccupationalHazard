function hallwayActions(action, state) {
    var newState = state;
        switch (action) {
        case 'confent':  
               newState = Object.assign(newState, {
                dialog: '',
                choices: ['', ''],
                actions: ['', ''],
            });
            break;
    }
    return newState;
}