var board = document.querySelector('.board');
var scene = document.querySelector('.scene');
var background = document.querySelector('.background');
var foreground = document.querySelector('.foreground');
var clock = document.querySelector('.clock');
var dialog = document.querySelector('.dialog');
var options = document.querySelector('.options');

var gameState = {
    time: 20,
    location: '',
    items: [
        '',
        ''
    ],
    discovery: [

    ],
    dialog: '',
    choices: [],
    actions: [],
    background: [
        { url: '', top: 0, left: 0, width: 'auto', height: 'auto' }
    ],
    foreground: []
};


function processAction(action, state) {

    console.log('Processing action = ', action);

    var actionCategory = action.split('.')[0];
    var actionIdentifier = action.split('.')[1];

    var newState = Object.assign({}, state);

    if (actionCategory == 'game') {
        newState = gameActions(actionIdentifier, state);
    }

    if (actionCategory == 'conference') {
        newState = conferenceActions(actionIdentifier, state);
    }

    if (actionCategory == 'parkingLot') {
        newState = parkingLotActions(actionIdentifier, state);
    }

    if (actionCategory == 'officelot') {
        newState = officelotActions(actionIdentifier, state);
    }
    if (actionCategory == 'breakroom') {
        newState = breakroomActions(actionIdentifier, state);
    }
    if (actionCategory == 'johnoffice') {
        newState = johnofficeActions(actionIdentifier, state);
    }
    if (actionCategory == 'copierroom') {
        newState = copierRoomActions(actionIdentifier, state);
    }
    if (actionCategory == 'daveoffice') {
        newState = daveofficeActions(actionIdentifier, state);
    }
    if (actionCategory == 'megoffice') {
        newState = megofficeActions(actionIdentifier, state);
    }
    if (actionCategory == 'steveoffice') {
        newState = steveofficeActions(actionIdentifier, state);
    }
    if (actionCategory == 'storageroom') {
        newState = storageroomActions(actionIdentifier, state);
    }
    if (actionCategory == 'hallway') {
        newState = hallwayActions(actionIdentifier, state);
    }
    if (actionCategory == 'hiddenroom') {
        newState = hiddenroomActions(actionIdentifier, state);
    }


    setGameState(newState);
}

function setGameState(newState) {
    gameState = newState;
    updateGame();
}

function updateDialog() {
    dialog.innerHTML = gameState.dialog;
}

function processGameState() {

}


function updateScene() {

}

function updateOptions() {
    var actions = gameState.actions;
    var choices = gameState.choices;
    options.innerHTML = '';
    for (var i = 0; i < choices.length; i++) {
        var o = document.createElement('div');
        o.innerHTML = choices[i];
        o.setAttribute('data-action', actions[i]);
        o.addEventListener('click', (function (index, option, action, state) {
            return function () {
                processAction(action, state)
            }
        })(i, choices[i], actions[i], gameState));
        options.appendChild(o);
    }
}
function updateClock() {

}

function updateBackground() {
    var backgroundImages = gameState.background;

    if (backgroundImages) {
        background.innerHTML = '';
        for (var i=0; i<backgroundImages.length; i++) {
            var imgData = backgroundImages[i];
            var img = document.createElement('img');
            img.setAttribute('src', imgData.url);
            img.style.top = imgData.top ? imgData.top + 'px' : '0px';
            img.style.left = imgData.left ? imgData.left + 'px' : '0px';
            img.style.width = imgData.width ? imgData.width : 'auto';
            img.style.height = imgData.height ? imgData.height : 'auto';
            background.appendChild(img);
        }
    }    
}

function updateForeground() {
    foreground.innerHTML = '';
}

function updateGame() {
    updateScene();
    updateDialog();
    updateClock();
    updateOptions();
    updateBackground();
    updateForeground();
}

function initGame() {
    setGameState(Object.assign({}, gameState, {
        dialog: 'You see a case file on your desk. It is for a murder that happened in the Antrax Building. Accept the case?',
        choices: ['Yes', 'No'],
        actions: ['game.start', 'game.ignore'],
        background: [{ url: './img/folder.png', width: '100%', height: '100%' }],
                foreground: []
    }))

}

initGame();
