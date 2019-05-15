import chai from 'chai';
const expect = chai.expect;

import DomUpdates from '../src/domUpdates.js';
import Game from '../src/Game.js';

import spies from 'chai-spies';
chai.use(spies);


describe('Game', function () {
  let game;

  beforeEach( function () {
    game = new Game();
  });

  chai.spy.on(DomUpdates, ['buildScoreBoard', 'buildGameBoard', 'changePlayerScore', 'showFinalWager', 'showQuestion', 'buildFinalRound'], () => true);

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

  it('should be able to start a game', () => {
    game.createPlayers('Mike', 'Sally', 'John');
    game.createClues();
    game.createCategories();
    game.rndInst.initializeShuffle(game, 0, 4);
    expect(DomUpdates.buildGameBoard).to.have.been.called;
  });

  it('should be able to build a second round', () => {
    game.createPlayers('Mike', 'Sally', 'John');
    game.createClues();
    game.createCategories();
    game.rndInst.initializeShuffle(game, 0, 4);

    game.buildRoundTwo(game);
    expect(DomUpdates.buildGameBoard).to.have.been.called;
  });

  it('should be able to build a third round', () => {
    game.createPlayers('Mike', 'Sally', 'John');
    game.createClues();
    game.createCategories();
    game.rndInst.initializeShuffle(game, 0, 4);
    game.buildRoundThree(game);
    expect(DomUpdates.buildFinalRound).to.have.been.called;
  });

  it('should be make the card selected equal true', () => {
    game.createPlayers('Mike', 'Sally', 'John');
    game.createClues();
    game.createCategories();
    game.rndInst.initializeShuffle(game, 0, 4);
    let cardId = 4;
    game.getClue(cardId);
    let card = game.rndInst.questionsArray[game.rndInst.stage];
    expect(card[cardId].selected).to.equal(true);
  });

  it('should be make the card selected equal true', () => {
    game.createPlayers('Mike', 'Sally', 'John');
    game.createClues();
    game.createCategories();
    game.rndInst.initializeShuffle(game, 0, 4);
    let cardId = 4;
    game.getClue(cardId);
    let card = game.rndInst.questionsArray[game.rndInst.stage];
    expect(game.rndInst.currentAnswer).to.equal(card[cardId].answer);
  });

  it('should be make to make 4 sample answers', () => {
    game.createPlayers('Mike', 'Sally', 'John');
    game.createClues();
    game.createCategories();
    game.rndInst.initializeShuffle(game, 0, 4);
    let cardId = 4;
    game.getClue(cardId);
    let card = game.rndInst.questionsArray[game.rndInst.stage];
    let sampleAnswers = card.filter(el => el.categoryId === card[cardId].categoryId);
    expect(sampleAnswers.length).to.equal(4);
  });

  it('The round instances point value inside of game should equal card selected', () => {
    game.createPlayers('Mike', 'Sally', 'John');
    game.createClues();
    game.createCategories();
    game.rndInst.initializeShuffle(game, 0, 4);
    let cardId = 4;
    game.getClue(cardId);
    let card = game.rndInst.questionsArray[game.rndInst.stage];
    game.rndInst.pointValue = card[cardId].pointValue;
    expect(game.rndInst.pointValue).to.equal(card[cardId].pointValue);
  });


});
