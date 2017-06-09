function daveofficeActions(action, state) {
    var newState = state;
    switch (action) {
        case 'ent':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson] - "Welcome! Did you find anything of interest?"',
                choices: ['I investigated the Breakroom', 'I investigated the Copier room.', 'I investigated Meg\'s office', 'I investigated Steve\'s office'],
                actions: ['daveoffice.br', 'daveoffice.cr', 'daveoffice.mo', 'daveoffice.so', ],
                background: [{ url: './img/watsonOffice_WATSON_HAPPY.png', width: '100%', height: '100%' }],
            });
            break;
        case 'ent2':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson] - "Well, did you find anything else?"',
                choices: ['I investigated the Breakroom', 'I investigated the Copier room.', 'I Investigated John\'s Office', 'I investigated Meg\'s office', 'I investigated Steve\'s office', 'I investigated the storage room.'],
                actions: ['daveoffice.br', 'daveoffice.cr', 'daveoffice.jo', 'daveoffice.mo', 'daveoffice.so', 'daveoffice.sr'],
                background: [{ url: './img/watsonOffice_WATSON_NORMAL.png', width: '100%', height: '100%' }],
            });
            break;
        case 'br':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson]-"Oh you went in the break room? Did you see my yogurt in there? I\'ve been saving it for a while. I also heard some crying in there. What was that?"',
                choices: ['I ate your yogurt.', 'Benny was in there.'],
                actions: ['daveoffice.br2', 'daveoffice.br3'],
                background: [{ url: './img/watsonOffice_WATSON_NORMAL.png', width: '100%', height: '100%' }],
            });
            break;
        case 'br2':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson]-"Wait, what? No! My yogurt! My poor poor Yogurt! I had that in the fridge for 5 weeks! That stuff doesn\'t come easy! Hard times for the yogurt industry, you know? So what about that crying?"',
                choices: ['Benny was in there', 'You know you can buy yogurt for, like, $2, right?'],
                actions: ['daveoffice.br3', 'daveoffice.br4'],
                background: [{ url: './img/watsonOffice_WATSON_YOGURT_FACE.png', width: '100%', height: '100%' }],
            });
            break;
        case 'br3':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson]-"Benny was in there, huh. Wonder how he\'ll live now. Alex was an ok wife, or so I heard. She absolutely loved her kid though. Makes you wonder why they got the divorce."',
                choices: ['Really? She was nasty to me!', 'I sure hope Benny is OK.'],
                actions: ['daveoffice.br5', 'daveoffice.br6'],
                background: [{ url: './img/watsonOffice_WATSON_NORMAL.png', width: '100%', height: '100%' }],
            });
            break;
        case 'br4':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson]-"Really? well not 5 weeks old you can\'t! What was that crying noise in there from?"',
                choices: ['The crying was Benny', 'The crying was the tears of the yogurt. It had waited so long to be consumed I just had to put it out of its misery.'],
                actions: ['daveoffice.br3', 'daveoffice.br7'],
                background: [{ url: './img/watsonOffice_WATSON_ANGRY.png', width: '100%', height: '100%' }],            
            });
            break;
        case 'br5':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson]-"Well, did you mention John to her? She gets... Emotional, when you mention his name."',
                choices: ['Well that makes sense'],
                actions: ['daveoffice.ent2'],
                background: [{ url: './img/watsonOffice_WATSON_NORMAL.png', width: '100%', height: '100%' }],
            });
            break;
        case 'br6':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson]-"Me too. He\'s like a son to me. Since John was busy doing his work here, I was able to hear a lot about his personal life."',
                choices: ['Ok, cool'],
                actions: ['daveoffice.ent2'],
                background: [{ url: './img/watsonOffice_WATSON_NORMAL.png', width: '100%', height: '100%' }],
            });
            break;
        case 'br7':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson]-"Huh. You coulda told me! I would have eaten it!"',
                choices: ['Oh.'],
                actions: ['daveoffice.ent2'],
                background: [{ url: './img/watsonOffice_WATSON_ANGRY.png', width: '100%', height: '100%' }],
            });
            break;
        case 'cr':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson]-"Oh, You went in the copier room? did you happen to find a piece of paper I just printed? It would be great if you did!"',
                choices: ['I did find it', 'What paper?'],
                actions: ['daveoffice.cr2', 'daveoffice.cr3'],
                background: [{ url: './img/watsonOffice_WATSON_NORMAL.png', width: '100%', height: '100%' }],
            });
            break;
        case 'cr2':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson]-"Oh great! Can I have it?"',
                choices: ['Yes sure, go ahead.', 'No, what\'s on here?'],
                actions: ['daveoffice.cr4', 'daveoffice.cr5'],
                background: [{ url: './img/watsonOffice_WATSON_HAPPY.png', width: '100%', height: '100%' }],
            });
            break;
        case 'cr3':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson]-"I thought I just printed a piece of paper. Huh. You mind heading back to the copy room and seeing if its there?"',
                choices: ['Head back into the hallway to look for the copy room and his paper.'],
                actions: ['hallway.ent4'],
                background: [{ url: './img/watsonOffice_WATSON_NORMAL.png', width: '100%', height: '100%' }],
            });
            break;
        case 'cr4':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson]-"Thanks! Find anything else cool in there?"',
                choices: ['Nope', ''],
                actions: ['daveoffice.ent2', ''],
                background: [{ url: './img/watsonOffice_WATSON_HAPPY.png', width: '100%', height: '100%' }],
            });
            break;
        case 'cr5':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson]-"Oh it\'s nothing important. Just a little checking info."',
                choices: ['Hand the paper to Dave'],
                actions: ['daveoffice.ent2'],
                background: [{ url: './img/watsonOffice_WATSON_NORMAL.png', width: '100%', height: '100%' }],
            });
            break;
        case 'jo':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson]-"Oh you looked in that office. Find anything good in there?"',
                choices: ['Alex was in there.', 'Nope, nothing of interest'],
                actions: ['', 'daveoffice.ent2'],
                background: [{ url: './img/watsonOffice_WATSON_NORMAL.png', width: '100%', height: '100%' }
            });
            break;
        case 'jo':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson]-""',
                choices: ['', ''],
                actions: ['', ''],
            });
            break;
        case 'jo':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson]-""',
                choices: ['', ''],
                actions: ['', ''],
            });
            break;
        case 'jo':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson]-""',
                choices: ['', ''],
                actions: ['', ''],
            });
            break;
        case 'jo':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson]-""',
                choices: ['', ''],
                actions: ['', ''],
            });
            break;
        case 'jo':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson]-""',
                choices: ['', ''],
                actions: ['', ''],
            });
            break;
        case 'mo':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson]-""',
                choices: ['', ''],
                actions: ['', ''],
            });
            break;
        case 'so':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson]-""',
                choices: ['', ''],
                actions: ['', ''],
            });
            break;
        case 'sr':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson]-""',
                choices: ['', ''],
                actions: ['', ''],
            });
            break;
    }
    return newState;
}