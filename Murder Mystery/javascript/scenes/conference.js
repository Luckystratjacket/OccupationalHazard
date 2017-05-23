function conferenceActions(action, state) {
    switch (action) {
        case 'ignoreGame':
            newState = Object.assign(newState, {
                dialog: 'You decide to not take the case. On your way home from work, you suffer a fatal car crash. Game Over.',
                choices: ['New game', ''],
                actions: ['startGame', ''],
            });


            break;
        case 'startGame':
            newState = Object.assign(newState, {
                dialog: 'You enter the building. Contimue to the office or remain in the parking lot?',
                choices: ['Enter the Office', 'Remain in parking lot'],
                actions: ['ETO', 'RIL'],
            });
        default:
            return false;
    }
}