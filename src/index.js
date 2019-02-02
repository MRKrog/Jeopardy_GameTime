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
import Data from './data.js';
import Game from './Game.js';

// import DomUpdates from './domUpdates.js';
// import Player from './Player.js';
// import Clues from './Clues.js';
// import Round from './Round.js';

// import Box from './Box.js'; // Test Class Example
// don't have to declare every import here, per example game can house import player.js

// ****************************
// Global Variables


// ****************************
// Create Objects - Instantiate Game



// ****************************
// Event listeners
$('#startBtn').on('click', startGameBtn);



function startGameBtn(event){
  window.game = new Game();
  game.startGame();
  $('.card').on('click', showQuestion);
}

function showQuestion(event){

  game.selectedCard(event);



}




















// // ********************************************************
// // Misc
// const box = new Box();
// box.increaseHeight(100);
// // console.log('This is the JavaScript entry file - your code begins here.');
//
//
