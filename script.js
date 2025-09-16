"use strict";

/*
getComputerChoice() randomly returns 0, 1, or 2

getHumanChoice() gets 0-2 via prompt()

^ they both return int displaying the choice

0: rock
1: paper
2: scissors

playRound() compares choice, prints win/lose/draw message, returns 0, 1 or 2

0: draw
1: computer wins
2: human wins

translateChoice() translates choice int to string

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
    console.log(`Tie! You both chose ${translateChoice(computerChoice)}`);
    return 0; // draw
  } else if (computerChoice === 0) { // rock
    if (humanChoice === 1) { // paper
      console.log("You win! Paper beats rock")
      return 2; // human wins
    } else { // scissors
      console.log("You lose. Rock beats scissors")
      return 1; // computer wins
    }
  } else if (computerChoice === 1) { // paper
    if (humanChoice === 2) { // scissors
      console.log("You win! Scissors beat paper")
      return 2; // human wins
    } else { // rock
      console.log("You lose. Paper beats rock")
      return 1; // computer wins
    }
  } else if (computerChoice === 2) { // scissors
    if (humanChoice === 0) { // rock
      console.log("You win! Rock beats scissors")
      return 2; // human wins
    } else { // paper
      console.log("You lose. Scissors beat paper")
      return 1; // computer wins
    }
  }
}

function translateChoice(choice) {
  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function playGame() {
  let computerScore = 0;
  let humanScore = 0;
  let result;

  // while (computerScore < 3 && humanScore < 3) {
  //   result = playRound(getComputerChoice(), getHumanChoice());
  //   switch (result) {
  //     case 0: // tie
  //     break;
  //     case 1: // computer wins
  //     computerScore++;
  //     break;
  //     case 2: // human wins
  //     humanScore++;
  //     break
  //   }
    
  //   console.log(`The scores are:\n Computer: ${computerScore}\n Human: ${humanScore}`);
  // }

  // console.log((computerScore > humanScore) ? "You lost the game. Try again next time" : "You won the game! Good job");
}

playGame();