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
                actions: ['conference.inv2', 'conference.snop'],
            });
            break;
        case 'snop':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson] -"Oh, you wanna look around first, huh? I think it might be a better idea if you went back and talked to the emplyees..."',
                choices: ['Continue looking around', 'Return to the conference room'],
                actions: ['conference.snoprud', 'conference.inv2'],
            });
            break;
        case 'snoprud':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson] -"Well, fine. Feel free to look around then. You should probably introduce yourself first to the people in there, but hey, but hey, who am I to know how things work here? I\'m only the boss!"',
                choices: ['Contiue looking around', 'Go into the conference room and meet the staff'],
                actions: ['hallway.confent', 'conference.inv2'],
            });
            break;
        case 'inv2':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson] -"Well I should probably tell you a bit about your case. John was killed yesterday, and we stumbled upon his body earlier today."',
                choices: ['Continue with Dave', ''],
                actions: ['conference.inv', ''],
            });
            break;
        case 'inv':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson] -"Welcome to our conference room! These are my marvelous employees,and youre here to investigate which one of em killed another one of my employees! Who do you want to talk to first?',
                choices: ['Steve', 'Meg', 'Alexandra', 'Benny'],
                actions: ['conference.steve', 'conference.meg', 'conference.alex', 'conference.ben'],
            });
            break;
        case 'invwsteve':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson] -"Welcome to our conference room! These are my marvelous employees,and youre here to investigate which one of em killed another one of my employees! Who do you want to talk to first?',
                choices: ['Meg', 'Alexandra', 'Benny'],
                actions: ['conference.meg', 'conference.alex', 'conference.ben'],
            });
            break;
        case 'steve':
            newState = Object.assign(newState, {
                dialog: '[Steven Avocanda] - "Hi, nice to meet you. Names Steve."',
                choices: ['Nice to meet you too.', 'Uhhh... Hi?', 'Go back to Dave'],
                actions: ['conference.steve2', 'conference.steve3', 'conference.inv'],
            });
            break;
        case 'steve2':
            newState = Object.assign(newState, {
                dialog: '[Steven Avocanda] - "Well someone\'s cheery. Good to know that detectives wear a smile on their face when they investigate a murder. Bet it keeps you sane."',
                choices: ['Well someone woke up on the wrong side of the bed this morning.', 'Haha! Who said I was sane?'],
                actions: ['conference.steve4', 'conference.steve5'],
            });
            break;
        case 'steve3':
            newState = Object.assign(newState, {
                dialog: '[Steven Avocanda] - "Oh hey there. Cat got your tongue? "',
                choices: ['No. What do you know about the murder that happened here?', '...'],
                actions: ['conference.steve6', 'conference.steve7'],
            });
            break;
        case 'steve4':
            newState = Object.assign(newState, {
                dialog: '[Steven Avocanda] - "Well considering my bed is against a wall and I didnt fall down 20 stories when I woke up, I can say I definitely did not wake up on the wrong side. But I did stumble upon a dead body at work today so I guess that might be a catalyst to my current state of mind."',
                choices: ['No need to get snarky with me, Steve. Just trying to do my job.', 'Oh, I\'m so sorry. I didn\'t realize you were the first person to see the body.'],
                actions: ['conference.steve8', 'conference.steve9'],
            });
            break;
        case 'steve5':
            newState = Object.assign(newState, {
                dialog: '[Steven Avocanda] - "Well no one did. I would assume that the person that my boss hired was at least semi-competent in their job. Thanks for killing those hopes." *Steve leaves out the back*',
                choices: ['Return to Dave'],
                actions: ['conference.invwsteve'],
            });
            break;
        case 'steve6':
            newState = Object.assign(newState, {
                dialog: '[Steven Avocanda] - "Direct and to the point. I like your drive. I found the body of my coworker when I came in this morning. Serves me right for coming in early. I\'ve been stuck in this office all morning, and can\'t get that image out of my head. Oh gosh. Poor John. Excuse me" *Steve leaves*',
                choices: ['Return to Dave'],
                actions: ['conference.invwsteve'],
            });
            break;
        case 'steve7':
            newState = Object.assign(newState, {
                dialog: '[Steven Avocanda] - "Huh. You must really be mute. I\'ll be here if you ever decide to talk to anyone ever again."',
                choices: ['Return to Dave',],
                actions: ['conference.inv',],
            });
            break;
        case 'steve8':
            newState = Object.assign(newState, {
                dialog: '[Steven Avocanda] - "Ooh Im\'m so sorry. I didn\'t mean to hurt your sensitive feelings. Well if you have to know, I was the one that found your victom\'s body. He was sprawled out on his desk like some sort of ragdoll that a child just discarded. Horrible scene. Ugh. Just thinking about it gives me flashbacks. Please excuse me." *Steve Leaves*',
                choices: ['Return to Dave',],
                actions: ['conference.invwsteve', ''],
            });
            break;
        case 'steve9':
            newState = Object.assign(newState, {
                dialog: '[Steven Avocanda] - "Its fine. Many people can sometimes be a bit brash and arrogant, like you when they dont know the full story.  But even thinking about that body.. Ugh. PLease excuse me." *Steve Leaves*',
                choices: ['Return to Dave', ''],
                actions: ['conference.invwsteve', 'conference.'],
            });
            break;
        case 'meg':
            newState = Object.assign(newState, {
                dialog: '[Meghan McWaters]-"Oh hi there! Nice to meet you! My name\'s Meghan, but people just call me Meg."',
                choices: ['Nice to meet you Meg!', 'What do you know about John?'],
                actions: ['conference.meg2', 'conference.meg3'],
            });
            break;
        case 'meg2':
            newState = Object.assign(newState, {
                dialog: '[Meghan McWaters]-"Wow! Usually I would expect a detective to just get right down to those questions, but you actually seem nice! Now go ahead and pick my brain with the questions I know you\'re dying to ask!"',
                choices: ['What do you know about John?', 'Were you and John close?'],
                actions: ['conference.meg31', 'conference.meg5'],
            });
            break;
        case 'meg3':
            newState = Object.assign(newState, {
                dialog: '[Meghan McWaters]-"Uhm.. Let\'s see... I know Steve had a kid. And Isn\'t that his Ex. standing right over there? I think her name was Alexandria or something like that."',
                choices: ['Is that all you know about John?', 'Were you and John close?'],
                actions: ['conference.meg4', 'conference.meg5'],
            });
            break;
        case 'meg31':
            newState = Object.assign(newState, {
                dialog: '[Meghan McWaters]-"Uhm.. Let\'s see... I know Steve had a kid. And Isn\'t that his Ex. standing right over there? I think her name was Alexandria or something like that."',
                choices: ['Is that all you know about John?', 'Were you and John close?'],
                actions: ['conference.meg41', 'conference.meg5'],
            });
            break;
        case 'meg4':
            newState = Object.assign(newState, {
                dialog: '[Meghan McWaters]-"Yeah I\'m sorry, but yeah that\'s all I can think of right now"',
                choices: ['Were you and John Close?', ''],
                actions: ['conference.meg5', ''],
            });
            break;
        case 'meg41':
            newState = Object.assign(newState, {
                dialog: '[Meghan McWaters]-"Actually, come to think of it, it is pretty suspicious that Steve had been gone the last 2 days before he showed up convieniently to John\'s dead body."',
                choices: ['Were you and John Close?', 'What do you mean by that?'],
                actions: ['conference.meg5', 'conference.meg6'],
            });
            break;
        case 'meg5':
            newState = Object.assign(newState, {
                dialog: '[Meghan McWaters]-"Well, we were as close as 2 coworkers could be. I brought him coffee in the morning. Made it myself. Used to work as a Barista before I got this job. Shows you what a Bachelor\'s Degree in Chemistry can get you. Ha."',
                choices: ['So you have a bachelors degree in Chemistry?', ''],
                actions: ['conference.meg7', ''],
            });
            break;
        case 'meg6':
            newState = Object.assign(newState, {
                dialog: '[Meghan McWaters]-"Well, Steve had just accumulated a few days of vacation last week and just burned them all. Im just sayin\' its kind of suspicious that he went convieniently on vacation right before he found him."',
                choices: ['Were you and John Close?', ''],
                actions: ['conference.meg5', ''],
            });
            break;
        case 'meg7':
            newState = Object.assign(newState, {
                dialog: '[Meghan McWaters]-"Why yes I do! It\'s not like i use it here either! All I do is file paperwork. Should really consider doing the Walter White approach, but I\'m good."',
                choices: ['Do you have any more comments?', 'Who do you think did it?'],
                actions: ['conference.meg8', 'conference.meg9'],
            });
            break;
            case 'meg8':
            newState = Object.assign(newState, {
                dialog: '[Meghan McWaters]-"Well not really. I do have my suspicions on who did it but that seems rather unprofessional to just say that I think. You should probably ask the other people some questions."',
                choices: ['Return to Dave', ''],
                actions: ['conference.inv', ''],
            });
            break;
            case 'meg9':
            newState = Object.assign(newState, {
                dialog: '[Meghan McWaters]-"Well, to tell you the truth, I think its Unprofessional to accuse someone. I\'m sure I only know a little about the story, but right now I think Steve did it. I think you should ask some people more questions."',
                choices: ['Return to Dave', ''],
                actions: ['conference.inv', ''],
            });
            break;
            case 'meg10':
            newState = Object.assign(newState, {
                dialog: '[Meghan McWaters]-""',
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