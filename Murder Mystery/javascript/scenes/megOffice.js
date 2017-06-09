function megofficeActions(action, state) {
    var newState = state;
    switch (action) {
        case 'ent':
            newState = Object.assign(newState, {
                dialog: '[Meghan McWaters] - "Oh hello! I\'m trying to get some work done over here, feel free to look around, though."',
                choices: ['Look around her room', 'Talk to Meg', 'Exit the room'],
                actions: ['megoffice.snop', 'megoffice.dia', 'hallway.ent2'],
            });
            break;
        case 'snop':
            newState = Object.assign(newState, {
                dialog: 'You  scan your eyes around her room. You notice pills on his desk.',
                choices: ['Question Meg about the Pills', 'Continue looking around', 'Exit the Room'],
                actions: ['megoffice.dia2', 'megoffice.snop2', 'hallway.ent2'],
            });
            break;
        case 'snop2':
            newState = Object.assign(newState, {
                dialog: 'Your eyes dart around the room. You can see 2 coffee cups on her desk',
                choices: ['Question Meg about the Coffee Cups', 'Exit the room'],
                actions: ['megoffice.dia3', 'hallway.ent2'],
            });
            break;
        case 'dia':
            newState = Object.assign(newState, {
                dialog: '[Meghan McWaters]-"Oh hi there! Nice to meet you! My name\'s Meghan, but people just call me Meg."',
                choices: ['Nice to meet you Meg!', 'What do you know about John?'],
                actions: ['megoffice.meg2', 'megoffice.meg3'],
            });
            break;
            case '':  
               newState = Object.assign(newState, {
                dialog: '',
                choices: ['', ''],
                actions: ['', ''],
            });
            break;
        case 'meg2':
            newState = Object.assign(newState, {
                dialog: '[Meghan McWaters]-"Wow! Usually I would expect a detective to just get right down to those questions, but you actually seem nice! Now go ahead and pick my brain with the questions I know you\'re dying to ask!"',
                choices: ['What do you know about John?', 'Were you and John close?'],
                actions: ['megoffice.meg31', 'megoffice.meg5'],
            });
            break;
        case 'meg3':
            newState = Object.assign(newState, {
                dialog: '[Meghan McWaters]-"Wow! Usually I would expect a detective to just get right down to those questions, but you actually seem nice! Now go ahead and pick my brain with the questions I know you\'re dying to ask!"',
                choices: ['What do you know about John?', 'Were you and John close?'],
                actions: ['megoffice.meg31', 'megoffice.meg5'],
            });
            break;
        case 'meg4':
            newState = Object.assign(newState, {
                dialog: '[Meghan McWaters]-"Uhm.. Let\'s see... I know Steve had a kid."',
                choices: ['Is that all you know about John?', 'Were you and John close?'],
                actions: ['megoffice.meg4', 'megoffice.meg5'],
            });
            break;
        case 'meg31':
            newState = Object.assign(newState, {
                dialog: '[Meghan McWaters]-"Uhm.. Let\'s see... I know John had a kid."',
                choices: ['Is that all you know about John?', 'Were you and John close?'],
                actions: ['megoffice.meg41', 'megoffice.meg5'],
            });
            break;
        case 'meg4':
            newState = Object.assign(newState, {
                dialog: '[Meghan McWaters]-"Yeah I\'m sorry, but yeah that\'s all I can think of right now"',
                choices: ['Were you and John Close?', ''],
                actions: ['megoffice.meg5', ''],
            });
            break;
        case 'meg41':
            newState = Object.assign(newState, {
                dialog: '[Meghan McWaters]-"Actually, come to think of it, it is pretty suspicious that Steve had been gone the last 2 days before he showed up convieniently to John\'s dead body."',
                choices: ['Were you and John Close?', 'What do you mean by that?'],
                actions: ['megoffice.meg5', 'megoffice.meg6'],
            });
            break;
        case 'meg5':
            newState = Object.assign(newState, {
                dialog: '[Meghan McWaters]-"Well, we were as close as 2 coworkers could be. I brought him coffee in the morning. Made it myself. Used to work as a Barista before I got this job. Shows you what a Bachelor\'s Degree in Chemistry can get you. Ha."',
                choices: ['So you have a bachelors degree in Chemistry?', ''],
                actions: ['megoffice.meg7', ''],
            });
            break;
        case 'meg6':
            newState = Object.assign(newState, {
                dialog: '[Meghan McWaters]-"Well, Steve had just accumulated a few days of vacation last week and just burned them all. Im just sayin\' its kind of suspicious that he went convieniently on vacation right before he found him."',
                choices: ['Were you and John Close?', ''],
                actions: ['megoffice.meg5', ''],
            });
            break;
        case 'meg7':
            newState = Object.assign(newState, {
                dialog: '[Meghan McWaters]-"Why yes I do! It\'s not like i use it here either! All I do is file paperwork. Should really consider doing the Walter White approach, but I\'m good."',
                choices: ['Do you have any more comments?', 'Who do you think did it?'],
                actions: ['megoffice.meg8', 'megoffice.meg9'],
            });
            break;
        case 'meg8':
            newState = Object.assign(newState, {
                dialog: '[Meghan McWaters]-"Well not really. I do have my suspicions on who did it but that seems rather unprofessional to just say that I think."',
                choices: ['Exit into the hallway', ''],
                actions: ['hallway.ent2', ''],
            });
            break;
        case 'meg9':
            newState = Object.assign(newState, {
                dialog: '[Meghan McWaters]-"Well, to tell you the truth, I think its Unprofessional to accuse someone. I\'m sure I only know a little about the story, but right now I think Steve did it."',
                choices: ['Exit into the hallway', ''],
                actions: ['hallway.ent2', ''],
            });
            break;
    }
    return newState;
}