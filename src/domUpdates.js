import $ from 'jquery';

export default {

  buildScoreBoard: function(playerArray) {
    $('.game-logo').remove();
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
    $('body').prepend(`
      <section class="round-title"><h2>Round ${i + 1}</h2></section>
    `)
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
        <input class="wager-input" type="number">
        <button class="submit-wager">Submit Wager</button>
      </section>
    `);
    this.showQuestion(card);
  },

  correctGuess: function(game) {
    $('.answer-container').prepend(`
      <section class="show-result-container">
        <div class="result"><i class="fas fa-check"></i></div>
      </section>
    `);
    this.removeQuestions(game);
    game.updatePlayerScore(game, game.rndInst.pointValue);
  },

  wrongGuess: function(game) {
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
    $('.round-title').remove();
    $('.question-container section').fadeOut(500, function() {
      $(this).remove();
    });
    setTimeout(function() {
      console.log('game stage', game.rndInst.stage );
      game.rndInst.stage === 2 ? game.buildRoundThree(game) : game.buildRoundTwo(game);
    }, 2000);
  },

  removeDailyBoard: function() {
    $('.daily-double-title').fadeOut(500, function() {
      $(this).remove();
    });
  },

  buildFinalRound: function(game, titleIndex) {
    this.removePlayerPosition(game);
    game.activePlayer = 0;
    this.addPlayerPosition(game);
    console.log('In Final Round', game);
    let $innerBoard = $('.question-container');
    $innerBoard.addClass('final-round-container');
    let i = game.rndInst.stage;
    console.log('rounds array ', game.roundsArray[i]);
    $('body').prepend(`
      <section class="round-title final-round">
        <h2>FINAL ROUND</h2>
        <div class="instructions">
          <p>Each Player Must Input A Wager For The Final Question</p>
          <h5>The Category Is...</h5>
        </div>
      </section>
    `);
    $innerBoard.append(`
      <section class="question-column final-round-column" id="col_0">
        <div class="question-title"><h3>${game.categoryArray[titleIndex].title}</h3></div>
      </section>
    `)
    setTimeout(function() {
      console.log('game timeout');
      game.inputFinalRoundWagers(game);
    }, 2000);
  },

  showFinalWager: function(game) {
    if(game.activePlayer > 2) {
      game.activePlayer = 0;
      $('.daily-double-title').remove();
      $('.final-round-container').remove();
      $('.instructions').remove();
      this.showFinalQuestion(game);
    } else {
      let name = game.playerArray[game.activePlayer].name;
      $('body').prepend(`
        <section class="daily-double-title final-wager">
          <h4>Player ${game.activePlayer}'s Wager</h4>
          <p>Enter Your Wager Amount</p>
          <input class="final-wager-input" type="number">
          <button class="final-submit-wager">Submit Wager</button>
        </section>
      `);
    }
  },

  checkFinalWager: function(game, usersInputWager) {
    let usersCurrentMax = game.playerArray[game.activePlayer].score;
    if(usersInputWager <= usersCurrentMax || usersInputWager === 5) {
      game.finalWagers.push(usersInputWager);
      game.activePlayer++;
      $('.daily-double-title').remove();
      this.showFinalWager(game)
    } else {
      alert(`$${usersInputWager} is not acceptable. Input a wager from $5 - $${usersCurrentMax}`);
    }
  },

  showFinalQuestion: function(game) {
    // console.log();
    let card = game.rndInst.questionsArray[2][3];
    $('body').prepend(`
      <section class="answer-container final-answer">
        <div class="answer-question">
          <h3>${game.playerArray[game.activePlayer].name}'s Turn'</h3>
          <h2>${card.question}</h2>
          <section class="select-answer">
            <button class="answerBtn">${card.answer}</button>
            <button class="answerBtn">Washington State</button>
            <button class="answerBtn">Financial Crisis</button>
            <button class="answerBtn">Boss Mode</button>
          </section>
        </div>
      </section>
    `);
    this.showQuestion(card);
    console.log('game', game);
    console.log('in show final question');
  }

}
