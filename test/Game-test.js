import chai from 'chai';
import DomUpdates from '../src/domUpdates.js';
import Player from '../src/Player.js';
import Game from '../src/Game.js';
import spies from 'chai-spies';
import Rounds from '../src/Round.js';
import Data from '../src/data.js';
import Category from '../src/Category.js';
import Clues from '../src/Clue.js';
import DailyDouble from '../src/dailyDouble.js';

chai.use(spies);
const expect = chai.expect;

import $ from 'jquery';



describe('Game', function () {
  let game;
  let rndInst;
  let playerInst1;
  let playerInst2;
  let playerInst3;
  let dailyDouble;

  beforeEach( function () {
    game = new Game();
    rndInst = new Rounds();
    playerInst1 = new Player();
    playerInst2 = new Player();
    playerInst3 = new Player();
    dailyDouble = new DailyDouble();
  });

  chai.spy.on(DomUpdates, ['buildScoreBoard', 'buildGameBoard', 'changePlayerScore', 'showFinalWager'], () => true);

  it('Should return true', () => {
    expect(true).to.equal(true);
  });

  it('Game Should be an object', () => {
    expect(game).to.be.an('object');
  })

  it('should be an instance of Game', () => {
    expect(game).to.be.an.instanceof(Game);
  })

  it('should have correct default properties', () => {
    expect(game.activePlayer).to.equal(0);
    expect(game.playerArray).to.deep.equal([]);
    expect(game.categoryArray).to.deep.equal([])
    expect(game.allClues).to.deep.equal([])
    expect(game.roundsArray).to.deep.equal([]);
    expect(game.rndInst).to.deep.equal({"stage": 0, "currentAnswer": '', "pointValue": 0, "questionsArray": [], "cardCount": 16, "answersArray": []})
  });

  it('should have an value of three players in an array', () => {
    game.createPlayers();
    expect(game.playerArray.length).to.equal(3)
  });

  it('should have 118 clues in the allClue array', () => {
    game.createClues();
    expect(game.allClues.length).to.equal(114)
  });

  it('should have category array of 10 of all the categories', () => {
    game.createCategories();
    expect(game.categoryArray.length).to.equal(10)
  });

  it('should be able to update a player score', () => {
    game.createPlayers('Mike', 'James', 'John');
    game.updatePlayerScore(game, 100);
    expect(game.playerArray[0].score).to.equal(100)
  });

  it('should have change player score called once', () => {
    game.createPlayers('Mike', 'James', 'John');
    game.updatePlayerScore(game, 100);
    
  });

  it('should call final round wagers', () => {
    game.inputFinalRoundWagers();
    expect(DomUpdates.showFinalWager).to.have.been.called(1)
  });



});
