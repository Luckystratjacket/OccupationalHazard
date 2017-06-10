function finaleActions(action, state) {
    var newState = state;
    switch (action) {
        case 'Door':
            newState = Object.assign(state, {
                dialog: 'As you push open the large doors, you look back into the office. You think about the stories that have happened here, and how the world revolves infinitly. You also think how much your choices from this point onward cannot be reversed. If you continue past this point you cannot re-enter the office.',
                choices: ['Return into the office.','Continue into the parking lot.'],
                actions: ['hallway.ent5','finale.office'],
            });
            break;
        case 'office':
            newState = Object.assign(state, {
                dialog: 'You drive back to your office. It Is finally time to close the case once and for all. Who do you believe did it?',
                choices: ['Steve', 'Dave','Meg','Alexandria','Benny','This case needs more research',],
                actions: ['finale.done', 'finale.done','finale.done','finale.done','finale.done','finale.done'],
            });
            break;
        case 'done':
            newState = Object.assign(state, {
                dialog: 'You close the case file. You have chosen based off of the best of your knowledge, and no one can fault you for that.',
                choices: ['End the case', ''],
                actions: ['finale.end', ''],
            });
            break;
            case 'end':  
               newState = Object.assign(newState, {
                dialog: 'You hand in the case to your employer. You get the nagging suspicion that you may have chosen the wrong option. Perhaps you will revisit the case later. You head out of the building with a heavy heart. Game Over.',
                choices: ['Game Over', ''],
                actions: ['finale.credits', ''],
            });
            break;
            case 'credits':  
               newState = Object.assign(newState, {
                dialog: 'This game was made by Caleb Maggio, Ian Atkins, and Zeel Patel in Mr. Ray\'s computer class. We hope you enjoyed it! Thanks for playing!',
                choices: ['New Game'],
                actions: ['game.new'],
            });
            break;
                }
    return newState;
}