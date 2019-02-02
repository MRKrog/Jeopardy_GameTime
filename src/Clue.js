import DomUpdates from './domUpdates.js';
import Game from './Game.js';

class Clues {
  constructor(question, answer, pointValue, categoryId, dailyDble){
    this.question = question || 'What MTV plays 24 hours a day';
    this.answer = answer || 'music videos';
    this.pointValue = pointValue || 100 ;
    this.categoryId = categoryId || 10;
    this.dailyDble = dailyDble || 4000;
  }

  removeClue(){

  }

}

export default Clues;
