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
        }


  };

  
  // console.log(_.clamp(5, 2, 7));
  // console.log(_.clamp(10, -10, 7));
  
  // console.log(_.inRange(5, 2, 10));
  // console.log(_.inRange(5, 2));
  // console.log(_.inRange(5, 10, 3));
  
  //   console.log(_.words('elena, loves evgeny!'));
  
  console.log(_.pad('elena', 10));
  _.pad('elena', 10);