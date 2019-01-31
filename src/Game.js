import Player from './Player.js';
import DomUpdates from './domUpdates.js';

class Game {
  constructor(round = 1){
    this.round = round || 0;
  }

  createPlayers(){
    window.player1 = new Player($('#nameOne-input').val(), 30);
    window.player2 = new Player($('#nameTwo-input').val(), 20);
    window.player3 = new Player($('#nameThree-input').val(), 10);
    DomUpdates.createNameBoard();
  }

  createRounds(){
    // create three arrays for each round
  }

}

export default Game;
