function copierRoomActions(action, state) {
    var newState = state;
    switch (action) {
        case 'ent':
            newState = Object.assign(newState, {
                dialog: 'You enter the Copier room. All that is in here seems to be a bunch of papers and copier machines',
                choices: ['Investigate the piles of paper', 'Exit into the hallway'],
                actions: ['copierroom.inv', 'hallway.ent3'],
            });
            break;
        case 'inv':
            newState = Object.assign(newState, {
                dialog: 'You shuffle around the papers. All you seem to find is a slip of paper detailing the job tiers available at the company. You see that one of the employees would have to replace the manager for when Dave gets promoted.',
                choices: ['Investigate more', 'Exit into the hallway'],
                actions: ['copierroom.inv2', 'hallway.ent3'],
            });
            break;
        case 'inv2':
            newState = Object.assign(newState, {
                dialog: 'You find nothing besides some old lint pieces and a whole lot of random papers. You hear the copier whir to life and see a paper come silding out.',
                choices: ['Investigate the paper from the copier machine', 'Exit into the hallway.'],
                actions: ['copierroom.inv3', 'hallway.ent3'],
            });
            break;
        case 'inv3':
            newState = Object.assign(newState, {
                dialog: 'The paper seems to be some sort of checkiing account balance. Seems a check written by Dave never got cashed. And it looks like it was made out to someone with a first name starting with J...',
                choices: ['Investigate the Copier room more', 'Exit out into the hallway'],
                actions: ['copierroom.inv4', 'hallway.ent3'],
            });
            break;
        case 'inv4':
            newState = Object.assign(newState, {
                dialog: 'You look around a bit more but cannot find anything notable. You have a feeling that if you just search more you might find something obscenely important.',
                choices: ['Continue the investigation of the Copier Room.', 'Exit out into the hallway'],
                actions: ['copierroom.inv5', 'hallway.ent3'],
            });
            break;
        case 'inv5':
            newState = Object.assign(newState, {
                dialog: 'Sometimes people\'s intuition is not correct. You have found nothing of importance besides a mug. Exciting. You can feel something big on the horizon, however.',
                choices: ['Continue the investigation of the Copier room', ''],
                actions: ['copierroom.inv6', ''],
            });
            break;
        case 'inv6':
            if (newState.items.indexOf('key') == -1) {
                newState = Object.assign(newState, {
                    dialog: 'You see a key lying on the ground. ',
                    choices: [ 'Pick up the key and exit into the hallway'],
                    actions: ['hallway.ent3'],
                });
            } else {
                newState = Object.assign(newState, {
                    dialog: 'You find nothing of any importance. This is frustrating to you.',
                    choices: ['Exit into the hallway' ],
                    actions: ['hallway.ent3', 'copierroom.inv7'],
                });
            }
            break;
        case 'inv7':
            newState = Object.assign(newState, {
                dialog: '',
                choices: ['',''],
                actions: ['',''],
            });
            newState.items.push('key');
            break;
        
    }
    return newState;
}