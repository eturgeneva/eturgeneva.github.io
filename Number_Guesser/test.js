// Test file:
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = function() {
    return Math.floor(Math.random() * 10);
}
  
// function compareGuesses (humanGuess, computerGuess, generateTarget) {
//     const humanDifference = Math.abs(generateTarget - humanGuess);
//     const computerDifference = Math.abs(generateTarget - computerGuess);
//     if (humanDifference === computerDifference) {
//       return true;
//     }
//     if (humanDifference < computerDifference) {
//       return true;
//     }
//     if (humanDifference > computerDifference) {
//       return false;
//     }
// }

function compareGuesses (humanGuess, computerGuess, generateTarget) {
    const humanDifference = Math.abs(generateTarget - humanGuess);
    const computerDifference = Math.abs(generateTarget - computerGuess);
    if (humanGuess < 0 || humanGuess > 9) {
        alert('The number is out of range');
    }
    return humanDifference <= computerDifference;  
}

console.log(compareGuesses(5, 3, generateTarget()));
// console.log(compareGuesses());

// Check if updates with the new round
function updateScore (winner) {
    switch (winner) {
      case 'human':
        // humanScore = humanScore + 1;
        humanScore++;
        break;
      case 'computer':
        // computerScore = computerScore + 1;
        computerScore++;
        break;
      default:
        console.log('Invalid score');
        break;
    }
}
// console.log(updateScore('human'));

function advanceRound() {
    // currentRoundNumber = currentRoundNumber + 1;
    currentRoundNumber++;
}