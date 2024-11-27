let a;
let b;
let humanChoice;

// get a children array through getElementsByClassName or getElementsByTagName
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
// computer makes a choice every _even_ something and _if_ there are still unfilled slots
// computer starts from a corner if possible
// game stops when all slots are filled - for example, check if innerHTML === ''

// push choice into these arrays and compare the chunks with winning arrays:
let humanArray = [];
let computerArray = [];

let cellsArray = document.getElementsByClassName('cell');
// console.log(cellsArray);

// document.getElementById('cell1').addEventListener('click', revealSymbol1);
// document.getElementById('cell2').addEventListener('click', revealSymbol2);
// cellsArray[2].addEventListener('click', revealSymbol3);
// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

let circle = '<span class="material-symbols-outlined circle" id="circle">circle</span>';
let cross = '<span class="material-symbols-outlined cross">close</span>'

function checkCombo (winningCombo, playerArray) {
    for (let i = 0; i < winningCombo.length; i++) {
        if (!playerArray.includes(winningCombo[i])) {
            return false;
        } 
    }
    return true;
}


function humanClick() {
    for (let i = 0; i < cellsArray.length; i++) {
        cellsArray[i].addEventListener('click', function() {
            if (cellsArray[i].innerHTML !== circle && cellsArray[i].innerHTML !== cross) {
            cellsArray[i].innerHTML = cross;
            cellsArray[i].style.opacity = '1';
            humanArray.push(i);
            console.log(`Human Array: ${humanArray}`);
            if (humanArray.length < 5) {
                computerChoice();
            }
            // setInterval(computerChoice, 1000);
            }
            // checkIfHumanWins();
            if (checkIfHumanWins()) {
                console.log('You are awesome!')
            } else if (checkIfComputerWins()) {
                console.log('You suck');
            };
        });
    }
}
humanClick();

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

function checkIfHumanWins() {
    for (let j = 0; j < winningIndices.length; j++) {
        if (humanArray.includes(winningIndices[j][0]) && humanArray.includes(winningIndices[j][1]) && humanArray.includes(winningIndices[j][2])) {
            console.log('You win!');
            return true;
        } else {
            console.log('Try again');
        }
    } 
}

function checkIfComputerWins() {
    for (let j = 0; j < winningIndices.length; j++) {
        if (computerArray.includes(winningIndices[j][0]) && computerArray.includes(winningIndices[j][1]) && computerArray.includes(winningIndices[j][2])) {
            console.log('Computer wins!');
            return true;
        } else {
            console.log('Computer should try again');
        }
    } 
}