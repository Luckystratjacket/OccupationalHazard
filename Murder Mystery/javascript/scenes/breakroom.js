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
                dialog: '[Benny] -"You know! Where is he?"',
                choices: ['I dont know how to tell you this, and it\'s never good to hear, but your dad is dead Benny.', 'I Don\'t actually know where he is.'],
                actions: ['breakroom.dia7', 'breakroom.dia4'],
            });
            break;
            case 'dia6':  
               newState = Object.assign(newState, {
                dialog: '[Benny] -"Thanks Mister! Good luck with whatever you\'re doing."',
                choices: ['Exit into the hallway', ],
                actions: ['hallway.ent3'],
            });
            break;
            case 'dia7':  
               newState = Object.assign(newState, {
                dialog: '[Benny] -"I know you\'re joking. Let me know when you know where he is, OK?" *Benny looks back into the corner, looking sad.*',
                choices: ['Exit into the hallway'],
                actions: ['hallway.ent3'],
            });
            break;
    }
    return newState;
}