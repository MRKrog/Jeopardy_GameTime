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

  showQuestion: function(game, card) {
    $('body').prepend(`
      <section class="answer-container">
        <div class="answer-question">
          <h2>${card.question}</h2>
          <section class="select-answer">
            <button class="answerBtn">${game.rndInst.answersArray[0].answer}</button>
            <button class="answerBtn">${game.rndInst.answersArray[1].answer}</button>
            <button class="answerBtn">${game.rndInst.answersArray[2].answer}</button>
            <button class="answerBtn">${game.rndInst.answersArray[3].answer}</button>
          </section>
        </div>
      </section>
    `);
  },

  showDailyDbl: function(game, card) {
    $('body').prepend(`
      <section class="daily-double-title">
        <h4>Daily Double!!</h4>
        <p>Enter Your Wager Amount</p>
        <input class="wager-input" type="number">
        <button class="submit-wager">Submit Wager</button>
        <span class="wager-alert"><b>Minimum of 5 points</b> to a maximum of your total score (if positive) or the <b>highest points left on the board</b></span>
      </section>
    `);
    this.showQuestion(game, card);
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
    $('.answer-container').fadeOut(1000, function() {
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
    let $innerBoard = $('.question-container');
    $innerBoard.addClass('final-round-container');

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
      game.inputFinalRoundWagers(game);
    }, 2000);
  },

  showFinalWager: function(game) {
    if (game.activePlayer > 2) {
      game.activePlayer = 0;
      $('.daily-double-title').remove();
      $('.final-round-container').remove();
      $('.instructions').remove();
      this.showFinalQuestion(game);
    } else {
      $('body').prepend(`
        <section class="daily-double-title final-wager">
          <h4>${game.playerArray[game.activePlayer].name}'s Wager</h4>
          <p>Enter Your Wager Amount</p>
          <input class="final-wager-input" type="number">
          <button class="final-submit-wager">Submit Wager</button>
          <span class="wager-alert"><b>Minimum of 5 points</b> to a maximum of your total score. (If you're below 0 you can only wager 5)</span>
        </section>
      `);
    }
  },

  checkFinalWager: function(game, usersInputWager) {
    let usersCurrentMax = game.playerArray[game.activePlayer].score;
    if (usersInputWager <= usersCurrentMax || usersInputWager === 5) {
      game.finalWagers.push(usersInputWager);
      game.activePlayer++;
      $('.daily-double-title').remove();
      this.showFinalWager(game)
    } else {
      alert(`$${usersInputWager} is not acceptable. Input a wager from 5 to ${usersCurrentMax}`);
    }
  },

  showFinalQuestion: function(game) {
    let card = game.rndInst.questionsArray[2][3];
    $('body').prepend(`
      <section class="answer-container final-answer">
        <div class="answer-question">
          <h3>${game.playerArray[game.activePlayer].name}'s Turn</h3>
          <h2>${card.question}</h2>
          <section class="select-answer">
            <button class="finalAnswerBtn">${card.answer}</button>
            <button class="finalAnswerBtn">Washington State</button>
            <button class="finalAnswerBtn">Financial Crisis</button>
            <button class="finalAnswerBtn">Boss Mode</button>
          </section>
        </div>
      </section>
    `);
    game.rndInst.currentAnswer = card.answer;
    game.rndInst.pointValue = game.finalWagers[game.activePlayer];
  },

  endGame: function(game) {
    $('.answer-container').remove();
    let winner = game.playerArray.sort((a, b) => {
      return a.score - b.score;
    })
    $('body').append(`
      <section class="display-winner">
        <h2><span>1st Place :</span> ${winner[2].name} is The Winner!! <span class="bounce"><i class="fas fa-thumbs-up"></i></span></h2>
        <h2><span>2nd Place :</span> ${winner[1].name} <i>(Solid Job)</i></h2>
        <h2><span>3nd Place :</span> ${winner[0].name}... <i>(Next Time)</i></h2>
      </section>
    `)
  }

}
