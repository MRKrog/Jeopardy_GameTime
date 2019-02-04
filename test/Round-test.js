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

  it('Should be able to have a new round', function () {
    let round = new Round(3)

    expect(round.stage).to.equal(3)
  })
});
