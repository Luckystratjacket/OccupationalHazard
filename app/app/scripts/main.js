import OHGame from './lib/OHGame';

let introSection = document.querySelector('#intro');
let gameSection = document.querySelector('#game');

let game = new OHGame(gameSection);

let playButton = introSection.querySelector('.play');
playButton.addEventListener('click', function() {
    console.log('clicked');
    introSection.style.display = 'none';
    game.start();
});

