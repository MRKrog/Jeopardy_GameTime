import $ from 'jquery';
import Player from './Player.js'; // need
import Clues from './Clue.js'; // need
import DailyDouble from './dailyDouble.js';
import Rounds from './Round.js'; // need
import Category from './Category.js'; // need
import Data from './data.js'; // need
import DomUpdates from './domUpdates.js'; // need

class Game {
  constructor() {
    this.activePlayer = 0;
    this.playerArray = []; // Stores all the players instances
    this.categoryArray = []; // Stores all the categories together
    this.allClues = []; // Stores all the clues together
    this.roundsArray = []; // Stores all the rounds/game boards
    this.rndInst = new Rounds(0); // game.round to call round here
    this.finalWagers = [];
  }

  startGame(p1, p2, p3) {
    this.createPlayers(p1, p2, p3);
    this.createClues();
    this.createCategories();
    this.rndInst.initializeShuffle(this, 0, 4);
    DomUpdates.buildGameBoard(this, 0);
    // console.log('Categories at 1', game.categoryArray);
  }

  buildRoundTwo(game) {
    console.log('game at 2', game);
    console.log('in build round two');
    this.rndInst.filterArr(game, this.categoryArray, this.allClues, 4, 8);
    this.roundsArray[this.rndInst.stage].forEach(el => {
      el.forEach(subEl => {
        subEl.pointValue = subEl.pointValue * 2;
      })
    })
    this.rndInst.questionsArray[this.rndInst.stage].forEach(el => el.pointValue * 2);
    DomUpdates.buildGameBoard(game, 4);
  }

  buildRoundThree(game) {
    console.log('game at 3', game);
    console.log('in build round three');
    this.rndInst.filterArr(game, this.categoryArray, this.allClues, 8, 9);
    DomUpdates.buildFinalRound(game, 8);
  }

  createPlayers(p1, p2, p3) {
    let playerInst1 = new Player(p1);
    let playerInst2 = new Player(p2);
    let playerInst3 = new Player(p3);
    this.playerArray.push(playerInst1);
    this.playerArray.push(playerInst2);
    this.playerArray.push(playerInst3);
    DomUpdates.buildScoreBoard(this.playerArray);
  }

  createClues() {
    Object.values(Data.clues).forEach(clue => {
      this.allClues.push(new Clues(clue.question, clue.pointValue, clue.answer, clue.categoryId));
    });
  }

  createCategories() {
    Object.entries(Data.categories).forEach(category => {
      this.categoryArray.push(new Category(category[0].replace(/([a-z])([A-Z])/g, '$1 $2').toUpperCase(), category[1]));
    });
  }

  getClue(game, event) {
    let cardId = event.target.id;
    let card = this.rndInst.questionsArray[this.rndInst.stage];
    card[cardId].selected = true;
    this.rndInst.currentAnswer = card[cardId].answer;
    let sampleAnswers = card.filter(el => el.categoryId === card[cardId].categoryId)
    game.rndInst.answersArray = sampleAnswers;
    game.rndInst.shuffle(sampleAnswers);
    card[cardId] instanceof DailyDouble ? DomUpdates.showDailyDbl(this, card[cardId]) : DomUpdates.showQuestion(this, card[cardId]);
    DomUpdates.disableCard(event);
    this.rndInst.pointValue = card[cardId].pointValue;
    console.log('game ', game);
  }

  updatePlayerScore(game, points) {
    this.playerArray[this.activePlayer].score += points;
    console.log(this.playerArray[this.activePlayer].score)
    DomUpdates.changePlayerScore(game);
    this.rndInst.cardCount -= 1;
    this.rndInst.stage < 2 ? this.rndInst.checkStage(game) : this.rndInst.checkThirdRound(game);
  }

  inputFinalRoundWagers(game){
    DomUpdates.showFinalWager(game);
  }

}

export default Game;
