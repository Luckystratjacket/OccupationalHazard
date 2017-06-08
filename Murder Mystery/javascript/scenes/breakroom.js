function breakroomActions(action, state) {
    var newState = state;
        switch (action) {
        case 'ent':  
               newState = Object.assign(newState, {
                dialog: 'You enter the breakroom. You can see Benny, John\'s son, in the corner crying.',
                choices: ['Look around the break room for clues', 'Talk to Benny'],
                actions: ['breakroom.inv', 'breakroom.dia'],
            });
            break;
            case 'inv':  
               newState = Object.assign(newState, {
                dialog: 'You look around the breakroom. All you can find is an old yogurt that was suprisingly good. It had someone\'s name on it, but hey, Finders keepers.',
                choices: ['Talk to Benny', 'Exit into the hallway'],
                actions: ['breakroom.dia', 'hallway.ent3'],
            });
            break;
            case 'dia':  
               newState = Object.assign(newState, {
                dialog: '[Benny] -"You never resonded to me about my question in the conference room."',
                choices: ['Why are you crying?', 'What question?'],
                actions: ['breakroom.dia2', 'breakroom.dia3'],
            });
            break;
            case 'dia2':  
               newState = Object.assign(newState, {
                dialog: '[Benny] -"I dont know where my dad is and no one will tell me. Do you know where my dad is?"',
                choices: ['No', 'Yes'],
                actions: ['breakroom.dia4', 'breakroom.dia5'],
            });
            break;
            case 'dia3':  
               newState = Object.assign(newState, {
                dialog: '[Benny] -"Do you know where my dad is?"',
                choices: ['No', 'Yes'],
                actions: ['breakroom.dia4', 'breakroom.dia5'],
            });
            break;
            case 'dia4':  
               newState = Object.assign(newState, {
                dialog: '[Benny] -"That\'s what they all say. He has to be somewhere. Aww. Tell me if you find him!"',
                choices: ['Will do Benny!', ''],
                actions: ['breakroom.dia6', ''],
            });
            break;
            case 'dia5':  
               newState = Object.assign(newState, {
                dialog: '[Benny] -""',
                choices: ['', ''],
                actions: ['', ''],
            });
            break;
            case 'dia6':  
               newState = Object.assign(newState, {
                dialog: '[Benny] -"Thanks Mister! Good luck with whatever you\'re doing."',
                choices: ['Exit into the hallway', ''],
                actions: ['', ''],
            });
            break;
            case 'dia':  
               newState = Object.assign(newState, {
                dialog: '[Benny] -""',
                choices: ['', ''],
                actions: ['', ''],
            });
            break;
    }
    return newState;
}