function conferenceActions(action, state) {
    var newState = state;
    switch (action) {
        case 'rudent':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson] -"Welcome to our top office. All our employees are in the conference room, so let me go ahead and introduce you to them."',
                choices: ['Proceed to the conference room with Dave', 'Look around first'],
                actions: ['conference.inv', 'conference.snoprud'],
                background: [{ url: './img/hallway_0.png', width: '100%', height: '100%' }],
            });
            break;
        case 'ent':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson] -"Welcome to our top Office! All our employees are in the conference room, so let me go ahead and introduce you to them!"',
                choices: ['Proceed to the conference room with Dave', 'Look around first'],
                actions: ['conference.inv2', 'conference.snop'],
                background: [{ url: './img/hallway_0.png', width: '100%', height: '100%' }],
            });
            break;
        case 'snop':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson] -"Oh, you wanna look around first, huh? I think it might be a better idea if you went back and talked to the emplyees..."',
                choices: ['Continue looking around', 'Return to the conference room'],
                actions: ['conference.snoprud', 'conference.inv2'],
                background: [{ url: './img/hallway_0.png', width: '100%', height: '100%' }],
            });
            break;
        case 'snoprud':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson] -"Well, fine. Feel free to look around then. You should probably introduce yourself first to the people in there, but hey, but hey, who am I to know how things work here? I\'m only the boss!"',
                choices: ['Contiue looking around', 'Go into the conference room and meet the staff'],
                actions: ['hallway.confent', 'conference.inv2'],
                background: [{ url: './img/hallway_0.png', width: '100%', height: '100%' }],
            });
            break;
        case 'inv2':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson] -"Well I should probably tell you a bit about your case. John was killed yesterday, and we stumbled upon his body earlier today. I called forward everyone that has "',
                choices: ['Continue with Dave', ''],
                actions: ['conference.inv', ''],
                background: [{ url: './img/conferRoom.png', width: '100%', height: '100%' }],
            });
            break;
        case 'inv':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson] -"Welcome to our conference room! These are my marvelous employees,and youre here to investigate which one of em killed another one of my employees! Who do you want to talk to first?',
                choices: ['Steve', 'Meg', 'Alexandra', 'Benny', ],
                actions: ['conference.steve', 'conference.meg', 'conference.alex', 'conference.ben'],
                background: [{ url: './img/conferRoom.png', width: '100%', height: '100%' }],
            });
            break;
            case 'invfin':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson] -"Welcome to our conference room! These are my marvelous employees,and youre here to investigate which one of em killed another one of my employees! Who do you want to talk to first?',
                choices: ['Steve', 'Meg', 'Alexandra', 'Benny', 'done with investigation'],
                actions: ['conference.steve', 'conference.meg', 'conference.alex', 'conference.ben', 'conference.done'],
            });
            break;
        case 'invwsteve':
            newState = Object.assign(newState, {
                dialog: '[Dave Watson] -"Welcome to our conference room! These are my marvelous employees,and youre here to investigate which one of em killed another one of my employees! Who do you want to talk to first?',
                choices: ['Meg', 'Alexandra', 'Benny'],
                actions: ['conference.meg', 'conference.alex', 'conference.ben'],
                background: [{ url: './img/conferRoom.png', width: '100%', height: '100%' }],
            });
            break;
        case 'steve':
            newState = Object.assign(newState, {
                dialog: '[Steven Avocanda] - "Hi, nice to meet you. Names Steve."',
                choices: ['Nice to meet you too.', 'Uhhh... Hi?', 'Go back to Dave'],
                actions: ['conference.steve2', 'conference.steve3', 'conference.inv'],
                background: [{ url: './img/conferRoom_STEVE_HAPPY.png', width: '100%', height: '100%' }],
            });
            break;
        case 'steve2':
            newState = Object.assign(newState, {
                dialog: '[Steven Avocanda] - "Well someone\'s cheery. Good to know that detectives wear a smile on their face when they investigate a murder. Bet it keeps you sane."',
                choices: ['Well someone woke up on the wrong side of the bed this morning.', 'Haha! Who said I was sane?'],
                actions: ['conference.steve4', 'conference.steve5'],
                background: [{ url: './img/conferRoom_STEVE_HAPPY.png', width: '100%', height: '100%' }],
            });
            break;
        case 'steve3':
            newState = Object.assign(newState, {
                dialog: '[Steven Avocanda] - "Oh hey there. Cat got your tongue? "',
                choices: ['No. What do you know about the murder that happened here?', '...'],
                actions: ['conference.steve6', 'conference.steve7'],
                background: [{ url: './img/conferRoom_STEVE_HAPPY.png', width: '100%', height: '100%' }],
            });
            break;
        case 'steve4':
            newState = Object.assign(newState, {
                dialog: '[Steven Avocanda] - "Well considering my bed is against a wall and I didnt fall down 20 stories when I woke up, I can say I definitely did not wake up on the wrong side. But I did stumble upon a dead body at work today so I guess that might be a catalyst to my current state of mind."',
                choices: ['No need to get snarky with me, Steve. Just trying to do my job.', 'Oh, I\'m so sorry. I didn\'t realize you were the first person to see the body.'],
                actions: ['conference.steve8', 'conference.steve9'],
                background: [{ url: './img/conferRoom_STEVE_ANGRY.png', width: '100%', height: '100%' }],
            });
            break;
        case 'steve5':
            newState = Object.assign(newState, {
                dialog: '[Steven Avocanda] - "Well no one did. I would assume that the person that my boss hired was at least semi-competent in their job. Thanks for killing those hopes." *Steve leaves out the back*',
                choices: ['Return to Dave'],
                actions: ['conference.invwsteve'],
                background: [{ url: './img/conferRoom_STEVE_ANGRY.png', width: '100%', height: '100%' }],
            });
            break;
        case 'steve6':
            newState = Object.assign(newState, {
                dialog: '[Steven Avocanda] - "Direct and to the point. I like your drive. I found the body of my coworker when I came in this morning. Serves me right for coming in early. I\'ve been stuck in this office all morning, and can\'t get that image out of my head. Oh gosh. Poor John. Excuse me" *Steve leaves*',
                choices: ['Return to Dave'],
                actions: ['conference.invwsteve'],
                background: [{ url: './img/conferRoom_STEVE_NORMAL.png', width: '100%', height: '100%' }],
            });
            break;
        case 'steve7':
            newState = Object.assign(newState, {
                dialog: '[Steven Avocanda] - "Huh. You must really be mute. I\'ll be here if you ever decide to talk to anyone ever again."',
                choices: ['Return to Dave',],
                actions: ['conference.invfin',],
                background: [{ url: './img/conferRoom_STEVE_NORMAL.png', width: '100%', height: '100%' }],
            });
            break;
        case 'steve8':
            newState = Object.assign(newState, {
                dialog: '[Steven Avocanda] - "Ooh Im\'m so sorry. I didn\'t mean to hurt your sensitive feelings. Well if you have to know, I was the one that found your victom\'s body. He was sprawled out on his desk like some sort of ragdoll that a child just discarded. Horrible scene. Ugh. Just thinking about it gives me flashbacks. Please excuse me." *Steve Leaves*',
                choices: ['Return to Dave',],
                actions: ['conference.invwsteve', ''],
                background: [{ url: './img/conferRoom_STEVE_ANGRY.png', width: '100%', height: '100%' }],
            });
            break;
        case 'steve9':
            newState = Object.assign(newState, {
                dialog: '[Steven Avocanda] - "Its fine. Many people can sometimes be a bit brash and arrogant, like you when they dont know the full story.  But even thinking about that body.. Ugh. PLease excuse me." *Steve Leaves*',
                choices: ['Return to Dave', ''],
                actions: ['conference.invwsteve', 'conference.'],
                background: [{ url: './img/conferRoom_STEVE_NORMAL.png', width: '100%', height: '100%' }],
            });
            break;
        case 'meg':
            newState = Object.assign(newState, {
                dialog: '[Meghan McWaters]-"Oh hi there! Nice to meet you! My name\'s Meghan, but people just call me Meg."',
                choices: ['Nice to meet you Meg!', 'What do you know about John?'],
                actions: ['conference.meg2', 'conference.meg3'],
                background: [{ url: './img/conferRoom_MEGHAN_HAPPY.png', width: '100%', height: '100%' }],
            });
            break;
        case 'meg2':
            newState = Object.assign(newState, {
                dialog: '[Meghan McWaters]-"Wow! Usually I would expect a detective to just get right down to those questions, but you actually seem nice! Now go ahead and pick my brain with the questions I know you\'re dying to ask!"',
                choices: ['What do you know about John?', 'Were you and John close?'],
                actions: ['conference.meg31', 'conference.meg5'],
                background: [{ url: './img/conferRoom_MEGHAN_HAPPY.png', width: '100%', height: '100%' }],
            });
            break;
        case 'meg3':
            newState = Object.assign(newState, {
                dialog: '[Meghan McWaters]-"Uhm.. Let\'s see... I know Steve had a kid. And Isn\'t that his Ex. standing right over there? I think her name was Alexandria or something like that."',
                choices: ['Is that all you know about John?', 'Were you and John close?'],
                actions: ['conference.meg4', 'conference.meg5'],
                background: [{ url: './img/conferRoom_MEGHAN_NORMAL.png', width: '100%', height: '100%' }],
            });
            break;
        case 'meg31':
            newState = Object.assign(newState, {
                dialog: '[Meghan McWaters]-"Uhm.. Let\'s see... I know John had a kid. And Isn\'t that his Ex. standing right over there? I think her name was Alexandria or something like that."',
                choices: ['Is that all you know about John?', 'Were you and John close?'],
                actions: ['conference.meg41', 'conference.meg5'],
                background: [{ url: './img/conferRoom_MEGHAN_NORMAL.png', width: '100%', height: '100%' }],
            });
            break;
        case 'meg4':
            newState = Object.assign(newState, {
                dialog: '[Meghan McWaters]-"Yeah I\'m sorry, but yeah that\'s all I can think of right now"',
                choices: ['Were you and John Close?', ''],
                actions: ['conference.meg5', ''],
                background: [{ url: './img/conferRoom_MEGHAN_NORMAL.png', width: '100%', height: '100%' }],
            });
            break;
        case 'meg41':
            newState = Object.assign(newState, {
                dialog: '[Meghan McWaters]-"Actually, come to think of it, it is pretty suspicious that Steve had been gone the last 2 days before he showed up convieniently to John\'s dead body."',
                choices: ['Were you and John Close?', 'What do you mean by that?'],
                actions: ['conference.meg5', 'conference.meg6'],
                background: [{ url: './img/conferRoom_MEGHAN_NORMAL.png', width: '100%', height: '100%' }],
            });
            break;
        case 'meg5':
            newState = Object.assign(newState, {
                dialog: '[Meghan McWaters]-"Well, we were as close as 2 coworkers could be. I brought him coffee in the morning. Made it myself. Used to work as a Barista before I got this job. Shows you what a Bachelor\'s Degree in Chemistry can get you. Ha."',
                choices: ['So you have a bachelors degree in Chemistry?', ''],
                actions: ['conference.meg7', ''],
                background: [{ url: './img/conferRoom_MEGHAN_HAPPY.png', width: '100%', height: '100%' }],
            });
            break;
        case 'meg6':
            newState = Object.assign(newState, {
                dialog: '[Meghan McWaters]-"Well, Steve had just accumulated a few days of vacation last week and just burned them all. Im just sayin\' its kind of suspicious that he went convieniently on vacation right before he found him."',
                choices: ['Were you and John Close?', ''],
                actions: ['conference.meg5', ''],
                background: [{ url: './img/conferRoom_MEGHAN_NORMAL.png', width: '100%', height: '100%' }],
            });
            break;
        case 'meg7':
            newState = Object.assign(newState, {
                dialog: '[Meghan McWaters]-"Why yes I do! It\'s not like i use it here either! All I do is file paperwork. Should really consider doing the Walter White approach, but I\'m good."',
                choices: ['Do you have any more comments?', 'Who do you think did it?'],
                actions: ['conference.meg8', 'conference.meg9'],
                background: [{ url: './img/conferRoom_MEGHAN_ANGRY.png', width: '100%', height: '100%' }],
            });
            break;
            case 'meg8':
            newState = Object.assign(newState, {
                dialog: '[Meghan McWaters]-"Well not really. I do have my suspicions on who did it but that seems rather unprofessional to just say that I think. You should probably ask the other people some questions."',
                choices: ['Return to Dave', ''],
                actions: ['conference.invfin', ''],
                background: [{ url: './img/conferRoom_MEGHAN_NORMAL.png', width: '100%', height: '100%' }],
            });
            break;
            case 'meg9':
            newState = Object.assign(newState, {
                dialog: '[Meghan McWaters]-"Well, to tell you the truth, I think its Unprofessional to accuse someone. I\'m sure I only know a little about the story, but right now I think Steve did it. I think you should ask some people more questions."',
                choices: ['Return to Dave', ''],
                actions: ['conference.invfin', ''],
                background: [{ url: './img/conferRoom_MEGHAN_NORMAL.png', width: '100%', height: '100%' }],
            });
            break;
        case 'alex':
            newState = Object.assign(newState, {
                dialog: '[Alexandria Epicron]- "Oh! Nice to meet you. Your\'e here to investigate the murder of John, right?" ',
                choices: ['Yes', 'No'],
                actions: ['conference.alex2', 'conference.alex3'],
            });
            break;
            case 'alex2':
            newState = Object.assign(newState, {
                dialog: '[Alexandria Epicron]- "Oh great! Once you get all of this mess sorted out, could you tell me if I\'m included in his will? Asking for a friend." ',
                choices: ['Why would you want to know that?', 'Who Is this friend?'],
                actions: ['conference.alex4', 'conference.alex5'],
            });
            break;
            case 'alex3':
            newState = Object.assign(newState, {
                dialog: '[Alexandria Epicron]- "Oh. Well It\'s not like you really need an investigator to figure out who murdered him!" ',
                choices: ['Why would you say that?', 'Did you murder him?'],
                actions: ['conference.alex6', 'conference.alex7'],
            });
            break;
            case 'alex4':
            newState = Object.assign(newState, {
                dialog: '[Alexandria Epicron]- "Well I am his Ex. Wife! He cheated me out of so many things that I expect to be compensated greatly for all my horrid time with him." ',
                choices: ['Why did you have such a bad time with him?'],
                actions: ['conference.alex8'],
            });
            break;
            case 'alex5':
            newState = Object.assign(newState, {
                dialog: '[Alexandria Epicron]- "Just kidding, I don\'t have any friends. I just want to know if he\'s included me in his will or not!"',
                choices: ['Why do you want to know that?', ],
                actions: ['conference.alex4'],
            });
            case 'alex6':
            newState = Object.assign(newState, {
                dialog: '[Alexandria Epicron]- "Well I was married to him for 6 years! I knew that man better than anyone! Plus I know who did it! It was his very son, Ben! He\'s the spawn of satan I tell you! Never trust that little brat!" ',
                choices: ['Are you OK?', ''],
                actions: ['conference.alex9', ''],
            });
            case 'alex7':
            newState = Object.assign(newState, {
                dialog: '[Alexandria Epicron]- "Oh heavens no! Don\'t get me wrong, I would have in a heartbeat! Too bad I don\'t want to spend the rest of my days in a jail cell while that fool laughs up from me from 6 feet under! He would have the final laugh then."',
                choices: ['Are you Ok?', ''],
                actions: ['conference.alex9', ''],
            });
            case 'alex8':
            newState = Object.assign(newState, {
                dialog: '[Alexandria Epicron]- "He was just such a fool! He kept on criticizing me every time I bought something! "We Don\'t Have The Money" Suuure bud. Plus he has the nerve to get a divorce from me and somehow manages to get full rights of our son! I just had to pick him up from his elementary school when I heard you wanted everyone here. Such a fool. Didn\'t even account for his own death! "',
                choices: ['Are you sane?', ''],
                actions: ['conference.alex9', ''],
            });
            break;
            case 'alex9':
            newState = Object.assign(newState, {
                dialog: '[Alexandria Epicron]- "Am I ok? AM I OK? I HAVE NEVER HAD SOMEONE ASK ME SUCH A STUPID QUESTION IN MY ENTIRE LIFE! Besides John of course. But you have the nerrrrve to call me insane! Good day to you sir!"',
                choices: ['Return to dave', ''],
                actions: ['conference.invfin', ''],
            });
            break;
        case 'ben':
            newState = Object.assign(newState, {
                dialog: '[Benjamin Stalwart]- "Have you seen my daddy?"',
                choices: ['Return to Dave', ''],
                actions: ['conference.inv', ''],
                background: [{ url: './img/conferRoom_BENNY.png', width: '100%', height: '100%' }],
            });
            break;
            case 'done':  
               newState = Object.assign(newState, {
                dialog: 'Dave Watson] -"Done talking to everyone already? Well, I guess you better get yourself out to the hallways! Each hallway connects to 2 offices and a farther stretch of the hallway. Good luck looking for clues! Also, I\'m going to send those employees back to their offices, so you can talk to them a bit more there. I\'ll be in the office if you need me."',
                choices: ['Continue to the Hallway', ''],
                actions: ['hallway.confent', ''],
            });
            break;
    }
    return newState;
}