// https://adventofcode.com/2023/day/1

const textArray = ['1abc2', 'pqr3stu8vwx', 'a1b2c3d4e5f', 'treb7uchet'];
let sumOfDigits = 0;

for (let i = 0; i < textArray.length; i++) {
    const textString = textArray[i];
    let firstDigit;
    let lastDigit;
    console.log(textString);

    for (let j = 0; j < textString.length; j++) {
        if (!isNaN(textString[j])) {
            firstDigit = textString[j];
            break;
        }
    }
    console.log(firstDigit);

    for (let j = textString.length - 1; j >= 0; j--) {
        if (!isNaN(textString[j])) {
            lastDigit = textString[j];
            break;
        }
    }
    console.log(lastDigit);
    console.log(firstDigit + lastDigit); //bc the type is a string
    let comboOfDigits = Number(firstDigit + lastDigit);
    console.log(comboOfDigits);
    sumOfDigits = sumOfDigits + comboOfDigits; 
    console.log(sumOfDigits);   
}
console.log(sumOfDigits); 


