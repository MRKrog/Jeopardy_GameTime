import chai from 'chai';
import domUpdates from '../src/domUpdates.js';
import Player from '../src/Player.js';
import Game from '../src/Game.js';
import spies from 'chai-spies';
import Rounds from '../src/Round.js';
import Data from '../src/data.js'; 
import Category from '../src/Category.js'
import Clues from '../src/Clue.js'



chai.use(spies);
const expect = chai.expect;

import $ from 'jquery';
// var jsdom = require('jsdom');

// window.jQuery = $;
// window.$ = $;
chai.spy.on(domUpdates, ['buildScoreBoard', 'buildGameBoard'], () => true)
// chai.spy.on(domUpdates, ['startGame'], () => true);
// don't forget to use deep.to.equal for objects

describe('Game', function () {
  let game;
  let rndInst;
  let playerInst1;
  let playerInst2;
  let playerInst3;

  beforeEach( function () {
    game = new Game();
    rndInst = new Rounds();
    playerInst1 = new Player();
    playerInst2 = new Player();
    playerInst3 = new Player();
 
  });

  it('Should return true', function() {
    expect(true).to.equal(true);
  });

  it('should be an instance of Game', () => {
  expect(game).to.be.an.instanceof(Game)
  })

  it('should have correct default properties', () => {
  expect(game.activePlayer).to.equal(0);
  expect(game.playerArray).to.deep.equal([]);
  expect(game.categoryArray).to.deep.equal([])
  expect(game.allClues).to.deep.equal([])
  expect(game.roundsArray).to.deep.equal([]);
  expect(game.rndInst).to.deep.equal({"cardCount": 4, "currentAnswer": "", "pointValue": 0, "questionsArray": [], "stage": 0 })
  });

  // it('Should be called', function() {
  // // // game.allClues = new Clues()
  // // // game.categoryArray = new Category()
  // game.startGame()

  // // expect(domUpdates.buildboard).to.have.been.called(1)
  // });

  it('should have an value of three players in an array', () => {
    game.createPlayers();

    expect(game.playerArray.length).to.equal(3)
  });


  it('should have 118 clues in the allClue array', () => {
    game.createClues();

    expect(game.allClues.length).to.equal(114)
  });


  it('should have 118 clues in the allClue array', () => {
    game.createClues();

    expect(game.allClues.length).to.equal(114)
  });

  it('should have category array of 10', () => {
  game.createCategories();

  expect(game.categoryArray.length).to.equal(10)
  });




  // let p1;
  // let p2;
  // let p3
  //   p1 = new Player();
  //   p2 = new Player()
  //   p3 = new Player()

  // game.createPlayers(p1, p2, p3);
  // expect(game.playersArray).to.deep.equal(
  //     [{name: "MikeK", score: 0}, {name: "MikeK", score: 0}, {name: "MikeK", score: 0}]);
  // expect(game.rndInst).to.equal(new Round ()); 


  // it('instantiates our good friend Player1', function() {
  //   expect(player).to.be.an({})
  // }

  // it('Should have default properties', function() {
  //   expect(game.activePlayer).to.equal(0);
  //   // expect(game.playerArray).to.equal([]);
  // });
  // //
  // it('createPlayers function to have been called once', function() {
  //   expect(game.buildArray()).to.have.been.called(1);
  //
  // });

  // it('Should be able to pass arguments for other rounds', function () {
  //   var game = new Game(3);

  //   expect(game.rounds, 3);
  // });

});
