const assert = require('assert');
const Rooster = require('../index.js');

describe('Rooster', () => {
  describe('.announceDawn', () => {
    it('returns a rooster call', () => {
      // Define expected output
      const expected = 'cock-a-doodle-doo!';

      // Call Rooster.announceDawn and store result in variable
      const result = Rooster.announceDawn();
      // Use an assert method to compare actual and expected result
      assert.strictEqual(result, expected);
      
    })
  });
  describe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {
      const expected = '5';
      const result = Rooster.timeAtDawn(5);
      assert.strictEqual(result, expected);
    });
    it('throws an error if passed a number less than 0', () => {
      // assert.throws(() => {
        try {
          Rooster.timeAtDawn(-1);
        } catch (e) {
          return;
        }
        assert.fail('no exception was thrown')
      // })
    });
    it('throws an error if passed a number greater than 23', () => {
      assert.throws(() => {
        Rooster.timeAtDawn(25);
      })
    })
  })
})