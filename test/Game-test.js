import chai from 'chai';
const expect = chai.expect;

import DomUpdates from '../src/domUpdates.js';
import Game from '../src/Game.js';

import spies from 'chai-spies';
chai.use(spies);

// import $ from 'jquery';

describe('Game', function () {
  let game;

  beforeEach( function () {
    game = new Game();
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
    expect(game.playerArray[0].score).to.equal(100);
  });

  it('should have change player score called once', () => {
    game.createPlayers('Mike', 'James', 'John');
    game.updatePlayerScore(game, 100);
    expect(DomUpdates.changePlayerScore).to.have.been.called(2);
  });

  it('should call final round wagers', () => {
    game.inputFinalRoundWagers();
    expect(DomUpdates.showFinalWager).to.have.been.called(1);
  });

});
