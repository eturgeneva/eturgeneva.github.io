console.log('Hello World');
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

console.log(secretMessage.length);
secretMessage.pop();
console.log(secretMessage.length);

secretMessage.push('to', 'Program');
// console.log(secretMessage);

console.log(secretMessage.indexOf('easily'));
secretMessage[7] = 'right';

// console.log(secretMessage);
secretMessage.shift();
secretMessage.unshift('Programming');
// console.log(secretMessage);
console.log(secretMessage.length);

secretMessage.splice(6, 5, 'know,');
console.log(secretMessage);
console.log(secretMessage.length);

console.log(secretMessage.join(' '));

const input = 'Evgeny is a bear u';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = []; // Stores the result from the input string
for (let i = 0; i < input.length; i++) {
//  console.log(input[i]);
//  console.log(i);


  if (input[i].toLowerCase() === 'e') {
    resultArray.push(input[i]);
  }
  if (input[i] === 'u') {
    resultArray.push(input[i]);
  }

  for (let j = 0; j < vowels.length; j++) {
    // console.log(j);
    if (input[i].toLowerCase() === vowels[j]) {
      // console.log(input[i], vowels[j]);
      resultArray.push(input[i]);
    }
  }
}
 console.log(resultArray);
 let resultString = resultArray.join('').toUpperCase();
 
 console.log(resultString);

 