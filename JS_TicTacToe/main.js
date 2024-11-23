let a;
let b;
let humanChoice;

// get a children array through getElementsByClassName or getElementsByTagName
// winning combos (children array indices):
const winngingIndices = [
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

// document.getElementById('cell1').innerHTML = 0;

// add if empty:
// if (document.getElementById('cell1').innerHTML === '') {
//     document.getElementById('cell2').innerHTML = 0;
// }

let cellsArray = document.getElementsByClassName('cell');
console.log(cellsArray);

// function revealSymbol () {
//     document.getElementById('cell1').innerHTML = 'X';
//     document.getElementById('cell1').style.opacity = '1';
// }
// document.getElementById('cell1').addEventListener('click', revealSymbol);

// function revealSymbol1 () {
//     cellsArray[0].style.opacity = '1';
// }
// function revealSymbol2 () {
//     cellsArray[1].style.opacity = '1';
// }
// function revealSymbol3 () {
//     cellsArray[2].style.opacity = '1';
// }

// document.getElementById('cell1').addEventListener('click', revealSymbol1);
// document.getElementById('cell2').addEventListener('click', revealSymbol2);
// cellsArray[2].addEventListener('click', revealSymbol3);

for (let i = 0; i < cellsArray.length; i++) {
    cellsArray[i].addEventListener('click', function() {
        cellsArray[i].innerHTML = 'X';
        cellsArray[i].style.opacity = '1';
        humanArray.push(i);
        console.log(humanArray);
        computerChoice();
    });
}

function computerChoice () {
    if (humanArray.length >= 1) {
        let i = Math.floor(Math.random() * cellsArray.length);
        if (cellsArray[i].style.opacity = '0') {
            cellsArray[i].innerHTML = 'O';
            cellsArray[i].style.opacity = '1';
        }
    }
}

// reveals the rest starting from cell4 in one click:
// function revealTheRest () {
//     for (let i = 3; i < cellsArray.length; i++) {
//         cellsArray[i].style.opacity = '1';
//     }
// }
// cellsArray[3].addEventListener('click', revealTheRest);