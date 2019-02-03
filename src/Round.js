import './index.js';
import DomUpdates from './domUpdates.js';
import Game from './Game.js';
// import Data from './data.js';
// import Clues from './Clue.js';

class Rounds {
  constructor(stage){
    this.stage = stage || 0;
    this.currentAnswer = '';
    this.pointValue = 0;
    this.questionsArray = []; // Stores the current clues for the round
    this.cardCount = 16;
  }

  buildRounds(allCategory, allClues){
    this.shuffle(allCategory);
    this.shuffle(allClues);
    this.filterArr(allCategory, allClues);
    // console.log('shuffled Cat ', allCategory);
    // console.log('shuffled Clue', allClues);
  };

  shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  filterArr(allCategory, allClues){

    const initialArr = [];

    for(let i = 0; i < 4; i++){
      let newClue = allClues.filter(arr => {
        return arr.categoryId === allCategory[i].category;
      });
      initialArr.push(newClue);
    };

    let reducedArr = initialArr.reduce((acc, clueIndex) => {
      let subArr = [];
      for(var i = 1; i < 5; i++){
        let foundClue = clueIndex.find(element => {
          return element.pointValue === 100 * i;
        });
        subArr.push(foundClue);
      };
      acc.push(subArr);
      return acc;
    }, []);

    game.roundsArray.push(reducedArr);
    this.questionsArray.push(reducedArr.flat());
  };

  checkAnswer(event){
    let userAnswer = $(event.target).text();
    userAnswer === round.currentAnswer ? DomUpdates.correctGuess() : DomUpdates.wrongGuess();
  };

  checkStage(){
    console.log('cardCount', this.cardCount);

    switch(this.cardCount) {
      case 0:
        this.stage += 1;
        
   
        break;
      default:
        
    }
  }


};

export default Rounds;
