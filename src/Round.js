import DomUpdates from './domUpdates.js';
import DailyDouble from './dailyDouble.js';

class Rounds {
  constructor(stage) {
    this.stage = stage || 0;
    this.currentAnswer = '';
    this.pointValue = 0;
    this.questionsArray = [];
    this.cardCount = 4;
    this.answersArray = [];
  }
  initializeShuffle(game, start, end) {
    this.shuffle(game.categoryArray);
    this.shuffle(game.allClues);
    this.filterArr(game, game.categoryArray, game.allClues, start, end);
  }
  shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  filterArr(game, allCategory, allClues, start, end) {
    const initialArr = [];
    for (let i = start; i < end; i++) {
      let newClue = allClues.filter(arr => {
        return arr.categoryId === allCategory[i].category;
      });
      initialArr.push(newClue);
    }
    let reducedArr = initialArr.reduce((acc, clueIndex) => {
      let subArr = [];
      for (var i = 1; i < 5; i++) {
        let foundClue = clueIndex.find(element => {
          return element.pointValue === 100 * i;
        });
        subArr.push(foundClue);
      }
      acc.push(subArr);
      return acc;
    }, []);
    this.createRoundClues(game, reducedArr);
  }
  createRoundClues(game, reducedArr) {
    game.roundsArray.push(reducedArr);
    this.questionsArray.push(reducedArr.flat());
    this.createDailyDoubles(game, reducedArr);
  }
  createDailyDoubles(game, reducedArr) {
    const randomClue = this.questionsArray[this.stage][Math.floor(
      Math.random() * this.questionsArray[this.stage].length
    )];
    const dailyInstance = new DailyDouble(randomClue.question, randomClue.pointValue, randomClue.answer, randomClue.categoryId);
    let randomIdx = this.questionsArray[this.stage].indexOf(randomClue);
    this.questionsArray[this.stage].splice(randomIdx, 1, dailyInstance);
    console.log('game ', game);
  }
  checkAnswer(game, userAnswer) {
    userAnswer === game.rndInst.currentAnswer ? DomUpdates.correctGuess(game) : DomUpdates.wrongGuess(game);
  }
  checkStage(game) {
    switch (this.cardCount) {
    case 0:
      this.stage += 1;
      this.changeRound(game);
      break;
    default:
    }
  }
  changeRound(game) {
    switch (this.stage) {
    case 1:
      this.secondRound(game);
      this.cardCount = 1;
      break;
    case 2:
      this.thirdRound(game);
      break;
    default:
    }
  }
  secondRound(game) {
    DomUpdates.clearBoard(game);
  }
  thirdRound(game) {
    DomUpdates.clearBoard(game);
  }
  checkThirdRound(game) {
    game.rndInst.stage === 2 && this.cardCount === -3 ? DomUpdates.endGame(game) : DomUpdates.showFinalQuestion(game);
  }
}
export default Rounds;
