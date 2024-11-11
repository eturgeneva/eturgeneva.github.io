// Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order.
// Using .reverse() is not allowed:

function reverseArray (array) {
    let newArray = [];
    for (let i = array.length - 1; i >= 0; i-- ) {
        console.log(array[i]);
        newArray.push(array[i]);
    }
        return newArray;
  }

  // When you're ready to test your code, uncomment the below and run:

  const sentence = ['sense.','make', 'all', 'will', 'This'];
  
  console.log(reverseArray(sentence)) 
  // Should print ['This', 'will', 'all', 'make', 'sense.'];

  // Write a function, greetAliens(), that takes in an array of strings and uses a for loop to print a greeting with each string in the array.
  // Using .forEach() is not allowed

  function greetAliens(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(`Oh powerful ${array[i]}, we humans offer our unconditional surrender!`);
    }
  }
  // When you're ready to test your code, uncomment the below and run:

  const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
  
  greetAliens(aliens);

  // Write a function, convertToBaby(), that takes in an array as an argument and, using a loop, returns a new array with each string in the array prepended with 'baby '.
  // Using .map() is not allowed:
  function convertToBaby (array) {
    let babyArray = []
    for (let i = 0; i < array.length; i++) {
      babyArray.push(`baby ${array[i]}`)
    }
    return babyArray;
  }
  // When you're ready to test your code, uncomment the below and run:
  
  const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human', 'cat'];
  
  console.log(convertToBaby(animals)) 

// We wrote a function, smallestPowerOfTwo(), which should take in an array and return the lowest power of 2 that is greater than or equal to each number in that array.
// A power of two is any value 2n where n is a non-negative integer (including 0). The list of powers of 2 for non-negative integers starts with [1, 2, 4, 8, 16, 32, 64,...] where 20=1, 21=2, 22=4, and so on.

const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
      let results = [];
      // The 'outer' for loop - loops through each element in the array
      for (let i = 0; i < arr.length; i++) {
            number = arr[i];

            // The 'inner' while loop - searches for smallest power of 2 greater than the given number
            j = 1;
            while (j < number) {
                  j = j * 2;
            }
            results.push(j);
      }
      return results
}

console.log(smallestPowerOfTwo(numbers)) 
// Should print the returned array [ 8, 4, 16, 32 ]

const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Write your code here:
function declineEverything(veggies) {
  veggies.forEach(politelyDecline);
}

function acceptEverything(veggies) {
  veggies.forEach(element => console.log(`Ok, I guess I will eat some ${element}.`))
}

acceptEverything(veggies);

// 
// const numbers = [2, 7, 9, 171, 52, 33, 14]

// const toSquare = num => num * num

// function squareNums(array) {
//   return array.map(toSquare);
// }

// Write a function shoutGreetings() that takes in an array of strings and returns a new array
// This new array should contain all the strings from the argument array but with capitalized letters and an exclamation point appended to the end: 'heya' will become 'HEYA!'

function shoutGreetings (array) {
  return array.map(element => element.toUpperCase() + '!')
}

// Feel free to uncomment out the code below to test your function!

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings))
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]


// Sorting numbers:
function sortYears (array) {
  // const sortedArray = array.sort();
  // return sortedArray.reverse();
  return array.sort((num1, num2) => num1 - num2);
  // return array.sort();
}

// Feel free to uncomment the below code to test your function:
// const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

// my test:
const years = [77, 1999, 88, 2500, 0, 150]

console.log(sortYears(years))
// Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]

let s = "It was a dark and stormy night.";
let words = s.split(/\W+/).filter(word => word.length > 2);
words.sort((a, b) => a.length - b.length);
console.log(words);

function justCoolStuff (arr1, arr2) {
  let resultsArray = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        resultsArray.push(arr1[i]);
      }
    }
  }
  return resultsArray;
}

// Feel free to uncomment the code below to test your function

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff))
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]

// function justCoolStuff (arr1, arr2) {
//   let resultsArray = [];
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i])) {
//       resultsArray.push(arr1[i]);
//     }
//   }
//   return resultsArray;
// }

function justCoolStuff (arr1, arr2) {
  return arr1.filter(element => arr2.includes(element));
}
// Feel free to uncomment the code below to test your function

// const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

// const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff))
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]

function isTheDinnerVegan (array) {
  return array.every(element => element.source === 'plant');
}

// Feel free to comment out the code below to test your function

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinner))
// Should print false

const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

// Write your code here:

function sortSpeciesByTeeth(array) {
  return array.sort((num1, num2) => num1.numTeeth - num2.numTeeth);
}
// Feel free to comment out the code below when you're ready to test your function!

console.log(sortSpeciesByTeeth(speciesArray))

// Should print:
// [ { speciesName: 'human', numTeeth: 32 },
//   { speciesName: 'dog', numTeeth: 42 },
//   { speciesName: 'shark', numTeeth: 50 },
//   { speciesName: 'alligator', numTeeth: 80 } ]

function findMyKeys (array) {
  return array.findIndex(element => element === 'keys');
}

// Feel free to comment out the code below to test your function

const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

console.log(findMyKeys(randomStuff))
// Should print 4

// Write a function factorial() that takes a number as an argument and returns the factorial of the number

function factorial(num) {
  let result = num;
  for (let i = num - 1; i > 1; i--) {
    result = result * i;
  }
  return result;
}

console.log(factorial(6));

// Write function below
function subLength (string, char) {
  let repeatingChars = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
    repeatingChars.push(i);
    }
  }
  console.log(repeatingChars);
  if (repeatingChars.length === 2) {
    return repeatingChars[1] - repeatingChars[0] + 1;
  } else {
    return 0;
  }
}

console.log(subLength('Saturday', 'a')); // returns 6
subLength('summer', 'm'); // returns 2
console.log(subLength('digitize', 'i')); // returns 0
subLength('cheesecake', 'k'); // returns 0