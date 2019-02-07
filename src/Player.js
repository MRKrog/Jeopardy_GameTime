import DomUpdates from './domUpdates.js';

class Player {
  constructor(name, score) {
    this.name = name || 'Player';
    this.score = score || 0;
  }

  changePlayer(game, player) {
    DomUpdates.removePlayerPosition(game);
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
    DomUpdates.addPlayerPosition(game);
  }
}


export default Player;
