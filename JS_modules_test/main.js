const number1 = 10;
const number2 = 5;

// Without destructuring:
const calculatorFunctions = require('./module.js');
console.log(calculatorFunctions.sumOfNumbers(number1, number2));

// Destructuring:
// const {sumOfNumbers} = require('./module.js')
// console.log(sumOfNumbers(number1, number2));