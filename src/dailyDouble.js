import Clues from './Clue.js';
import DomUpdates from './domUpdates.js';

class DailyDouble extends Clues {
  constructor(question, pointValue, answer, categoryId) {
    super(question, pointValue, answer, categoryId);
  }

  updatePointValue(game, wager) {
    let thisWager = parseInt(wager);
    // console.log('wager ', thisWager);-

    let usersCurrentMax = game.playerArray[game.activePlayer].score;
    // console.log('Users Current Max ', usersCurrentMax);

    let questionsAvailable = game.rndInst.questionsArray[game.rndInst.stage].filter(el => {
      return el.selected === false;
    });
    // console.log('question available ', questionsAvailable);

    var boardCurrentMax = Math.max.apply(Math, questionsAvailable.map( function(el) {
      return el.pointValue;
    }));
    // console.log('Current Board Max', boardCurrentMax);

    let maximumWager = Math.max(usersCurrentMax, boardCurrentMax);

    // console.log('maximumWager ', maximumWager);

    if(thisWager >= 5 && thisWager <= maximumWager) {
      // console.log('points ', this.pointValue);
      this.pointValue = thisWager;
      game.rndInst.pointValue = thisWager;
      DomUpdates.removeDailyBoard();
    } else {
      alert(`$${thisWager} is not acceptable. Input a wager from $5 - $${maximumWager}`);
    }
  }
}

export default DailyDouble;
