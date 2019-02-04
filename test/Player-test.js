
import chai from 'chai';
const expect = chai.expect;

// Chai Spies to be able to use document and not fail test.
// This is because when using webpack, it doesn't know what document is?
import spies from 'chai-spies';
chai.use(spies);

// import domUpdates from '../src/domUpdates.js';
import Player from '../src/Player.js'

// chai.spy.on(domUpdates, ['', ''], () => true);

// chai.spy.on(domUpdates, ['getUserInput'], () => 'The answer is Gabe');

describe('Player', function () {

  it('Should return true', function() {
    var player = new Player();

    expect(true).to.equal(true);
  });

  it('Should have a default name and score', function() {
    var player = new Player();

    expect(player.name).to.equal('MikeK');
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
