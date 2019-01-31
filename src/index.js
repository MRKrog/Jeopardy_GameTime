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

import Box from './Box.js'; // Test Class Example
// don't have to declare every import here, per example game can house import player.js

// ****************************
// Create Objects - Instantiate Game
const newGame = new Game();


// ****************************
// Event listeners
$('#startBtn').on('click', startGame);



// ****************************
// Global Variables
let playerOneName = $('#nameOne-title');
let playerOneScore = $('#playerOne-Score');

let playerTwoName = $('#nameTwo-title');
let playerTwoScore = $('#playerTwo-Score');

let playerThreeName = $('#nameThree-title');
let playerThreeScore = $('#playerThree-Score');




function startGame(event){

  // condition to check if there is three players
  newGame.createPlayers();
  newGame.createRounds();

  // append player info container


  // create jeporady board / append that shit

}
















// ********************************************************
// Misc
const box = new Box();
box.increaseHeight(100);
// console.log('This is the JavaScript entry file - your code begins here.');





// ********************************************************
// Methods to build out Array Test


// console.log(categoryCapitalWithValues)
// CategoriesValueIdArray = [1 - 10]]
var categoriesValueIdArray = Object.values(Data.categories)
// console.log(categoriesValueIdArray)



// capitalized category Array = UNITED STATES HISTORY
var capitalizedCategoryArray = Object.keys(Data.categories).map((element) =>{
  return element.replace(/([a-z])([A-Z])/g, '$1 $2').toUpperCase()
})
// console.log(captializedCategoryArray);



// Can grab specific categories of array
var clueObject = Object.values(Data.clues)

window.newClue = clueObject.filter(arr => {
  return arr.categoryId === 2;
})
console.log(newClue)


// const dataSet = Object.values(Data).splice(1);
// console.log(dataSet);
// console.log(Data)

//key value pair of categories is capitalized below

var categoryCapitalWithValues = categoriesValueIdArray.reduce(function (acc, curVal, index) {
acc[capitalizedCategoryArray[index]] = curVal;
return acc
}, {})
