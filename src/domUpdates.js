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
  buildGameBoard: function(round){

    let innerBoard = $('.question-container');

    window.roundOne = (game.roundsArray[0]).flat()
    console.log('flatArray', roundOne);

    let counter = 0;

    game.roundsArray[0].forEach((arr, index, arrLength) => {
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

  showQuestion: function(thisCard){

    $('body').prepend(`
      <div class="card-question-container">
        <h2>${thisCard.question}</h2>
        <h4>${thisCard.answer}</h4>
      </div>
    `);

  }

}
