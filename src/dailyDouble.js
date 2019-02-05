import Clues from './Clue.js';

class DailyDouble extends Clues {
  constructor(question, pointValue, answer, categoryId) {
    super(question, pointValue, answer, categoryId);
  }

  updatePointValue(wager) {
    console.log('the wager', wager);
    if(wager > 5) {
      console.log('points ', this.pointValue);
      this.pointValue = wager;
    }
  }

}

export default DailyDouble;
