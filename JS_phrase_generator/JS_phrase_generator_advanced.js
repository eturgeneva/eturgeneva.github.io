const phraseStart = ['You', 'Believe'];

const phrasePart2 = ['are', 'are doing'];

const phrasePart3 = ['amazing', 'awesome', 'great', 'fantastic'];

function generatePhrase () {
    const beginning = phraseStart[Math.floor(Math.random() * phraseStart.length)];



    const string2 = phrasePart2[Math.floor(Math.random() * phrasePart2.length)];
    const string3 = phrasePart3[Math.floor(Math.random() * phrasePart3.length)];

    return `${beginning} ${string2} ${string3}!`
}

// console.log(generatePhrase('elena', 'loves', 'evgeny'));
console.log(generatePhrase())
