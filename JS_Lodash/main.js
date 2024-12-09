const _ = {

    clamp (number, lower, upper) {
      let lowerClampedValue = Math.max(number, lower);
      let clampedValue = Math.min(lowerClampedValue, upper);
      return clampedValue;
    },

    // clamp (number, lower, upper) {
    //     let lowerClampedValue = Math.max(number, upper); // returns 7
    //     let clampedValue = Math.min(lowerClampedValue, lower); // returns 2
    //     return clampedValue;
    //   }
  
    inRange (number, start, end) {
        if (end === undefined) {
          end = start;
          start = 0;
        }
    
        if (start > end) {
          let newStart = end;
          end = start;
          start = newStart;
        }

        let isInRange = start <= number && number < end;
        return isInRange;
    
        // if (number < start || number >= end) {
        //   return false;
        // } else {
        //   return true;
        // }

    },

    words (string) {
        // return string.split(' ');
        return string.split(/[ .,!]/).filter(Boolean);
    },

    pad (string, length) {
        if (length <= string.length) {
            return string;
          }
          let startPaddingLength = Math.floor((length - string.length) / 2);
          let endPaddingLength = length - string.length - startPaddingLength;
          let paddedString = `${' '.repeat(startPaddingLength)}${string}${' '.repeat(endPaddingLength)}`;
          return paddedString;
    },

    has (object, key) {
        let hasValue = object[key] !== undefined;
        return hasValue;

        // let hasValue = object[key];
        // if (hasValue !== undefined) {
        //     return true;
        // } else {
        //     return false;
        // }

        // return hasValue !== undefined;

    },

    invert (object) {
        let invertedObject = {};
        for (let key in object) {
            let originalValue = object[key];
            // console.log(originalValue);
            invertedObject[originalValue] = key;
            // console.log(invertedObject);
        }
        return invertedObject;

    },

    findKey (object, predicate) {
        for (let key in object) {
            if (predicate(object[key])) {
              return key;
            }
          }
        return undefined;
    },

    drop (array, n) {
        if (n === undefined) {
          n = 1;
        }
        let droppedArray = array.slice(n, array.length)
        return droppedArray;
    },

    dropWhile (array, predicate) {
        let invertedPredicate = function (element, index) {
            return !predicate(element, index, array);
          };
        
          let dropNumber = array.findIndex(invertedPredicate);
          let droppedArray = this.drop (array, dropNumber);
          return droppedArray;
        //   let firstFalsyIndex;
        //   for (let i = 0; i < array.length; i++) {
        //     if (!predicate(array[i], i, array)) {
        //       firstFalsyIndex = i;
        //       break;
        //     }
        //   }
        //   return this.drop (array, firstFalsyIndex);
    },

    chunk (array, size) {
        let arrayChunk = [];
        let newArray = [];
        let j = 0;
        for (let i = 0; i < array.length; i++) {
        //   arrayChunk = array.slice(0, size);
        j += size;

        //   arrayChunk = array.slice(i, size);
        //   arrayChunk = array.slice(i, i + size);
          arrayChunk = array.slice(i, j);
          console.log(i, size);
          console.log(arrayChunk);
          newArray.push(arrayChunk);
        }
        // return newArray;
        console.log(newArray);
    }
    

};

const arr1 = [1, 2, 3, 4, 5, 1, 0, 5]

// console.log(_.chunk(arr1, 2));
_.chunk(arr1, 3);


// console.log(_.drop(arr1, 3))
// console.log(_.drop(arr1))
// _.drop(arr1, 3) // must print [4, 5]

//Tests:
// console.log(_.clamp(5, 2, 7));
// console.log(_.clamp(10, -10, 7));

// console.log(_.inRange(5, 2, 10));
// console.log(_.inRange(5, 2));
// console.log(_.inRange(5, 10, 3));

//   console.log(_.words('elena, loves evgeny!'));

//   console.log(_.pad('elena', 10));
//   _.pad('elena', 10);

//   console.log(_.has({name: 'Evgeny', job: 'developer'}, 'name'))
//   console.log(_.has(evgeny, 'name'))


// Object methods tests:

// const evgeny = {
    //     name: 'Evgeny',
    //     job: 'developer',
    //     flaws: 0
    // }
// console.log(_.invert(evgeny));
    
// console.log(_.findKey(evgeny, function(elem) {
        //     return elem === 'developer';
        // }  ));
        
// console.log(_.findKey(evgeny, function(elem) {
            //     return elem === 0;
            // }  ));
            
// Array tests:
            
// console.log(_.dropWhile(arr1, function (element) {
//     return element < 3;
// }));

// console.log(_.dropWhile(arr1, function (element, index, array) {
//     return index < array.length / 2;
// }));