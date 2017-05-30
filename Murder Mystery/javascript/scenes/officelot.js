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
                actions: ['officelot.ele', ''],
            });


            break;
        case 'ETO11':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson] - "Nice to meet you, Steve! Let\'s get upstairs before my employees start thinking that I sold company secrets! Ha! Like I\'d ever do that again!"',
                choices: ['Continue upstairs with Dave', ''],
                actions: ['officelot.ele', ''],
            });


            break;
        case 'ele':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson] - "So, ahh, welcome to Antrax! Due to security reasons, I do have to say that anything you see in our private testing facilities that does not directly relate to your case cannot be shared outside of this office. Move around all ya want, but if you find anything, just lemme know, Mkay?"',
                choices: ['So are you hiding anything?', 'Why tell you?'],
                actions: ['officelot.dia', 'officelot.dia2'],
            });


            break;
        case 'dia':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson] - "Huh? No, Im not hiding anything! But Im sure we all have our personal lives, and some us want them to remain personal. Just don\'t ask too many questions you don\'t need to ask."',
                choices: ['Oh. That makes sense.', 'That sounds like someone who\'s hiding something would say.'],
                actions: ['officelot.dia3', 'officelot.dia4'],
            });


            break;
        case 'dia2':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson] - "Oh. Well, I\'m the leader of our branch of Amtrax! I\'ve worked here 6 years, and this is the job that I get after so many years of service. Stuck as a manager of a remote location. Ha!"',
                choices: ['Sounds like you\'re pretty mad about your job', 'What do you mean by remote location?'],
                actions: ['officelot.dia5', 'officelot.dia6'],
            });


            break;
        case 'dia3':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson] -"Oh! We\'re here! Welcome to the 3rd floor of our facility, and the place where my employee John was murdered. We also had a killer Taco Tuesday last thursday!"',
                choices: ['Exit the elevator into the conference room', ''],
                actions: ['conference.ent', ''],
            });


            break;
        case 'dia4':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson] -"Ha. Ha. We\'re here."',
                choices: ['Exit the elevator into the conference room', ''],
                actions: ['conference.ent', ''],
            });


            break;
        case 'dia5':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson] -"Oh that? It\'s nothing. Just corporate showing that big, ugly unfeeling soul of theirs again! Although I am getting promoted next week to District manager, so that\'ll be a change of pace. It\'s offsite and everything. Hey look, we\'re here!"',
                choices: ['Exit the elevator into the conference room', ''],
                actions: ['conference.ent', ''],
            });


            break;
        case 'dia6':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson] -"Well, We\'re very far out from all the other branches. Usually we have a company detective come out, but your employers come highly reccomended. This your first case?"',
                choices: ['Yes', 'No, I have actually solved this case before. I know all about your dirty little secrets.'],
                actions: ['officelot.dia7', 'officelot.dia8'],
            });


            break;
        case 'dia7':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson] -"Oh. Well at least the new guys seem qualified!"',
                choices: ['Exit the elevator into the conference room', ''],
                actions: ['conference.ent', ''],
            });


            break;
        case 'dia8':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson] -"Huh. Well hopefully that lets you solve the case easier!" *Nervous Laughter*',
                choices: ['Exit the elevator into the conference room', ''],
                actions: ['conference.ent', ''],
            });


            break;
    }
    var newState = state;
    return newState;
}