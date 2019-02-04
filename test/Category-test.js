import chai from 'chai';
const expect = chai.expect;

import spies from 'chai-spies';
chai.use(spies);

import Category from '../src/Category.js';


describe('Category', function () {

  it('Should return true', function() {
    var category = new Category();

    expect(true).to.equal(true);
  });


});
