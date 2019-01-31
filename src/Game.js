import Player from './Player.js';
import Clues from './Clue.js';
import DomUpdates from './domUpdates.js';

class Game {
  constructor(round, winner){
    this.round = round || 0;
    this.winner = winner || false;
  }

  createPlayers(nameOne, nameTwo, nameThree){

    window.player1 = new Player(nameOne, 0);
    window.player2 = new Player(nameTwo, 0);
    window.player3 = new Player(nameThree, 0);

    this.round++;

    window.round1 = new Clues();

    DomUpdates.buildScoreBoard();
    DomUpdates.buildGameBoard(this.round, []);
  }

  createRounds(){
    // create three arrays for each round

  }

}

export default Game;
