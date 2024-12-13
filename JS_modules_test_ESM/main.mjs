const number1 = 10;
const number2 = 5;

// Destructuring:
import { sumOfNumbers } from "./module.mjs";
console.log(sumOfNumbers(number1, number2));

// Without destructuring:
// import * as calculatorFunctions from "./module.mjs";
// console.log(calculatorFunctions.sumOfNumbers(number1, number2));