function officelotActions(action, state) {
    var newState = state;
    switch (action) {
        case 'ETO':  
               newState = Object.assign(newState, {
                dialog: '[Dave Watson] - "Hi, I\'m Dave! Glad you could come on such short notice! What was your name, again?" ',
                choices: ['[Enter Name Here]', 'Steve'],
                actions: ['officelot.ETO1', 'officelot.ETO11'],
            });
            

            break;
                case 'ETO1':  
               newState = Object.assign(newState, {
                dialog: '[Dave Watson] - "Nice to meet you, Enter Name Here! Wow, that\'s an interesting name. Can\'t say I\'ve ever heard of a name thats made of more than 1 word before. Lets get upstairs before my employees start thinking that I sold company secrets! Ha! Like I\'d ever do that."',
                choices: ['Continue upstairs with Dave', ''],
                actions: ['', ''],
            });
            

            break;
        case 'ETO11':  
               newState = Object.assign(newState, {
                dialog: '[Dave Watson] - "Nice to meet you, Steve! Let\'s get upstairs before my employees start thinking that I sold company secrets! Ha! Like I\'d ever do that again!"',
                choices: ['Continue upstairs with Dave', ''],
                actions: ['', ''],
            });
            

            break;
    }
    var newState = state;
    return newState;
}