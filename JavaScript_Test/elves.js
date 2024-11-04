const textArray = ['1abc2', 'pqr3stu8vwx', 'a1b2c3d4e5f', 'treb7uchet'];

// let firstDigit;
for (let i = 0; i < textArray.length; i++) {
    const textString = textArray[i];
    console.log(textString);

    for (let j = 0; j < textString.length; j++) {
        console.log(textString[j]);
        
        if (typeof textString[j] === 'number') {
            console.log(textString[j]);
            // break;
        }
    }

}
