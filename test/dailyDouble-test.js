import chai from 'chai';
const expect = chai.expect;

import spies from 'chai-spies';
chai.use(spies);

import DailyDouble from '../src/dailyDouble.js';

describe('Daily Double', function () {
  let dailyDouble;

  beforeEach( function () {
    dailyDouble = new DailyDouble();
  });

  it('Should return true', function() {
    expect(true).to.equal(true);
  });

  it('Daily Double should be an object', () => {
    expect(dailyDouble).to.be.an('object');
  })

  it('Should be an instance of Daily Double', function() {
    expect(dailyDouble).to.be.an.instanceof(DailyDouble)
  });

  it('Should have correct default properties', () => {
    let dailyDouble = new DailyDouble('Never give up', 400, 'Test Answer', 3);
    expect(dailyDouble.question).to.equal('Never give up');
    expect(dailyDouble.pointValue).to.equal(400);
    expect(dailyDouble.answer).to.equal('Test Answer');
    expect(dailyDouble.categoryId).to.equal(3);
  });

});
