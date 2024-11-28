let a;
let b;
let humanChoice;

// winning combos (children array indices):
const winningIndices = [
                    [0, 1, 2],
                    [3, 4, 5],
                    [6, 7, 8],

                    [0, 3, 6],
                    [1, 4, 7],
                    [2, 5, 8],

                    [0, 4, 8],
                    [2, 4, 6]
];
// push choice into these arrays and compare the chunks with winning arrays:
let humanArray = [];
let computerArray = [];

let cellsArray = document.getElementsByClassName('cell');
console.log(cellsArray);

let circle = '<span class="material-symbols-outlined circle" id="circle">circle</span>';
let cross = '<span class="material-symbols-outlined cross">close</span>'


function humanClick() {
    for (let i = 0; i < cellsArray.length; i++) {
        cellsArray[i].addEventListener('click', function() {
            if (cellsArray[i].innerHTML !== circle && cellsArray[i].innerHTML !== cross) {
                cellsArray[i].innerHTML = cross;
                cellsArray[i].style.opacity = '1';
                humanArray.push(i);
                console.log(`Human Array: ${humanArray}`);
                if (humanArray.length < 5) {
                    // With this computer win is not getting checked:
                    // setTimeout(() => {
                    //     computerChoice();
                    // }, 1000);
                    computerChoice();
            }
        }
            // checkIfHumanWins();
            if (checkIfHumanWins()) {
                console.log('You are awesome!')
                // Wipes the board:
                setTimeout(() => {
                    // document.getElementById('game-section').innerHTML = ' ';
                    document.getElementById('game-section').innerHTML = '<p>You win!</p>';
                    document.getElementById('game-section').style.backgroundColor = '#301339';
                    document.getElementById('game-section').style.borderRadius = '10px';
                }, 1500);
                // document.getElementById('game-section').innerHTML = ' ';
            } else if (checkIfComputerWins()) {
                setTimeout(() => {
                    console.log('You suck');
                    document.getElementById('game-section').innerHTML = '<p>Computer wins!</p>';
                    document.getElementById('game-section').style.backgroundColor = '#301339';
                    document.getElementById('game-section').style.borderRadius = '10px';
                }, 1500);
            } else if (humanArray.length === 5) {
                document.getElementById('game-section').innerHTML = '<p>It\'s a tie!</p>';
                document.getElementById('game-section').style.backgroundColor = '#301339';
                document.getElementById('game-section').style.borderRadius = '10px';
            };
        });
    }
}
humanClick();

let gameButton = document.getElementById('game-button');

function restartGame() {
    // document.getElementById('game-section').innerHTML = '<p>Restart</p>';
    document.getElementById('game-section').innerHTML = '<div class="cell" id="cell1"></div><div class="cell" id="cell2"></div><div class="cell" id="cell3"></div><div class="cell" id="cell4"></div><div class="cell" id="cell5"></div><div class="cell" id="cell6"></div><div class="cell" id="cell7"></div><div class="cell" id="cell8"></div><div class="cell" id="cell9"></div>';
    document.getElementById('game-section').style.backgroundColor = 'unset';
    // gameButton.style.color = 'red';
    // console.log('I love you');


    // let container = document.getElementById('game-section');
    // let content = container.innerHTML;
    // container.innerHTML = content;
}

gameButton.addEventListener('click', restartGame)

// gameButton.addEventListener('click', function() {

//     if (humanArray.length < 3) {
//         humanClick();
//     }
//     if (humanArray.length >= 3) {
//         humanArray = [];
//     }

// });

function computerChoice () {
    
    let i = Math.floor(Math.random() * cellsArray.length);
    
    while ((cellsArray[i].innerHTML === cross || cellsArray[i].innerHTML === circle) && humanArray.length < 5) {
        i = Math.floor(Math.random() * cellsArray.length);
    }
    cellsArray[i].innerHTML = circle;
    cellsArray[i].style.opacity = '1';
    computerArray.push(i);
    console.log(`Computer Array: ${computerArray}`);
    
}

let losingIndices = [];

function compareArrays (winningArray, playerArray) {
    for (let i = 0; i < winningArray.length; i++) {
        if (!playerArray.includes(winningArray[i])) {
            return false;
        } 
    }
    return true;
}
// Tests of the compareArrays function:
console.log(compareArrays([0, 3, 6], [1, 0, 6, 5, 4, 3]));
console.log(compareArrays([0, 3, 6], [1, 6, 5, 4, 3]));
console.log(compareArrays([2, 5, 8], [2, 5, 6, 8]));

function checkIfHumanWins() {
    for (let j = 0; j < winningIndices.length; j++) {
        if (compareArrays (winningIndices[j], humanArray)) {
            console.log('You win!');
            return true;
        }
    }
}

function checkIfComputerWins() {
    for (let j = 0; j < winningIndices.length; j++) {
        if (compareArrays (winningIndices[j], computerArray)) {
            console.log('Computer wins!');
            return true;
        }
    } 
}

// Previous working Human version:
// function checkIfHumanWins() {
//     for (let j = 0; j < winningIndices.length; j++) {
//         if (humanArray.includes(winningIndices[j][0]) && humanArray.includes(winningIndices[j][1]) && humanArray.includes(winningIndices[j][2])) {
//             console.log('You win!');
//             return true;
//         } else {
//             console.log('Try again');
//         }
//     } 
// }

// Previous working Computer version:
// function checkIfComputerWins() {
//     for (let j = 0; j < winningIndices.length; j++) {
//         if (computerArray.includes(winningIndices[j][0]) && computerArray.includes(winningIndices[j][1]) && computerArray.includes(winningIndices[j][2])) {
//             console.log('Computer wins!');
//             return true;
//         } else {
//             console.log('Computer should try again');
//         }
//     } 
// }