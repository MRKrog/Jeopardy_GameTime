
import chai from 'chai';
const expect = chai.expect;
// var jsdom = require('mocha-jsdom')
//  jsdom()
// Chai Spies to be able to use document and not fail test.
// This is because when using webpack, it doesn't know what document is?
import spies from 'chai-spies';
chai.use(spies);


import $ from 'jquery';
window.jQuery = $;
window.$ = $;

// -r jsdom-global/register

// import Box from '../src/Box';
import domUpdates from '../src/domUpdates.js';
import Player from '../src/Player.js'
import Game from '../src/Game.js'

describe('Game', function () {
  var game = new Game

  it('Should return true', function() {

    expect(true).to.equal(true);
  });

// doesnt have properties below

  it('startGame function to have been called', function() {
    expect(game.startGame()).to.have.been.called(1);

  });

  // it('Should be able to pass arguments for other rounds', function () {
  //   var game = new Game(3);

  //   expect(game.rounds, 3);
  // });

});
