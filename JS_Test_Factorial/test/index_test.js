var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('checks if the output of 5! is equal to 120', () => {
      const expectedResult = 120;
      const inputNumber = 5;
      const result = Calculate.factorial(inputNumber);
      assert.equal(result, expectedResult);
    });
    it('checks if the output of 3! is equal to 6', () => {
      const expectedResult = 6;
      const inputNumber = 3;
      const result = Calculate.factorial(inputNumber);
      assert.equal(result, expectedResult);
    });
    it('returns 1 when you pass in 0', () => {
      const expectedResult = 1;
      const inputNumber = 0;
      const result = Calculate.factorial(inputNumber);
      assert.equal(result, expectedResult);
    })

  });
});