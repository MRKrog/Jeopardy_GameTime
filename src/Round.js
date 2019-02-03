import $ from 'jquery';
import DomUpdates from './domUpdates.js';

class Rounds {
  constructor(stage) {
    this.stage = stage || 0;
    this.currentAnswer = '';
    this.pointValue = 0;
    this.questionsArray = [];
    this.cardCount = 4;
  }
  initializeShuffle(allCategory, allClues, start, end) {
    this.shuffle(allCategory);
    this.shuffle(allClues);
    this.filterArr(allCategory, allClues, start, end);
  }
  shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  filterArr(allCategory, allClues, start, end) {
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
    this.createRoundClues(reducedArr);
  }
  createRoundClues(reducedArr){
    game.roundsArray.push(reducedArr);
    this.questionsArray.push(reducedArr.flat());
    this.createDailyDoubles();
  }
  createDailyDoubles() {
    var item = this.questionsArray[this.stage][Math.floor(Math.random()*this.questionsArray[this.stage].length)];
    console.log(item);
    console.log(item.dailyDble = true);
  }
  checkAnswer(event) {
    let userAnswer = $(event.target).text();
    userAnswer === round.currentAnswer ? DomUpdates.correctGuess() : DomUpdates.wrongGuess();
  }
  checkStage() {
    switch (this.cardCount) {
    case 0:
      this.stage += 1;
      this.changeRound();
      break;
    default:
    }
  }
  changeRound() {
    switch (this.stage) {
    case 1:
      this.secondRound();
      break;
    case 2:
      this.thirdRound();
      break;
    default:
    }
  }
  secondRound() {
    DomUpdates.clearBoard();
  }
}
export default Rounds;
