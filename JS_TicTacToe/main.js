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

function revealSymbol () {
    document.getElementById('cell1').innerHTML = 'X';
    document.getElementById('cell1').style.opacity = '1';
}

document.getElementById('cell1').addEventListener('click', revealSymbol);