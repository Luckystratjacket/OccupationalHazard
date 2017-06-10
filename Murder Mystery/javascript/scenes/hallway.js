function hallwayActions(action, state) {
    var newState = state;
        switch (action) {
        case 'confent':  
               newState = Object.assign(newState, {
                dialog: 'You can see 2 offices on either side of you. The hallway continues forward in front of you.',
                choices: ['John\'s office is on your right. It is empty.', 'Steve\'s office is to your left. You can hear a quiet sobbing from inside.', 'The hallway ahead of you leads to more rooms.'],
                actions: ['johnoffice.ent', 'steveoffice.ent', 'hallway.ent2'],
                background: [{ url: './img/hallway_1.png', width: '100%', height: '100%' }],
            });
            break;
            case 'ent2':  
               newState = Object.assign(newState, {
                dialog: 'You can see 2 rooms on either side of you. The hallway continues forward in front of you.',
                choices: ['A storage room can be seen to your left.', 'Meg\'s office can be seen to your right', 'The hallway makes a sharp turn ahead.'],
                actions: ['storageroom.ent', 'megoffice.ent', 'hallway.ent3'],
                background: [{ url: './img/hallway_2.png', width: '100%', height: '100%' }],
            });
            break;
            case 'ent3':  
               newState = Object.assign(newState, {
                dialog: 'You can see 2 rooms on either side of you. The hallway continues forward in front of you.',
                choices: ['What appears to be a breakroom can be seen to your left.', 'A copier room is stationed to your right.', 'The hallway continues onward ahead.'],
                actions: ['breakroom.ent', 'copierroom.ent', 'hallway.ent4'],
                background: [{ url: './img/hallway_1.png', width: '100%', height: '100%' }],
            });
            break;
            case 'ent4':  
               newState = Object.assign(newState, {
                dialog: 'You can see 2 offices on either side of you. The hallway continues forward in front of you.',
                choices: ['Daves Office is visible on the left', 'The Hallway continues around here', 'A large oak door secured with a hefty lock is visible to the right.'],
                actions: ['daveoffice.ent', 'hallway.ent5', 'hallway.ent6'],
                background: [{ url: './img/doorWLock.png', width: '100%', height: '100%' }],
            });
            break;
            case 'ent5':  
               newState = Object.assign(newState, {
                dialog: 'It appears to be an exit door. Only go through this door when you are done with all your reasearch in the office. The Hallway continues in front of you',
                choices: ['The big oak doors appear to lead to the outside.', 'The hallway makes a sharp turn ahead.', ''],
                actions: ['finale.door', 'hallway.confent', ''],
                background: [{ url: './img/door_no_key.png', width: '100%', height: '100%' }],
            });
            break;
            case 'ent6':
            if (newState.items.indexOf('key') == -1) {
                newState = Object.assign(newState, {
                    dialog: 'The door is locked',
                    choices: ['Move back into the main hallway',''],
                    actions: ['hallway.ent4',''],
                    background: [{ url: './img/door_no_key.png', width: '100%', height: '100%' }],
                });

            } else {
                newState = Object.assign(newState, {
                    dialog: 'The Door is locked. Do you want to try the key that you found?',
                    choices: ['Try the key','Exit back into the hallway'],
                    actions: ['hiddenroom.ent','hallway.ent4'],
                    background: [{ url: './img/door_yes_key.png', width: '100%', height: '100%' }],
                });
            }
            break;
    }
    return newState;
}