import Player from './Player.js';
import Clues from './Clue.js';
import Round from './Round.js';
import Data from './data.js';
import DomUpdates from './domUpdates.js';

class Game {
  constructor(){
    // this.round = 0;
    // this.winner = winner || false;
    // this.roundNumber = this.roundNumber
    this.activePlayer = 1;
    this.playerArray = []; // Equals all the players instances
    this.roundsArray = []; //
    this.allClues = []; // Equals all the clues together
  }


  startGame(){
    this.createPlayers();
    this.createClues();
    this.createCategories();


    let instanceRound = new Round();
    instanceRound.buildRounds(this.roundsArray, this.allClues);// pushed through to Round

    // DomUpdates.buildGameBoard(this.round, []);
  };

  createPlayers(){
    $('.name-input').each((i, curr) => {
      this.playerArray.push(new Player( $(curr).val()))
    });
    DomUpdates.buildScoreBoard(this.playerArray);
  };

  createClues(){
    Object.values(Data.clues).forEach(clue => {
      this.allClues.push(new Clues(clue.question, clue.pointValue, clue.answer, clue.categoryId));
    });
  };

  createCategories(){
    // console.log(Data.categories[2]);
    Object.entries(Data.categories).forEach(category => {
      // console.log(category[0]);
      // console.log(category[1]);
      this.roundsArray.push(new Round(category[0], category[1]));
    });
    // Round.changeCat(this.allClues);
    // console.log(this.roundsArray);
    //
    // this.randomizeCategories();
  };














}

export default Game;
