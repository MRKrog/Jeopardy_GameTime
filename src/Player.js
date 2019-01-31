import DomUpdates from './domUpdates.js';

class Player {
  constructor(name = 'MikeK', score = 0){
    this.name = name; 
    this.score = score;
  }


  playerSetUp(name, score){
    console.log('in player set up');
    // dom.testObj();
    // name.text(this.name);
    // score.text(this.score);
    // playerOneName.text(playerOneInput.val())
  }

}


export default Player;
