const phraseStart = ['You', 'Believe'];
const youPart2 = ['are', 'are doing'];
const youPart3 = ['amazing', 'awesome', 'great', 'fantastic'];

const believePart2 = ['in', 'that'];
const believePart3 = [
                        ['yourself, for you are stronger than you think', 'your dreams, and they will guide you to greatness', 'the beauty of your unique journey'],
                        ['every challenge is an opportunity in disguise', 'today is the perfect day to begin anew', 'every small step takes you closer to your goals', 'the best is yet to come']
                     ];


function generatePhrase () {
    const beginning = phraseStart[Math.floor(Math.random() * phraseStart.length)];
    if (beginning === 'You') {
        const string2 = youPart2[Math.floor(Math.random() * youPart2.length)];
        const string3 = youPart3[Math.floor(Math.random() * youPart3.length)];

        return `${beginning} ${string2} ${string3}!`
    }
}

// console.log(generatePhrase('elena', 'loves', 'evgeny'));
console.log(generatePhrase())
