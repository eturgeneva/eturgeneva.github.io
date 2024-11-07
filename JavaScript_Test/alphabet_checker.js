// Returns the string whose first letter is later in the alphabet. If both first letters are equal, returns null.
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const alphabetArray = alphabet.split('');
console.log(alphabetArray);

function getLaterFirstLetter(string1, string2) {
  const firstLetter1 = string1.charAt(0);
  const firstLetter2 = string2.charAt(0);
  console.log(firstLetter1, firstLetter2);
  
  const alphabetCharIndex1 = alphabetArray.findIndex(char => char === firstLetter1);
  console.log(alphabetCharIndex1);

  const alphabetCharIndex2 = alphabetArray.findIndex(char => char === firstLetter2);
  console.log(alphabetCharIndex2);

  if (firstLetter1 === firstLetter2) {
    return null;
  } else if (alphabetCharIndex1 < alphabetCharIndex2) {
    return string2;
  } else {
    return string1;
  }
}

// Should return "blueberry"
console.log("getLaterFirstLetter('avocado', 'blueberry') returns: " + getLaterFirstLetter('avocado', 'blueberry'));

// Should return "zebra"
console.log("getLaterFirstLetter('zebra', 'aardvark') returns : " + getLaterFirstLetter('zebra', 'aardvark'));

// Should return null
console.log("getLaterFirstLetter('astro', 'afar') returns: " + getLaterFirstLetter('astro', 'afar'));