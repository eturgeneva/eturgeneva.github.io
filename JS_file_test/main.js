// const fs = require('fs');
// let data = 'Learning how to write in a file'
// fs.writeFile('output.txt', data, (err) => {
//     if (err) throw err;
// })

const fs = require('node:fs');
// const { text } = require('stream/consumers');
const data = fs.readFileSync('./driving.tsv', 'utf-8');
const textArray = data.split('\r\n');
// console.log(textArray);
console.log(textArray[1]);
console.log(textArray[1].split('\t'));

// function splitElem (elem) {
//     let newArray = [];
//     newArray.push(elem.split('\t'));

//     return newArray;
// }

// console.log(textArray.forEach(splitElem));

let phrase = 'abbauen\tсокращать, демонтировать, распадаться';
console.log(phrase);
let split = phrase.split('\t');
console.log(split);

let formattedArray = [];
function splitElement (element) {
    formattedArray.push(element.split('\t'));
}

function loopSplit (arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray.push(arr[i].split('\t'))
    }
    return newArray;
}

console.log(textArray.forEach(splitElement));
console.log(splitElement(textArray[2]));
// console.log(loopSplit(textArray));

console.log(splitElement(textArray[3]));
textArray.forEach(splitElement);
console.log(formattedArray)
console.log(formattedArray[0])
console.log(formattedArray[0][0])