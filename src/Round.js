import DomUpdates from './domUpdates.js';
import Game from './Game.js';
// import Data from './data.js';
// import Clues from './Clue.js';

class Rounds {
  constructor(round = 0){
    this.round = round;
  }

  buildRounds(allCategory, allClues){

    this.shuffle(allCategory);
    this.shuffle(allClues);

    console.log('shuffled ', allCategory);
    console.log('shuffled ', allClues);

    this.filterArr(allCategory, allClues);

  };

  shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  filterArr(array, allClues){

    const initialArr = [];

    for(let i = 0; i < 4; i++){
      let newClue = allClues.filter(arr => {
        return arr.categoryId === array[i].category;
      });
      initialArr.push(newClue);
    }

    console.log('Initial Array ', initialArr);

    let reducedArr = initialArr.reduce((acc, indy) => {

      let subArr = [];

      for(var i = 1; i < 5; i++){
        let found = indy.find(element => {
          return element.pointValue === 100 * i;
        });
        subArr.push(found);
      };

      acc.push(subArr);
      return acc;
    }, []);

    console.log('ReduceArr', reducedArr);
    initalizeGame.roundsArray.push(reducedArr);
  }

}

export default Rounds;
