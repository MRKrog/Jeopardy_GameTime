import Clues from './Clue.js';
import DomUpdates from './domUpdates.js';

class DailyDouble extends Clues {
  constructor(question, pointValue, answer, categoryId) {
    super(question, pointValue, answer, categoryId);
  }

  updatePointValue(game, wager) {
    let thisWager = parseInt(wager);

    let usersCurrentMax = game.playerArray[game.activePlayer].score;

    let questionsAvailable = game.rndInst.questionsArray[game.rndInst.stage].filter(el => {
      return el.selected === false;
    });

    var boardCurrentMax = Math.max.apply(Math, questionsAvailable.map(function(el) {
      return el.pointValue;
    }));

    let maximumWager = Math.max(usersCurrentMax, boardCurrentMax);

    if(thisWager >= 5 && thisWager <= maximumWager) {
      this.pointValue = thisWager;
      game.rndInst.pointValue = thisWager;
      DomUpdates.removeDailyBoard();
    } else {
      alert(`$${thisWager} is not acceptable. Input a wager from $5 - $${maximumWager}`);
    }
  }
}

export default DailyDouble;
