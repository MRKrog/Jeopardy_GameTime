export default {
  // All Changes that are being made to the DOM go here

  getUserInput: function() {
    // var playerOneInput = document.querySelector('#box-height-display').innerText = newHeight;
    return playerOneInput; // 'The answer is Gabe'
  },

  displayHeight: function(newHeight) {
    // document.querySelector('#box-height-display').innerText = newHeight;
  },

  displayWidth: function() {

  },

  createNameBoard: function(){
    $('footer').append(
      `<section class="player-info-container">
        <div class="player-info">
          <h3 id="nameOne-title">${player1.name}</h3>
          <h4 id="playerOne-Score">${player1.score}</h4>
        </div>
        <div class="player-info">
          <h3 id="nameTwo-title">${player2.name}</h3>
          <h4 id="playerTwo-Score">${player2.score}</h4>
        </div>
        <div class="player-info">
          <h3 id="nameThree-title">${player3.name}</h3>
          <h4 id="playerThree-Score">${player3.score}</h4>
        </div>
      </section>`
    ).animate({'bottom': '0px'}, 500);

    $('.game-title').fadeOut(500, function(){ $(this).remove();});
    $('.form-selection').fadeOut(500, function(){ $(this).remove();});

    //create board

  },

}
