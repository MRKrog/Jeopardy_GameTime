import chai from 'chai';
import domUpdates from '../src/domUpdates.js';
import Player from '../src/Player.js'
import Game from '../src/Game.js'
import spies from 'chai-spies';

chai.use(spies);
const expect = chai.expect;

import $ from 'jquery';
// var jsdom = require('jsdom');

// window.jQuery = $;
// window.$ = $;

// chai.spy.on(domUpdates, ['startGame'], () => true);
// don't forget to use deep.to.equal for objects

describe('Game', function () {
  var game = new Game();

  it('Should return true', function() {
    expect(true).to.equal(true);
  });

  // it('Should have default properties', function() {
  //   expect(game.activePlayer).to.equal(0);
  //   // expect(game.playerArray).to.equal([]);
  // });
  //
  // it('createPlayers function to have been called once', function() {
  //   expect(game.buildArray()).to.have.been.called(1);
  //
  // });

  // it('Should be able to pass arguments for other rounds', function () {
  //   var game = new Game(3);

  //   expect(game.rounds, 3);
  // });

});
