import chai from 'chai';
const expect = chai.expect;

import Clues from '../src/Clue.js'

describe ('Clue', function () {
  
  it.skip('Should return true', function() {
    var clue = new Clues()

    expect(true).to.equal(true);
  })

   it.skip('Should have a default question', function() {
      var clue = new Clues();

    expect(clue.question).to.equal('What MTV plays 24 hours a day');
  });

   it.skip('Should have a different question', function() {
      var clue = new Clues("In TV land, TNT doesn't stand for trinitrotoluene but for this");

    expect(clue.question).to.equal("In TV land, TNT doesn't stand for trinitrotoluene but for this");
  });

   it.skip('Should have a default answer', function() {
      var clue = new Clues('Never give up', 'music videos');

    expect(clue.answer).to.equal('music videos');
  });

   it.skip('Should have a different answer', function() {
      var clue = new Clues('Never give up', 'music videos');

    expect(clue.answer).to.equal('the Disney Channel');
  });

   it.skip('should have a default categoryId', function() {
      var clue = new Clues('Never give up', 'music videos');

    expect(clue.categoryId).to.equal(10);
  });

    it('should have a different categoryId', function() {
      var clue = new Clues('Never give up', 'music videos');

    expect(clue.categoryId).to.equal(10);
  });

   it('should have a default pointValue', function() {
      var clue = new Clues();

    expect(clue.pointValue).to.equal(100);
  });

   it('should have a default dailyDble', function() {
      var clue = new Clues('Never give up', 'music videos', 11, 400);

    expect(clue.dailyDble).to.equal(4000);
  });


});