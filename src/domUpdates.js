import $ from 'jquery';


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

  buildScoreBoard: function(playerArray){
    $('footer').append(
      `<section class="player-info-container">
        <div class="player-info">
          <h3 id="nameOne-title">${playerArray[0].name}</h3>
          <h4 id="playerOne-Score">${playerArray[0].score}</h4>
        </div>
        <div class="player-info">
          <h3 id="nameTwo-title">${playerArray[1].name}</h3>
          <h4 id="playerTwo-Score">${playerArray[1].score}</h4>
        </div>
        <div class="player-info">
          <h3 id="nameThree-title">${playerArray[2].name}</h3>
          <h4 id="playerThree-Score">${playerArray[2].score}</h4>
        </div>
      </section>`
    ).animate({'bottom': '0px'}, 500);

    $('.game-title').fadeOut(500, function(){ $(this).remove();});
    $('.form-selection').fadeOut(500, function(){$(this).remove();});

    $('#startBtn').attr('data-after','Quit');
  },

  //create board
  buildGameBoard: function(round){
    console.log(round);

    if(round === '1'){
      console.log('build round one');
    }

    let boardGame = $(`
      <article class="question-container">
        <section class="question-column">
          <div class="question-title"><h3>United States History</h3></div>
          <div class="card">$100</div>
          <div class="card">$200</div>
          <div class="card">$300</div>
          <div class="card">$400</div>
        </section>
        <section class="question-column">
          <div class="question-title"><h3>Life Sciences</h3></div>
          <div class="card">$100</div>
          <div class="card">$200</div>
          <div class="card">$300</div>
          <div class="card card-disabled">$400</div>
        </section>
        <section class="question-column">
          <div class="question-title"><h3>United States History</h3></div>
          <div class="card card-disabled">$100</div>
          <div class="card">$200</div>
          <div class="card">$300</div>
          <div class="card">$400</div>
        </section>
        <section class="question-column">
          <div class="question-title"><h3>United States History</h3></div>
          <div class="card">$100</div>
          <div class="card card-disabled">$200</div>
          <div class="card">$300</div>
          <div class="card">$400</div>
        </section>
      </article>
    `)

    $('body').prepend(boardGame)

    boardGame.fadeIn(2000);

    // $('body').prepend(`
    //
    // `).fadeIn(2000)
  },

}
