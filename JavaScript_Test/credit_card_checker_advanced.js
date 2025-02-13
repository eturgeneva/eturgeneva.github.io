// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

// Add your functions below:
function validateCred (array) {
  let reversedNumbers = [];
  let doubledNumbers = [];
  let singleNumbers = [];
  let doubledResults = [];
  for (let i = array.length - 1; i >=0; i-- ) {
    reversedNumbers.push(array[i]);
  }
    // console.log(reversedNumbers);
  for (let j = 0; j < reversedNumbers.length; j++) {
      if (j % 2 !== 0) {
        doubledNumbers.push(reversedNumbers[j]);
      } else {
        singleNumbers.push(reversedNumbers[j]);
      }
    } 
    // console.log(singleNumbers);
    // console.log(doubledNumbers);
    doubledNumbers.forEach(element => element * 2 > 9 ? doubledResults.push(element * 2 - 9) : doubledResults.push(element * 2))
    // console.log(doubledResults);

    const sumOfNumbers = singleNumbers.reduce((acc, currVal) => acc + currVal) + doubledResults.reduce((acc, currVal) => acc + currVal);
    // console.log(sumOfNumbers);
    return sumOfNumbers % 10 === 0
}
// console.log(valid1);
console.log(validateCred(valid1));
console.log(validateCred(invalid4));

// The role of findInvalidCards() is to check through the nested array for which numbers are invalid, and return another nested array of invalid cards.
// console.log(batch[2])
function findInvalidCards (param) {
  return param.filter(element => !validateCred(element));
}
const invalidCards = findInvalidCards(batch);
console.log(invalidCards);

// Create a function, idInvalidCardCompanies() that has one parameter for a nested array of invalid numbers and returns an array of companies.
function idInvalidCardCompanies (nestedArray) {
  let invalidCardCompanies = [];
  for (let i = 0; i < nestedArray.length; i++) {
    switch (nestedArray[i][0]) {
      case 3:
        if (!invalidCardCompanies.includes('Amex')) {
          invalidCardCompanies.push('Amex');
        }
        break;
      case 4:
        if (!invalidCardCompanies.includes('Visa')) {
          invalidCardCompanies.push('Visa');
        }
        break;
      case 5:
        if (!invalidCardCompanies.includes('MasterCard')) {
          invalidCardCompanies.push('MasterCard');
        }
        break;
      case 6:
        if (!invalidCardCompanies.includes('Discover')) {
          invalidCardCompanies.push('Discover');
        }
        break;
      default:
        console.log('Company not found');
    }
    console.log(nestedArray[i][0])
  }
  console.log(invalidCardCompanies)
}
idInvalidCardCompanies(invalidCards);

function convertCardNumber (string) {
  let newCardNumber = string.split('');
  let map = newCardNumber.map(element => parseInt(element));
  return map;
}
const cardNumberArray = convertCardNumber('4269559271634674948');
console.log(cardNumberArray);

console.log(validateCred(cardNumberArray));

function convertInvalidToValid (array) {
  // const reversedNumber = array.reverse()
  // console.log(reversedNumber)
  const alternateNumbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
  // console.log(array[array.length - 1])
  for (let i = 0; i < alternateNumbers.length; i++) {
    array.pop();
    array.push(alternateNumbers[i]);
    
    if (validateCred(array)) {
     return array;
    }
  }
  console.log('not found')
}

console.log(invalid2);
console.log(validateCred(invalid2));
convertInvalidToValid (invalid2);
console.log(invalid2);
console.log(validateCred(invalid2));








