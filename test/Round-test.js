import chai from 'chai';
const expect = chai.expect;

import spies from 'chai-spies';
chai.use(spies);

// chai.spy.on(domUpdates, ['', ''], () => true);

import Round from '../src/Round.js'

describe ('Round', function () {

it('Should return true', function() {
  let round = new Round()

  expect(true).to.equal(true);
});

it('should be an instance of round', function() {
let round = new Round();

expect(round).to.be.an.instanceof(Round)
});

it('should have correct default properties', () => {
let round = new Round()

expect(round.stage).to.equal(0)
expect(round.currentAnswer).to.equal('');
expect(round.pointValue).to.equal(0);
expect(round.questionsArray).to.deep.equal([]);
expect(round.cardCount).to.equal(4)
// expect(game.playerArray).to.deep.equal([]);
// expect(game.categoryArray).to.deep.equal([])
// expect(game.allClues).to.deep.equal([])
// expect(game.roundsArray).to.deep.equal([]);
// expect(game.rndInst).to.deep.equal({"cardCount": 4, "currentAnswer": "", "pointValue": 0, "questionsArray": [], "stage": 0 })
});
});
