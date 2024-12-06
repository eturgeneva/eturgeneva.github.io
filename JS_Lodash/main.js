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

        let isInRange = start <= number && number < end ? true : false;
        return isInRange;
    
        // if (number < start || number >= end) {
        //   return false;
        // } else {
        //   return true;
        // }

      }
    

  };

// console.log(_.clamp(5, 2, 7));
// console.log(_.clamp(10, -10, 7));
console.log(_.inRange(5, 2, 10));
console.log(_.inRange(5, 2));
console.log(_.inRange(5, 10, 3));