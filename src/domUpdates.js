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

    game.roundsArray[i].forEach((arr, index, arrLength) => {
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

  showQuestion: function(clue){
    console.log(clue);
    $('body').prepend(`
      <section class="answer-container">
        <div class="answer-question">
          <h2>${clue.question}</h2>
          <section class="select-answer">
            <button class="answerBtn">test</button>
            <button class="answerBtn">what</button>
            <button class="answerBtn">${clue.answer}</button>
            <button class="answerBtn">boss</button>
          </section>
        </div>
      </section>
    `);
  },

  correctGuess: function(){
    console.log('in correct');
  },

  wrongGuess: function(){
    console.log('in wrong');
  },


}
