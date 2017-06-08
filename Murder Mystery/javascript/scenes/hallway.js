function hallwayActions(action, state) {
    var newState = state;
        switch (action) {
        case 'confent':  
               newState = Object.assign(newState, {
                dialog: 'You can see 2 offices on either side of you. The hallway continues forward in front of you.',
                choices: ['John\'s office is on your left. It is empty.', 'Steve\'s office is to your left. You can hear a quiet sobbing from inside.', 'The hallway ahead of you leads to more rooms.'],
                actions: ['johnoffice.ent', 'steveoffice.ent', 'hallway.ent2'],
            });
            break;
            case 'ent2':  
               newState = Object.assign(newState, {
                dialog: 'You can see 2 rooms on either side of you. The hallway continues forward in front of you.',
                choices: ['A storage room can be seen to your left.', 'Meg\'s office can be seen to your right', 'The hallway makes a sharp turn ahead.'],
                actions: ['storageroom.ent', 'megoffice.ent', 'hallway.ent3'],
            });
            break;
            case 'ent3':  
               newState = Object.assign(newState, {
                dialog: 'You can see 2 rooms on either side of you. The hallway continues forward in front of you.',
                choices: ['What appears to be a breakroom can be seen to your left.', 'A copier room is stationed to your right.', 'The hallway continues onward ahead.'],
                actions: ['breakroom.ent', 'copierroom.ent', 'hallway.ent4'],
            });
            break;
            case 'ent4':  
               newState = Object.assign(newState, {
                dialog: 'You can see 2 offices on either side of you. The hallway continues forward in front of you.',
                choices: ['Dave\'s office seems to make up the only room in this corner of the office', 'The Hallway seems to loop around at this point', ''],
                actions: ['daveoffice.ent', '', 'hallway.confent'],
            });
            break;
            case 'ent5':  
               newState = Object.assign(newState, {
                dialog: 'You can see 2 offices on either side of you. The hallway continues forward in front of you.',
                choices: ['', '', ''],
                actions: ['', '', ''],
            });
            break;
    }
    return newState;
}