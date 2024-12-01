const fs = require('node:fs');
const { text } = require('stream/consumers');
const data = fs.readFileSync('./Advent_of_Code/input.txt', 'utf-8');
const textArray = data.split('\r\n');
// const textArray = data.split(/[0-9]{5,5}/);
// console.log(textArray);

let splitTest = [];
for (let i = 0; i < textArray.length; i++) {
    splitTest.push(textArray[i].split(/ +/));
}
console.log(splitTest);

function formArray1 () {
    let array1 = [];
    for (let i = 0; i < splitTest.length; i++) {
        array1.push(parseInt(splitTest[i][0]));
    }
    return array1;
}

function formArray2 () {
    let array1 = [];
    for (let i = 0; i < splitTest.length; i++) {
        array1.push(parseInt(splitTest[i][1]));
    }
    return array1;
}

// const test1 = [3, 4, 2, 1, 3, 3];
// const test2 = [4, 3, 5, 3, 9, 3];
const testArray1 = formArray1();
const testArray2 = formArray2();

function sortArray (arr) {
    let sortedArray;
    sortedArray = arr.sort((num1, num2) => num1 - num2);
    return sortedArray;
}

function pairArrays (arr1, arr2) {
    let differenceArray = [];

    for (let i = 0; i < arr1.length; i++) {
        differenceArray.push(Math.abs(arr1[i] - arr2[i]));
    }
    return differenceArray;
}

function sumArray (arr) {
    let sumNums;
    sumNums = arr.reduce((acc, curVal) => {
        return acc + curVal;
    })
    return sumNums;
}

sortArray(testArray1);
sortArray(testArray2);
console.log(sumArray(pairArrays(testArray1, testArray2)));

const test1 = [3, 4, 2, 1, 3, 3];
const test2 = [4, 3, 5, 3, 9, 3];

function repeatTimes (arr1, arr2) {
    let repeats = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                repeats.push(i + 1);
            }
        }
    }
    return repeats;
}

console.log(repeatTimes(test1, test2));