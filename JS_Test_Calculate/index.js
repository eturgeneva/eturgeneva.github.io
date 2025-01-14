const Calculate = {
	sum(inputArray) {
        if (inputArray.length === 0) {
            return 0;
          }
        const sumOfNumbers = inputArray.reduce((acc, curVal) => {
            return acc + curVal;
        })

	    return sumOfNumbers;
	}
}

module.exports = Calculate;

// Try the following:

//Create a let variable named totalSum and set it equal to 0.
// Below it, create a const variable named inputArrayLength and set it equal to inputArray.length.
// Write a for loop that iterates inputArrayLength number of times and adds the value of each element to totalSum.
// Return totalSum.

// const Calculate = {
// 	sum(inputArray) {
//     let totalSum = 0;
    
//     const inputArrayLength = inputArray.length;
// 		for (let i = 0; i < inputArrayLength; i++){
//       totalSum += inputArray[i]
//     }
    
//     return totalSum;
// 	}
// }

// module.exports = Calculate;