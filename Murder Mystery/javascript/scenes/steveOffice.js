function steveofficeActions(action, state) {
    var newState = state;
    switch (action) {
        case 'ent':  
               newState = Object.assign(newState, {
                dialog: 'You walk into Steve\'s office. He is not in the room.',
                choices: ['Look around the office', 'Exit back into the hallway'],
                actions: ['steveoffice.inv', 'hallway.confent'],
            });
            break;
            case 'inv':  
               newState = Object.assign(newState, {
                dialog: 'You look around Steve\'s office. Aafter looking around, you discover a large blackboard covered with pictures and arrows. From what you can tell from the crude diagrams, it seems to suggest that Dave was bribing John. What it was about, he seems to have no clue.',
                choices: ['Continue looking around the office', 'Exit back into the hallway'],
                actions: ['steveoffice.inv2', 'hallway.confent'],
            });
            break;
            case 'inv2':  
               newState = Object.assign(newState, {
                dialog: 'You look around Steve\'s office a bit more. Inside one of his desk drawers is a car catalogue. The new model is circled, and it seems Steve has written If Only I Could below the car.',
                choices: ['Continue looking around', 'Exit back into the hallway'],
                actions: ['steveoffice.inv3', 'hallway.confent'],
            });
            break;
            case 'inv3':  
               newState = Object.assign(newState, {
                dialog: 'You look around the office a bit more. You find nothing of importance.',
                choices: ['Exit back into the hallway', ''],
                actions: ['hallway.confent', ''],
            });
            break;
    }
    return newState;
}