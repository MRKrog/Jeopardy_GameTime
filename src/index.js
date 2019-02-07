// ****************************
// Import Css - Tell webpack to use a CSS file
import './css/normalize.css';
import './css/base.css';

// ****************************
// Import Images - Tell webpack to use an image (link to it in index.html)
import './images/turing-logo.png';
import './images/jepLogo.png';

import $ from 'jquery';
import jQuery from 'jquery'
window.$ = jQuery;

// ****************************
// Import Classes/Objects
import Game from './Game.js';
import DailyDouble from './dailyDouble.js';
import DomUpdates from './domUpdates.js';

let game = new Game();

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

$('body').on('click', '.finalAnswerBtn', () => {
  getUserInput(event);
});

$('body').on('click', '.submit-wager', () => {
  submitWager();
});

$('body').on('click', '#quitBtn', () => {
  location.reload();
});

$('body').on('click', '.final-submit-wager', () => {
  let wagerValue = $('.final-wager-input').val();
  DomUpdates.checkFinalWager(game, parseInt(wagerValue));
});

$('input.name-input').keyup(function() {
  var inputValues = $('.name-input').filter(function(el) {
    return this.value !== '';
  })
  inputValues.length === 3 ? $('.start-button-container').removeClass('disabled') : $('.start-button-container').addClass('disabled');
});

function startGameBtn() {
  let p1 = $('#nameOne-input').val();
  let p2 = $('#nameTwo-input').val();
  let p3 = $('#nameThree-input').val();
  game.startGame(p1, p2, p3);
  $('.title-extra').remove();
  $('.action-button-container').css('display', 'block');
}

function questionClicked(event) {
  game.getClue(game, event);
}

function getUserInput(event) {
  let userAnswer = $(event.target).text();
  game.rndInst.checkAnswer(game, userAnswer);
}

function submitWager() {
  let wager = $('.wager-input').val();
  let dailyDb = game.rndInst.questionsArray[game.rndInst.stage].find(clue => {
    return clue instanceof DailyDouble;
  });
  dailyDb.updatePointValue(game, wager);
}

function getUsersFinalInput(event) {
  let userAnswer = $(event.target).text();
  game.rndInst.checkAnswer(game, userAnswer);
}
