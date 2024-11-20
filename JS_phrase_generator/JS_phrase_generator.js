const phrasePart1 = ['You'];

const phrasePart2 = ['are', 'are doing'];

const phrasePart3 = ['amazing', 'awesome', 'great', 'fantastic'];

function generatePhrase () {
    const string1 = phrasePart1[Math.floor(Math.random() * phrasePart1.length)];
    const string2 = phrasePart2[Math.floor(Math.random() * phrasePart2.length)];
    const string3 = phrasePart3[Math.floor(Math.random() * phrasePart3.length)];

    return `${string1} ${string2} ${string3}!`
}

// console.log(generatePhrase('elena', 'loves', 'evgeny'));
console.log(generatePhrase())
