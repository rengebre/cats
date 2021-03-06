// asyncBreedsTest.js
const assert = require('chai').assert;
const breedDetailsFromFile = require('../asyncBreeds');

describe('#breedDetailsFromFile', () => {
  it('provides, via callback, breed details for the Bombay breed', (done) => {
    // we try to get the return value
    breedDetailsFromFile('Bombay', (bombay) => {
      const expectedDesc = "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder.";

      assert.strictEqual(bombay, expectedDesc);
      done();
    })
  })

  it('provides, via callback, breed details for the Bombay breed', (done) => {
    // we try to get the return value
    breedDetailsFromFile('', (bombay) => {
      assert.strictEqual(bombay, undefined);
      done();
    })
  })
});