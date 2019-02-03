import DomUpdates from './domUpdates.js';

class Player {
  constructor(name, score){
    this.name = name || 'MikeK';
    this.score = score || 0;
    this.turn = false;
  }


  playerSetUp(name, score){
    console.log('in player set up');
  }

}


export default Player;
