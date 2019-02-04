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
import Rounds from './Round.js'; // need

let game = new Game();
// window.round = new Rounds(0);

// ****************************
// Event listeners
$('#startBtn').on('click', () => {
  startGameBtn();
});

$('body').on('click', '.card', () => {
  questionClicked(event);
});

$('body').on('click', '.answerBtn', () => {
  getUserInput(event);
});

$('body').on('click', '.submit-wager', () => {
  submitWager(event);
});

function startGameBtn() {
  let p1 = $('#nameOne-input').val();
  let p2 = $('#nameTwo-input').val();
  let p3 = $('#nameThree-input').val();
  game.startGame(game, p1, p2, p3);
}

function questionClicked(event) {
  game.getClue(game, event);
}

function getUserInput(event) {
  let userAnswer = $(event.target).text();
  game.rndInst.checkAnswer(game, userAnswer);
}

function submitWager(event) {
  console.log('in submit wager');
}
