import chai from 'chai';
const expect = chai.expect;

import spies from 'chai-spies';
chai.use(spies);

import Round from '../src/Round.js'

describe ('Round', function () {
  let round;

  beforeEach( function () {
    round = new Round();
  });

  it('Should return true', function() {
    expect(true).to.equal(true);
  });

  it('Round Should be an object', () => {
    expect(round).to.be.an('object');
  })

  it('should be an instance of round', function() {
    expect(round).to.be.an.instanceof(Round)
  });

  it('should have correct default properties', () => {
    expect(round.stage).to.equal(0);
    expect(round.currentAnswer).to.equal('');
    expect(round.pointValue).to.equal(0);
    expect(round.questionsArray).to.deep.equal([]);
    expect(round.cardCount).to.equal(16);
    expect(round.answersArray).to.deep.equal([]);
  });

});
