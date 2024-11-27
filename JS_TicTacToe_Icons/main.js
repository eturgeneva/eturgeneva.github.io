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

            findWinner();
        });
    }
}
humanClick();

function computerChoice () {
  
        let i = Math.floor(Math.random() * cellsArray.length);
        // console.log(i);
       
        while ((cellsArray[i].innerHTML === cross || cellsArray[i].innerHTML === circle) && humanArray.length < 5) {
            i = Math.floor(Math.random() * cellsArray.length);
            // console.log(i);
        }
        cellsArray[i].innerHTML = circle;
        cellsArray[i].style.opacity = '1';
        computerArray.push(i);
        console.log(`Computer Array: ${computerArray}`);

}

function findWinner() {

    let matches = [];
    for (let j = 0; j < winningIndices.length; j++) {
        for (let i = 0; i < winningIndices[j].length; i++) {
            if (humanArray.includes(winningIndices[j][i])) {
                matches.push(winningIndices[j][i]);
            }
        
        }
        console.log(`Matches: ${matches}`);
    } 
    if (humanArray.includes(matches[0]) && humanArray.includes(matches[1]) && humanArray.includes(matches[2])) {
        console.log('You win!');
        console.log(`Matches: ${matches}`);
    } else {
        console.log('Try again')
    }

    // Works but repeats 'you win' 3 times because of the loop:
    
    // for (let j = 0; j < winningIndices.length; j++) {
    //     for (let i = 0; i < winningIndices[j].length; i++) {
    //         if (humanArray.includes(winningIndices[j][0]) && humanArray.includes(winningIndices[j][1]) && humanArray.includes(winningIndices[j][2])) {
    //             console.log('You win!');
    //             console.log(`Winning Indices: ${winningIndices[j]}`);
    //         } else {
    //             console.log('Try again')
    //         }
    //     }
    // } 

    // Also works with the 1st horizontal row:

    // for (let j = 0; j < winningIndices.length; j++) {
    //     for (let i = 0; i < winningIndices[j].length; i++) {
    //         if (humanArray.includes(0) && humanArray.includes(1) && humanArray.includes(2)) {
    //             console.log('You win!');
    //         } else {
    //             console.log('Try again')
    //         }
    //     }
    // }
 
    // Works with the 1st winning combo (first horizontal row):

    // for (let i = 0; i < winningIndices[0].length; i++) {
    //     if (humanArray.includes(0) && humanArray.includes(1) && humanArray.includes(2)) {
    //         console.log('You win!');
    //     } else {
    //         console.log('Try again')
    //     }
    // }

}

// findWinner();
// console.log(winningIndices[0]);
// console.log(winningIndices[0][0]);
// console.log(winningIndices[0][1]);