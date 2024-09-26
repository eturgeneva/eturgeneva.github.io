console.log = function() {};

const fs = require('fs');
const code = fs.readFileSync('style.css', 'utf8');
const assert = require('chai').assert;


  // step 1: CSS regex 
let CSS_RegEx = /\.question-link:active\s*{[^}]*color\s*:\s*#DBE9EE\s*\s*[^}]*}/i // put your css selectors here
let found = CSS_RegEx.test(code);


describe('', function () {
  it('', function () {
    assert.strictEqual(found, true, 'Did you set the `color` property to `#DBE9EE` for `.question-link:active`?')
  });
});