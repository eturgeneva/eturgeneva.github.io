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