// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// ****************************
// Import Css - Tell webpack to use a CSS file
import './css/normalize.css';
import './css/base.css';

// ****************************
// Import Images - Tell webpack to use an image (link to it in index.html)
import './images/turing-logo.png';


import $ from 'jquery';
import jQuery from 'jquery'
window.$ = jQuery;

// ****************************
// Import Classes/Objects
import Game from './Game.js'; // need


// ****************************
// Event listeners
$('#startBtn').on('click', startGameBtn);



function startGameBtn() {
  window.game = new Game();
  game.startGame();
}

$('body').on('click', '.card', () => {
  questionClicked(event);
});


function questionClicked(event) {
  game.getClue(event);
  $('.answerBtn').on('click', round.checkAnswer);
}






















// // ********************************************************
// // Misc
// const box = new Box();
// box.increaseHeight(100);
// // console.log('This is the JavaScript entry file - your code begins here.');
//
//
