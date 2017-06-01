function conferenceActions(action, state) {
    var newState = state;
    switch (action) {
        case 'rudent':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson] -"Welcome to our top office. All our employees are in the conference room, so let me go ahead and introduce you to them."',
                choices: ['Proceed to the conference room with Dave', 'Look around first'],
                actions: ['conference.inv', 'conference.snoprud'],
            });
            break;
        case 'ent':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson] -"Welcome to our top Office! All our employees are in the conference room, so let me go ahead and introduce you to them!"',
                choices: ['Proceed to the conference room with Dave', 'Look around first'],
                actions: ['conference.inv', 'conference.snop'],
            });
            break;
        case 'snop':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson] -"Oh, you wanna look around first, huh? I think it might be a better idea if you went back and talked to the emplyees..."',
                choices: ['Continue looking around', 'Return to the conference room'],
                actions: ['conference.snoprud', 'conference.inv'],
            });
            break;
        case 'snoprud':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson] -"Well, fine. Feel free to look around then. You should probably introduce yourself first to the people in there, but hey, but hey, who am I to know how things work here? I\'m only the boss!"',
                choices: ['Contiue looking around', 'Go into the conference room and meet the staff'],
                actions: ['hallway.confent', 'conference.inv'],
            });
            break;
        case 'inv':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson] -"Welcome to our conference room! These are my marvelous employees,and youre here to investigate which one of em killed another one of my employees! Who do you want to talk to first?',
                choices: ['Steve', 'Meg', 'Alexandra', 'Benny'],
                actions: ['conference.steve', 'conference.meg', 'conference.alex', 'conference.ben'], 
            });
            break;
            case 'steve':  
               newState = Object.assign(newState, {
                dialog: '[Steven Avocanda] - "Hi, nice to meet you. Names Steve."',
                choices: ['Nice to meet you too.', ''],
                actions: ['', ''],
            });
            break;
            case 'meg':  
               newState = Object.assign(newState, {
                dialog: '',
                choices: ['', ''],
                actions: ['', ''],
            });
            break;
            case 'alex':  
               newState = Object.assign(newState, {
                dialog: '',
                choices: ['', ''],
                actions: ['', ''],
            });
            break;
            case 'ben':  
               newState = Object.assign(newState, {
                dialog: '',
                choices: ['', ''],
                actions: ['', ''],
            });
            break;
    }
    return newState;
}