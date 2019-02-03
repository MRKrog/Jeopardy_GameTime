import './index.js'
import Player from './Player.js';
import Clues from './Clue.js';
import Rounds from './Round.js';
import Category from './Category.js';
import Data from './data.js';
import DomUpdates from './domUpdates.js';

class Game {
  constructor() {
    // this.winner = winner || false;
    // this.roundNumber = this.roundNumber
    this.activePlayer = 0;
    this.playerArray = []; // Stores all the players instances
    this.categoryArray = []; // Stores all the categories together
    this.allClues = []; // Stores all the clues together
    this.roundsArray = []; // Stores all the rounds/game boards
  }

  startGame() {
    this.createPlayers();
    this.createClues();
    this.createCategories();
    window.round = new Rounds(0); // Intializes New Round
    round.initializeShuffle(this.categoryArray, this.allClues, 0, 4);
    DomUpdates.buildGameBoard(0);
  };

  buildArray() {
    round.filterArr(this.categoryArray, this.allClues, 4, 8);
    DomUpdates.buildGameBoard(4);
  }

  createPlayers() {
    $('.name-input').each((i, curr) => {
      this.playerArray.push(new Player( $(curr).val()))
    });
    DomUpdates.buildScoreBoard(this.playerArray);
  };

  createClues() {
    Object.values(Data.clues).forEach(clue => {
      this.allClues.push(new Clues(clue.question, clue.pointValue, clue.answer, clue.categoryId));
    });
  };

  createCategories() {
    Object.entries(Data.categories).forEach(category => {
      this.categoryArray.push(new Category(category[0].replace(/([a-z])([A-Z])/g, '$1 $2').toUpperCase(), category[1]));
    });
  };

  getClue(event) {
    let cardId = event.target.id;
    let card = round.questionsArray[round.stage];
    round.currentAnswer = card[cardId].answer;
    DomUpdates.showQuestion(card[cardId]);
    DomUpdates.disableCard(event);
    round.pointValue = card[cardId].pointValue;
  };

  updatePlayerScore(points) {
    this.playerArray[this.activePlayer].score += points;
    DomUpdates.changePlayerScore();
    round.cardCount -= 1;
    round.checkStage();
  }

}

export default Game;
