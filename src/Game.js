import Player from './Player.js';
import Clues from './Clue.js';
import Rounds from './Round.js';
import Category from './Category.js';
import Data from './data.js';
import DomUpdates from './domUpdates.js';

class Game {
  constructor(){

    // this.round = 0;
    // this.winner = winner || false;
    // this.roundNumber = this.roundNumber
    this.activePlayer = 1;
    this.playerArray = []; // Equals all the players instances
    this.categoryArray = []; // Equals all the categories together
    this.allClues = []; // Equals all the clues together
    this.roundsArray = []; // Equals all the rounds


    this.currentRound = new Rounds(1);

  }


  startGame(){
    this.createPlayers();
    this.createClues();
    this.createCategories();

    this.currentRound.buildRounds(this.categoryArray, this.allClues);// pushed through to Round
    DomUpdates.buildGameBoard();
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
    Object.entries(Data.categories).forEach(category => {
      this.categoryArray.push(new Category(category[0], category[1]));
    });
  };














}

export default Game;
