function hiddenroomActions(action, state) {
    var newState = state;
    switch (action) {
        case 'ent':  
               newState = Object.assign(newState, {
                dialog: 'You open up the big creaky door and find yourself in a dusty room. It is completely barren. What a lame excuse for a secret room.',
                choices: ['Exit back into the hallway', ''],
                actions: ['hallway.ent4', ''],
                background: [{ url: './img/secretRoom.png', width: '100%', height: '100%' }],
            });
            

            break;
    }
    return newState;
}