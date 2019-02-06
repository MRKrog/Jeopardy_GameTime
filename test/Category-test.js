
import chai from 'chai';
import Game from '../src/Game.js';
import Rounds from '../src/Round.js';
import Data from '../src/data.js'; 
import Clues from '../src/Clue.js'
const expect = chai.expect;

import spies from 'chai-spies';
chai.use(spies);

import Category from '../src/Category.js';


describe('Category', function () {

  it('Should return true', function() {
  let category = new Category();
  
  expect(true).to.equal(true);
  });

  it('should be an instance of Category', function() {
  let category = new Category();
  
  expect(category).to.be.an.instanceof(Category)
  });

  it('should have correct default properties', () => {
  let category = new Category('TV Shows',)
  
  expect(category.title).to.equal('TV Shows');
  expect(category.category).to.deep.equal();
  });
});
