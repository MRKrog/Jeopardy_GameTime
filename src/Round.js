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
    this.shuffle(allClues);

    // console.log('this.roundsArray');
    console.log('shuffled ', allCategory);
    console.log('shuffled ', allClues);

    this.filterArr(allCategory, allClues);

    // roundCat

  };

  // shuffle the array of categories
  shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  filterArr(array, allClues){
    // possibly can use reduce to push the new array
    const initialArr = [];

    // const firstRoundFinal = [];

    // filter over the array of all clues and filter out the categories for the first four
    // indices of the categories array
    for(let i = 0; i < 4; i++){
      let newClue = allClues.filter(arr => {
        // console.log(arr);
        return arr.categoryId === array[i].category;
      });
      // console.log(newClue);
      initialArr.push(newClue);
    }



    // ******************
    // all the clues in each array randomize for next step
    // ******************
    // console.log(initialArr.length);
    //
    // console.log(initialArr[0].length);
    // initialArr.forEach(arrIndex => {
    //
    // })
    // for (var i = initialArr.length - 1; i > 0; i--) {
    //
    //   var j = Math.floor(Math.random() * (i + 1));
    //   var temp = initialArr[i];
    //   initialArr[i] = initialArr[j];
    //   initialArr[j] = temp;
    //
    // }


    // iterate over the initalArr Array
    // go over each indicie and filter out only one 100, 200, 300, 400

    // array of 4 categories with all their clues
    console.log('Initial Array ', initialArr);



    let reducedArr = initialArr.reduce((acc, indy) => {

      let counter = 0;

      let subArr = indy.filter(ac => {
        counter++;
        // console.log(counter);
        return ac.pointValue === 100 * counter;
      });

      // let subArr = indy.filter(ac => {
      //   counter++;
      //   console.log(counter);
      //   return ac.pointValue === 100 * counter;
      // });

      console.log(subArr);

      acc.push(subArr)

      return acc;
    }, []);

    console.log('ReduceArr', reducedArr);

  }


  // let mapArr = initialArr.map(arr => {
  //   let arrLength = arr.length;
  //   arr.forEach(acc => {
  //     // return arr.pointValue;
  //     console.log(acc.answer);
  //     return arr.answer
  //   })
  //   // console.log(arrLength);
  //
  // });

  // console.log(firstRound);
  // console.log(firstRound[2]);
  //
  // for(let i = 0; i < 4; i++){
  //   let anotherClue = firstRound[i].filter(arrNew => {
  //     for(let j = 1; j < 5; j++){
  //       // console.log(arrNew[i].pointValue);
  //       return arrNew.pointValue === 100 * j;
  //     }
  //   });
  //   firstRoundFinal.push(anotherClue);
  // }


  // let subArr = indy.reduce((ac, sub) => {
  //   // console.log([sub]);
  //   // ac.push([sub])
  //   if(!ac.includes(sub.pointValue)){
  //     ac.push([sub])
  //   }
  //
  //
  //   // if(!ac.includes()){
  //   //
  //   // }
  //   // Object.keys(sub).forEach(a => {
  //   //   console.log(sub[a]);
  //   //   console.log(sub);
  //   //
  //   //   if(!ac.includes(sub) && a === 'pointValue'){
  //   //     ac.push(sub);
  //   //   }
  //   //
  //   //
  //   //   // if(!ac.includes(sub.pointValue)){
  //   //   //   ac.push(sub.pointValue);
  //   //   // }
  //   //
  //   // });
  //   // console.log(sub);
  //   // console.log(indy[sub]['pointValue']);
  //   // console.log(acc);
  //   // console.log(sub);
  //   return ac;
  // },[]);


}

export default Round;
