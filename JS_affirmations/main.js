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
    let string2;
    let string3;
    if (beginning === 'You') {
        string2 = youPart2[Math.floor(Math.random() * youPart2.length)];
        string3 = youPart3[Math.floor(Math.random() * youPart3.length)];
    }

    if (beginning === 'Believe') {
        string2 = believePart2[Math.floor(Math.random() * believePart2.length)];
        if (string2 === 'in') {
            string3 = believePart3[0][Math.floor(Math.random() * believePart3[0].length)]
        } else {
            string3 = believePart3[1][Math.floor(Math.random() * believePart3[1].length)]
        }
    }
    return `${beginning} ${string2} ${string3}!`
}

// console.log(generatePhrase('elena', 'loves', 'evgeny'));
// console.log(generatePhrase())
// let dailyMessage = generatePhrase();
// console.log(dailyMessage);
let button = document.getElementById('message-button');
let messageParagraph = document.getElementById('message-of-the-day');

function showMessage() {
    messageParagraph.innerHTML = generatePhrase();
    messageParagraph.style.padding = '3rem';
    button.innerHTML = 'Show another message';
}
button.addEventListener('click', showMessage);