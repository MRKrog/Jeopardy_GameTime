import chai from 'chai';
const expect = chai.expect;




import Round from '../src/Round.js'

describe ('Round', function () {

  it('Should return true', function() {
    let round = new Round()

    expect(true).to.equal(true);
  });

  // it('Should have a default round', function () {
  //   let round = new Round()

  //   expect(0).to.equal(0);
  // });

  it('Should be able to have a new round', function () {
    let round = new Round(3)

    expect(round.round).to.equal(3)
  })




    //cant checkout to see if buildRounds has been invoked on Round Class
  // it('Shouldl;asdfj', function() { 
  //   let round = new Round()
  //   round.buildRounds()

  //   expect([1, 2]).to.be.an('array')
  // })

});