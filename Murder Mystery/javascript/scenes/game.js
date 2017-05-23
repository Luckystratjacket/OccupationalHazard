function gameActions(action, state) {
    var newState = state;
    switch (action) {
        case 'ignore':
            newState = Object.assign(state, {
                dialog: 'You decide to not take the case. On your way home from work, you suffer a fatal car crash. Game Over.',
                choices: ['New game', ''],
                actions: ['startGame', ''],
                background: [{ url: './img/Jo.png', width: '100%', height: '100%' }],
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