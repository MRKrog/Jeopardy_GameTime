import DomUpdates from './domUpdates.js';
import Game from './Game.js';

class Clues {
  constructor(question, answer){
    this.question = question;
    this.answer = answer;
  }

  removeClue(){

  }

}

class DailyDouble extends Clues {
  constructor(question, answer) {
    super(question, answer);
  }

  assignDailyDouble() {
    console.log('In Daily Double');
  }
}

export default Clues;
