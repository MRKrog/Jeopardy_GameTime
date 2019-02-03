import DomUpdates from './domUpdates.js';

class Player {
  constructor(name, score) {
    this.name = name || 'MikeK';
    this.score = score || 0;
  }


  changePlayer(player) {
    DomUpdates.removePlayerPosition();
    switch (player) {
    case 0:
      game.activePlayer = 1;
      break;
    case 1:
      game.activePlayer = 2;
      break;
    case 2:
      game.activePlayer = 0;
      break;
    default:
    }
    DomUpdates.addPlayerPosition();
  }


}


export default Player;
