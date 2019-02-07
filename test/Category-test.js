import chai from 'chai';
const expect = chai.expect;

import spies from 'chai-spies';
chai.use(spies);

import Category from '../src/Category.js';

describe('Category', function () {
  let category;

  beforeEach( function () {
    category = new Category();
  });

  it('Should return true', function() {
    expect(true).to.equal(true);
  });

  it('Category should be an object', () => {
    expect(category).to.be.an('object');
  })

  it('Should be an instance of Category', function() {
    expect(category).to.be.an.instanceof(Category)
  });

  it('Should have correct default properties', () => {
    let category = new Category('TV Shows')
    expect(category.title).to.equal('TV Shows');
    expect(category.category).to.deep.equal();
  });

});
