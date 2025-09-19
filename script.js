"use strict";

function getComputerChoice() {
  // 0, 1 or 2
  const choice = Math.floor(Math.random() * 3); 

  switch (choice) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

function toggleWinMessage(result) {
  if (result) {
    // change the winner and toggle result div
  }
}

function checkIfWon() {
  if (computerScore === 5 || humanScore === 5) {
    computerScore = 0;
    humanScore = 0;

    toggleWinMessage(computerScore > humanScore);
    won = true;
  }
}

function decideWinner(humanChoice, computerChoice) {
  if (computerChoice === humanChoice) {
    return;
  } else if (computerChoice === 'rock') {
    if (humanChoice === 'paper') {
      humanScore++;
      return;
    } else { // scissors
      computerScore++;
      return;
    }
  } else if (computerChoice === 'paper') {
    if (humanChoice === 'scissors') {
      humanScore++;
      return;
    } else { // rock
      computerScore++;
      return;
    }
  } else if (computerChoice === 'scissors') {
    if (humanChoice === 'rock') {
      humanScore++;
      return;
    } else { // paper
      computerScore++;
      return;
    }
  }
}

function playRound(element) {
  const humanChoice = element.target.id,
        computerChoice = getComputerChoice();

  decideWinner(humanChoice, computerChoice);

  checkIfWon();

  // disable the win message on the next button press after the actual win
  if (won) toggleWinMessage();
}

let humanScore = 0, 
    computerScore = 0;
    won = false;

const buttons = document.getElementById('buttons');

buttons.addEventListener('click', (e) => playRound(e))


// new TODO: complete toggleWinMessage()
// add results div and the winner span
// add scores div and functions to change it
// add needed js comments
// make ASCII art for displaying the user and computer choice
// somehow highlight the win (effect on the score increment, or overlay animation idk)

// TODO: make it change the global score variable;
// synchronize score variable with div somehow 
// (idk either change the div content every time the score changes
// or make it show the variable, preferable the latter if possible);
// track scores and reset (+ show the win message) when either is 5;
// probably remove the game thing at all, somehow check everything inline (idk???);
// do it all without inline loops (idk, check if score===5 on its increment?)
// clean this shit up and maybe refactor so it's not that ugly;