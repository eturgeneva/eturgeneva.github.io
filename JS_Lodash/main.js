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

    }

};
    const evgeny = {
    name: 'Evgeny',
    job: 'developer'
    }

    console.log(_.invert(evgeny));


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