const textArray = ['1abc2', 'pqr3stu8vwx', 'a1b2c3d4e5f', 'treb7uchet'];

for (let i = 0; i < textArray.length; i++) {
    const textString = textArray[i];
    let firstDigit;
    let lastDigit;
    console.log(textString);

    for (let j = 0; j < textString.length; j++) {

        // console.log(textString[j]);
        // console.log(typeof textString[j]);
        
        if (!isNaN(textString[j])) {
            // console.log(textString[j]);
            firstDigit = textString[j];
            break;
        }
    }
    console.log(firstDigit);

    for (let j = textString.length - 1; j >= 0; j--) {
        // console.log(textString[j]);
        if (!isNaN(textString[j])) {
            lastDigit = textString[j];
            break;
        }
    }
    console.log(lastDigit);
}
