// import DomUpdates from './domUpdates.js';
import Game from './Game.js';
// import Data from './data.js';
// import Clues from './Clue.js';

class Round {
  constructor(title, category){
    this.title = title;
    this.category = category;
  }

  buildRounds(allCategory, allClues){

    this.shuffle(allCategory);
    // console.log('this.roundsArray');
    console.log('shuffled ', allCategory);
    this.filterArr(allCategory, allClues);

    // roundCat

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
    console.log(allClues);
    const firstRound = [];

    const firstRoundFinal = [];


    for(let i = 0; i < 4; i++){
      let newClue = allClues.filter(arr => {
        // console.log(arr);
        return arr.categoryId === array[i].category;
      });
      // console.log(newClue);
      firstRound.push(newClue);
    }

    console.log(firstRound);

    for(let i = 0; i < 4; i++){

      let anotherClue = firstRound.filter(arrNew => {
        // console.log(arrNew[i].pointValue);
        return arrNew[i].pointValue === 100 * (i + 1);
      });
      console.log(anotherClue);
      // firstRoundFinal.push(anotherClue);
    }

    console.log(firstRoundFinal);


  }


}

export default Round;
