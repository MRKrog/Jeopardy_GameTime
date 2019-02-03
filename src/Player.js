import DomUpdates from './domUpdates.js';

class Player {
  constructor(name, score){
    this.name = name || 'MikeK';
    this.score = score || 0;
  }


  changePlayer(player){
    switch(player) {
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
        console.log('No player Selected');
    }
  }
  

}


export default Player;
