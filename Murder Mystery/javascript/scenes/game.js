function gameActions(action, state) {
    var newState = state;
    switch (action) {
        case 'ignore':
            newState = Object.assign(state, {
                dialog: 'You decide to not take the case. On your way home from work, you suffer a fatal car crash. Game Over.',
                choices: ['New game'],
                actions: ['game.new'],
                background: [{ url: './img/Carcrash.png', width: '100%', height: '100%' }],
                foreground: []
            });
            break;
        case 'new':
            newState = Object.assign(state, {
                dialog: 'You see a case file on your desk. It is for a murder that happened in the Antrax Building. Accept the case?',
                choices: ['Yes', 'No'],
                actions: ['game.start', 'game.ignore'],
                background: [{ url: './img/folder.png', width: '100%', height: '100%' }],
                foreground: []
            });
            break;
        case 'start':
            newState = Object.assign(state, {
                dialog: 'You enter the building. Continue to the office or remain in the parking lot?',
                choices: ['Enter the Office', 'Remain in parking lot'],
                actions: ['officelot.ETO', 'parkingLot.RIL'],
            });

            newState.items.push('pencil');
            
            break;
    }
    return newState;
}