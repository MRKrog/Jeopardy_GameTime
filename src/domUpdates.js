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

  buildScoreBoard: function(playerArray){
    $('.game-title').fadeOut(200, function(){ $(this).remove();});
    $('.form-selection').fadeOut(200, function(){$(this).remove();});

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


    $('#startBtn').attr('data-after','Quit');
    $('body').prepend(`<article class="question-container"></article>`);
  },

  //create board
  buildGameBoard: function(){
    let innerBoard = $('.question-container');
    let i = round.stage;
    let thisRound = round.questionsArray[i]

    let counter = 0;

    game.roundsArray[i].forEach((arr, index) => {
      innerBoard.append(`
        <section class="question-column" id="col_${index}">
          <div class="question-title"><h3>${game.categoryArray[index].title}</h3></div>
        </section>`
      );
      arr.forEach((subArr, subIndex) => {
        $(`#col_${index}`).append(`<div class="card" id="${counter}">$${subArr.pointValue}</div>`);
        counter++
      });
    });
  },

  showQuestion: function(card){
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

  correctGuess: function(){
    $('.answer-container').prepend(`
      <section class="show-result-container">
        <div class="result"><i class="fas fa-check"></i></div>
      </section>
    `);
    this.removeQuestions();
    game.updatePlayerScore(round.pointValue);
  },

  wrongGuess: function(){
    $('.answer-container').prepend(`
      <section class="show-result-container">
        <div class="result"><i class="fas fa-times"></i></div>
      </section>
    `);
    this.removeQuestions();
    console.log
    game.updatePlayerScore(-round.pointValue);
  },

  removeQuestions: function(){
    $('.answer-container').fadeOut(1, function(){
      $(this).remove();
    });
  },

  disableCard: function(event){
    $(event.target).addClass('card-disabled')
  },

  changePlayerScore: function(){
    let currentPlayer;
    switch(game.activePlayer) {
      case 0:
        currentPlayer = '#playerOne-Score';
        break;
      case 1:
        currentPlayer = '#playerTwo-Score';
        break;
      case 2:
        currentPlayer = '#playerThree-Score';
        break;
      default:
        console.log('No player Selected');
    }
    $(currentPlayer).text(game.playerArray[game.activePlayer].score);
    game.playerArray[game.activePlayer].changePlayer(game.activePlayer);
  }, 


}
