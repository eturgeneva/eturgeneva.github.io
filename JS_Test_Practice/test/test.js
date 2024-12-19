const { addTwoNumbers } = require('../src/index');
const assert = require('assert');

describe('addTwoNumbers', () => {
    it('adds two numbers', () => {
    // Setup
    const num1 = 5;
    const num2 = 2;
    const expected = 7;

    // Exercise
    const result = addTwoNumbers(num1, num2);

    // Verify
    // assert.equal(result, expected)
    assert.ok(result === 8)
    })
})