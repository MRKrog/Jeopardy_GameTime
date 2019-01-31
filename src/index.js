// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// ****************************
// Import Css - Tell webpack to use a CSS file
import './css/normalize.css';
import './css/base.css';

// ****************************
// Import Images - Tell webpack to use an image (link to it in index.html)
import './images/turing-logo.png';

// ****************************
// Import Classes/Objects
import Data from './data.js';
import Game from './Game.js';

// import DomUpdates from './domUpdates.js';
// import Player from './Player.js';
// import Clues from './Clues.js';
// import Round from './Round.js';

import Box from './Box.js'; // Test Class
// don't have to declare every import here, per example game can house import player.js

// ****************************
// Create Objects - Instantiate Game
const newGame = new Game();

const dataSet = Object.values(Data).splice(1);
console.log(dataSet);



// ****************************
// Event listeners
$('#startBtn').on('click', startButton);




const box = new Box();
box.increaseHeight(100);
console.log('This is the JavaScript entry file - your code begins here.');


// Tell webpack to use javascript files


// import './Clue.js';

// import Game from './Game.js';



// let playerOneInput = $('#nameOne-input');
let playerOneName = $('#nameOne-title');
let playerOneScore = $('#playerOne-Score');

let playerTwoName = $('#nameTwo-title');
let playerTwoScore = $('#playerTwo-Score');

let playerThreeName = $('#nameThree-title');
let playerThreeScore = $('#playerThree-Score');


// Starts New Game
// Creating Three Arrays for the three rounds

function startButton(event){
  event.preventDefault();
  console.log('Gogogo');

  // condition to check if there is three players

  newGame.createPlayers();
  // newGame.createRounds()


  // append player info container


  // create jeporady board / append that shit


}
