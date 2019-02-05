import $ from 'jquery';

export default {

  buildScoreBoard: function(playerArray) {
    $('.game-title').fadeOut(200, function() {
      $(this).remove();
    });
    $('.form-selection').fadeOut(200, function() {
      $(this).remove();
    });
    $('footer').append(
      `<section class="player-info-container">
        <div id="player_0" class="player-info active-player">
          <h3 id="nameOne-title">${playerArray[0].name}</h3>
          <h4 id="playerOne-Score">${playerArray[0].score}</h4>
        </div>
        <div id="player_1" class="player-info">
          <h3 id="nameTwo-title">${playerArray[1].name}</h3>
          <h4 id="playerTwo-Score">${playerArray[1].score}</h4>
        </div>
        <div id="player_2" class="player-info">
          <h3 id="nameThree-title">${playerArray[2].name}</h3>
          <h4 id="playerThree-Score">${playerArray[2].score}</h4>
        </div>
      </section>`
    ).animate({'bottom': '0px'}, 500);

    $('#startBtn').attr('data-after', 'Quit');
    $('body').prepend(`<article class="question-container"></article>`);
  },

  buildGameBoard: function(game, titleIndex) {
    let $innerBoard = $('.question-container');
    let i = game.rndInst.stage;
    let counter = 0;
    game.roundsArray[i].forEach((arr, index) => {
      $innerBoard.append(`
        <section class="question-column" id="col_${index}">
          <div class="question-title"><h3>${game.categoryArray[titleIndex].title}</h3></div>
        </section>`
      );
      titleIndex++;
      arr.forEach((subArr) => {
        $(`#col_${index}`).append(`<div class="card" id="${counter}">$${subArr.pointValue}</div>`);
        counter++
      });
    });
  },

  showQuestion: function(card) {
    $('body').prepend(`
      <section class="answer-container">
        <div class="answer-question">
          <h2>${card.question}</h2>
          <section class="select-answer">
            <button class="answerBtn">test</button>
            <button class="answerBtn">what</button>
            <button class="answerBtn">${card.answer}</button>
            <button class="answerBtn">boss</button>
          </section>
        </div>
      </section>
    `);
  },

  showDailyDbl: function(card) {
    $('body').prepend(`
      <section class="daily-double-title">
        <h4>Daily Double!!</h4>
        <p>Enter Your Wager Amount</p>
        <input class="wager-input" type="number" min="5" max="1000">
        <button class="submit-wager">Submit Wager > </button>
      </section>
    `);
    this.showQuestion(card);
  },

  correctGuess: function(game) {
    console.log('game ', game);
    $('.answer-container').prepend(`
      <section class="show-result-container">
        <div class="result"><i class="fas fa-check"></i></div>
      </section>
    `);
    this.removeQuestions(game);
    game.updatePlayerScore(game, game.rndInst.pointValue);
  },

  wrongGuess: function(game) {
    console.log('game ', game);
    $('.answer-container').prepend(`
      <section class="show-result-container">
        <div class="result"><i class="fas fa-times"></i></div>
      </section>
    `);
    this.removeQuestions(game);
    game.updatePlayerScore(game, -game.rndInst.pointValue);
  },

  removeQuestions: function() {
    $('.answer-container').fadeOut(1, function() {
      $(this).remove();
    });
  },

  disableCard: function(event) {
    $(event.target).addClass('card-disabled')
  },

  changePlayerScore: function(game) {
    let $currentPlayer;
    switch (game.activePlayer) {
    case 0:
      $currentPlayer = '#playerOne-Score';
      break;
    case 1:
      $currentPlayer = '#playerTwo-Score';
      break;
    case 2:
      $currentPlayer = '#playerThree-Score';
      break;
    default:
    }
    $($currentPlayer).text(game.playerArray[game.activePlayer].score);
    game.playerArray[game.activePlayer].changePlayer(game, game.activePlayer);
  },

  addPlayerPosition: function(game) {
    $(`#player_${game.activePlayer}`).addClass('active-player');
  },

  removePlayerPosition: function(game) {
    $(`#player_${game.activePlayer}`).removeClass('active-player');
  },

  clearBoard: function(game) {
    $('.question-container section').fadeOut(500, function() {
      $(this).remove();
    });
    setTimeout(function() {
      game.buildArray(game);
    }, 2000);
  }

}
