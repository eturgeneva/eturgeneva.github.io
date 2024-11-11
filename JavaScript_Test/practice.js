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
const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num

// Write your code here:
function squareNums(array) {
  return array.map(toSquare);
}

// Write a function shoutGreetings() that takes in an array of strings and returns a new array
// This new array should contain all the strings from the argument array but with capitalized letters and an exclamation point appended to the end: 'heya' will become 'HEYA!'

function shoutGreetings (array) {
  return array.map(element => element.toUpperCase() + '!')
}

// Feel free to uncomment out the code below to test your function!

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings))
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]