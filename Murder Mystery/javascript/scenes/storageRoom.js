function storageroomActions(action, state) {
    var newState = state;
    switch (action) {
        case 'ent':  
               newState = Object.assign(newState, {
                dialog: 'You enter the Storage Room. All you see is large boxes surrounding you. You cannot even move an inch.',
                choices: ['Exit into the Hallway', ''],
                actions: ['hallway.ent2', ''],
            });
            

            break;
    }
    return newState;
}