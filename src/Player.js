import DomUpdates from './domUpdates.js';

class Player {
  constructor(name, score){
    this.name = name || 'MikeK';
    this.score = score || 0;
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
