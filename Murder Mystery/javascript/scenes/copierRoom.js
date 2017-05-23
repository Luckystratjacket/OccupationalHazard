function copierRoomActions(action, state) {
    var newState = state;
    switch (action) {
        case '':  
               newState = Object.assign(newState, {
                dialog: '',
                choices: ['', ''],
                actions: ['', ''],
            });
            

            break;
    }
    var newState = state;
    return newState;
}