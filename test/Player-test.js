import chai from 'chai';
const expect = chai.expect;

import spies from 'chai-spies';
chai.use(spies);

import Player from '../src/Player.js'

describe('Player', function () {
  let player;

  beforeEach( function () {
    player = new Player();
  });

  it('Should return true', function() {
    expect(true).to.equal(true);
  });

  it('Player should be an object', () => {
    expect(player).to.be.an('object');
  })

  it('Should have a default name and score', function() {
    expect(player.name).to.equal('Player');
    expect(player.score).to.equal(0);
  });

  it('Should be able to have a different name', function() {
    var player = new Player('PamPam');
    expect(player.name, 'PamPam');
  });

  it('Should have a new score', function() {
    var player = new Player('MikeKS', 1906);
    expect(player.score, 1906);
  });

});




// describe('Box', function(){
//   // Allows here beforeEach() with var defined before to use it DRY
//   var box;
//   beforeEach(function() {
//     box = new Box();
//   });

//   it('Make sure tests are running correctly', function(){
//     expect(true).to.equal(true);
//   });
//   it('should have a default height and width', function(){
//     // var box = new Box();
//     expect(box.height).to.equal(100);
//     expect(box.width).to.equal(100);
//   });
//   it('should have take a height and a width as arguments', function(){
//     var box = new Box(50, 40);
//     expect(box.height).to.equal(50);
//     expect(box.width).to.equal(40);
//   });
//   it('should calculate its area', function(){
//     var box = new Box(30, 30);
//     expect(box.area()).to.equal(900);
//   });

//   it('should be able to increment the width by a provided value', function(){
//     // var box = new Box();
//     expect(box.increaseWidth(10)).to.equal(110);
//   });
//   it('should be able to increment the height of your box by a provided value', function(){
//     // var box = new Box();

//     expect(box.increaseHeight(10)).to.equal(110);
//     expect(domUpdates.displayHeight).to.have.been.called(1);
//     expect(domUpdates.displayHeight).to.have.been.called.with(110);
//   });
//   it('Refactor to allow for a single method to do both jobs', function(){
//     var box = new Box(15, 50);
//     expect(box.increment(10, 'height')).to.equal(25);
//     expect(box.increment(10, 'width')).to.equal(60);
//   });

// });
