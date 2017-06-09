function daveofficeActions(action, state) {
    var newState = state;
    switch (action) {
        case 'ent':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson] - "Welcome! Did you find anything of interest?"',
                choices: ['I investigated the Breakroom', 'I investigated the Copier room.', 'I investigated John\'s office', 'I need to look around more'],
                actions: ['daveoffice.br', 'daveoffice.cr', 'daveoffice.jo', 'hallway.ent4', ],
            });
            break;
        case 'ent2':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson] - "Well, did you find anything else?"',
                choices: ['I investigated the Breakroom', 'I investigated the Copier room.', 'I investigated John\'s office', 'I need to look around more'],
                actions: ['daveoffice.br', 'daveoffice.cr', 'daveoffice.jo', 'hallway.ent4', ],
            });
            break;
            case 'ent3':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson] - "Well, did you find anything else?"',
                choices: ['Who do you think killed John?','I investigated the Breakroom', 'I investigated the Copier room.', 'I investigated John\'s office', 'I need to look around more'],
                actions: ['daveoffice.res','daveoffice.br', 'daveoffice.cr', 'daveoffice.jo', 'hallway.ent4', ],
            });
            break;
        case 'br':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson]-"Oh you went in the break room? Did you see my yogurt in there? I\'ve been saving it for a while. I also heard some crying in there. What was that?"',
                choices: ['I ate your yogurt.', 'Benny was in there.'],
                actions: ['daveoffice.br2', 'daveoffice.br3'],
            });
            break;
        case 'br2':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson]-"Wait, what? No! My yogurt! My poor poor Yogurt! I had that in the fridge for 5 weeks! That stuff doesn\'t come easy! Hard times for the yogurt industry, you know? So what about that crying?"',
                choices: ['Benny was in there', 'You know you can buy yogurt for, like, $2, right?'],
                actions: ['daveoffice.br3', 'daveoffice.br4'],
            });
            break;
        case 'br3':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson]-"Benny was in there, huh. Wonder how he\'ll live now. Alex was an ok wife, or so I heard. She absolutely loved her kid though. Makes you wonder why they got the divorce."',
                choices: ['Really? She was nasty to me!', 'I sure hope Benny is OK.'],
                actions: ['daveoffice.br5', 'daveoffice.br6'],
            });
            break;
        case 'br4':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson]-"Really? well not 5 weeks old you can\'t! What was that crying noise in there from?"',
                choices: ['The crying was Benny', 'The crying was the tears of the yogurt. It had waited so long to be consumed I just had to put it out of its misery.'],
                actions: ['daveoffice.br3', 'daveoffice.br7'],
            });
            break;
        case 'br5':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson]-"Well, did you mention John to her? She gets... Emotional, when you mention his name."',
                choices: ['Well that makes sense'],
                actions: ['daveoffice.ent2'],
            });
            break;
        case 'br6':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson]-"Me too. He\'s like a son to me. Since John was busy doing his work here, I was able to hear a lot about his personal life."',
                choices: ['Ok, cool'],
                actions: ['daveoffice.ent2'],
            });
            break;
        case 'br7':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson]-"Huh. You coulda told me! I would have eaten it!"',
                choices: ['Oh.'],
                actions: ['daveoffice.ent2'],
            });
            break;
        case 'cr':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson]-"Oh, You went in the copier room? did you happen to find a piece of paper I just printed? It would be great if you did!"',
                choices: ['I did find it', 'What paper?'],
                actions: ['daveoffice.cr2', 'daveoffice.cr3'],
            });
            break;
        case 'cr2':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson]-"Oh great! Can I have it?"',
                choices: ['Yes sure, go ahead.', 'No, what\'s on here?'],
                actions: ['daveoffice.cr4', 'daveoffice.cr5'],
            });
            break;
        case 'cr3':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson]-"I thought I just printed a piece of paper. Huh. You mind heading back to the copy room and seeing if its there?"',
                choices: ['Head back into the hallway to look for the copy room and his paper.'],
                actions: ['hallway.ent4'],
            });
            break;
        case 'cr4':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson]-"Thanks! Find anything else cool in there?"',
                choices: ['Nope', ''],
                actions: ['daveoffice.ent2', ''],
            });
            break;
        case 'cr5':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson]-"Oh it\'s nothing important. Just a little checking info."',
                choices: ['Hand the paper to Dave'],
                actions: ['daveoffice.ent2'],
            });
            break;
        case 'jo':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson]-"Oh you looked in that office. Find anything good in there?"',
                choices: ['Alex was in there.', 'Nope, nothing of interest'],
                actions: ['daveoffice.jo2', 'daveoffice.ent2'],
            });
            break;
        case 'jo2':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson]-"Oh really? Please tell me she was not removing company property! We had to escort her off the premises once because of that!"',
                choices: ['She wasn\'t touching anything too important. ', 'I know that she rummaged around his desk'],
                actions: ['daveoffice.jo3', 'daveoffice.jo3'],
            });
            break;
        case 'jo3':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson]-"Oh you\'re joking. What did she touch?"',
                choices: ['She brought out a check from his desk and it was from you, adressed to him.', 'She was looking around for stuff that was from their home. She was looking for something that was from their old house'],
                actions: ['daveoffice.jo5', 'daveoffice.jo8'],
            });
            break;
        case 'jo5':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson]-"Whaaaa? There\'s no way thats real. I promise he wasn\'t blackmailing me or anything."',
                choices: ['That sounds awfully suspicious.', 'How do you explain the check?'],
                actions: ['daveoffice.jo6', 'daveoffice.jo6'],
            });
            break;
        case 'jo6':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson]-"Wait wait, I can explain! The check was a bonus! It was a bonus... For good work! Yeah. Good work."',
                choices: ['Ok...', 'Sounds suspicious to me.'],
                actions: ['daveoffice.jo7', 'daveoffice.jo7'],
            });
            break;
        case 'jo7':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson]-"No no I swear it\'s only that! Holiday bonus. Yeah... Well, end of that conversation."',
                choices: ['Well Ok.', ''],
                actions: ['daveoffice.ent3', ''],
            });
            break;
        case 'jo8':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson]-"Well then. Would be a shame to have to escort her off the property again."',
                choices: ['Yes, that would be a shame.', 'Why is she even here?'],
                actions: ['daveoffice.jo9', 'daveoffice.jo10'],
            });
            break;
        case 'jo9':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson]-"Yes, it would be. Got anything else to talk about?"',
                choices: ['Nope', ''],
                actions: ['daveoffice.ent3', ''],
            });
            break;
        case 'jo10':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson]-"To be honest, I have no clue. She just kinda shows up. We had her sign a NDA that lasts permanently (Sucker), and she comes in to heckle john from time to time. I even got her a security badge! She\'s welcome here."',
                choices: ['Oh.'],
                actions: ['daveoffice.ent3'],
            });
            break;
        case 'res':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson]-"I think that Alexas did it. She has more motive than anybody as far as I know. She also said she hates yogurt, so she has that going against her already."',
                choices: ['Ok.', ''],
                actions: ['daveoffice.ent2', ''],
            });
            break;
    }
    return newState;
}