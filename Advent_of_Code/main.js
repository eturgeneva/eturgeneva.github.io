const testArray1 = [3, 4, 2, 1, 3, 3];
const testArray2 = [4, 3, 5, 3, 9, 3];


function sortArray (arr) {
    let sortedArray;
    sortedArray = arr.sort((num1, num2) => num1 - num2);
    return sortedArray;
}

// Test:
console.log(sortArray(testArray1));
console.log(sortArray(testArray2));


function pairArrays (arr1, arr2) {
    let differenceArray = [];

    for (let i = 0; i < arr1.length; i++) {
        differenceArray.push(Math.abs(arr1[i] - arr2[i]));
    }
    return differenceArray;
}

// Test:
console.log(pairArrays(testArray1, testArray2));

function sumArray (arr) {
    let sumNums;
    sumNums = arr.reduce((acc, curVal) => {
        return acc + curVal;
    })
    return sumNums;
}

// Test:
console.log(sumArray(pairArrays(testArray1, testArray2)));