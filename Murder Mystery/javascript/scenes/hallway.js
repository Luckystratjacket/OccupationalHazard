function hallwayActions(action, state) {
    var newState = state;
        switch (action) {
        case 'confent':  
               newState = Object.assign(newState, {
                dialog: '[Filler Text]',
                choices: ['opt a', 'opt b'],
                actions: ['', ''],
            });
            break;
    }
    return newState;
}