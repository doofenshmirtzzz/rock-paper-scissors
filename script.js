"use strict";

/*
getComputerChoice() randomly returns 0, 1, or 2

getHumanChoice() gets 0-2 via prompt()

^ they both return int displaying the choice

0: rock
1: paper
2: scissors

playRound() compares choice, returns 0, 1 or 2

0: draw
1: computer wins
2: human wins

printWinMessage() takes playRound() int and prints a win (or draw) message

playGame() keeps track of scores, calls playRound 5 times, declares winner

humanScore and computerScore init with 0, increment after win
*/


function getComputerChoice() {
  return Math.floor(Math.random() * 3); // 0, 1 or 2
}

function getHumanChoice() {
  return parseInt(prompt("0: rock\n1: paper\n2: scissors\nChoose your sign: "));
}

function playRound(computerChoice, humanChoice) {
  if (computerChoice === humanChoice) {
    return 0; // draw
  } else if (computerChoice === 0) { // rock
    if (humanChoice === 1) { // paper
      return 2; // human wins
    } else {
      return 1; // computer wins
    }
  } else if (computerChoice === 1) { // paper
    if (humanChoice === 2) { // scissors
      return 2; // human wins
    } else {
      return 1; // computer wins
    }
  } else if (computerChoice === 2) { // scissors
    if (humanChoice === 0) { // rock
      return 2; // human wins
    } else {
      return 1; // computer wins
    }
  }
}

