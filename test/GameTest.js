import chai from 'chai';
const expect = chai.expect;

// Chai Spies to be able to use document and not fail test.
// This is because when using webpack, it doesn't know what document is?
import spies from 'chai-spies';
chai.use(spies);

// import Box from '../src/Box';
import domUpdates from '../src/domUpdates.js';
import Player from '../src/Player.js'
import Game from '../src/Game.js'

describe('Game', function () {

  it('Should return true', function() {
  var game = new Game()
    
    expect(true).to.equal(true);
  });

  it('Should have a default round of 1', function() {
    var game = new Game(1);

    expect(game.round, 1);
  });

  it('Should be able to pass arguments for other rounds', function () {
    var game = new Game(3);

    expect(game.rounds, 3);
  });

});