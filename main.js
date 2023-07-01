const playerSel = document.querySelectorAll(".player-sel");
const personC = document.querySelector(".person-counter");
const pcCounter = document.querySelector(".pc-counter");
const result = document.querySelector(".result");
const modal = document.querySelector(".modal");
const startAgain = document.querySelector(".start-again");

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3); // returns a random number between

  if (random === 0) {
    return "Rock";
  } else if (random === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

let playerRoundWins = 0;
let computerRoundWins = 0;
let totalRounds = 0;

function round(playerS = "rock", computerS) {
  playerS = playerS.toLowerCase();
  computerS = computerS.toLowerCase();
  totalRounds += 1;

  if (playerS === computerS) {
    playerRoundWins += 1;
    computerRoundWins += 1;
    personC.innerText = playerRoundWins;
    pcCounter.innerText = computerRoundWins;

    return "tie";
  } else if (
    (playerS === "rock" && computerS === "paper") ||
    (playerS === "paper" && computerS === "scissors") ||
    (playerS === "scissors" && computerS === "rock")
  ) {
    computerRoundWins += 1;
    pcCounter.innerText = computerRoundWins;
    return `You Lose! ${computerS} beats ${playerS}`;
  } else {
    playerRoundWins += 1;
    personC.innerText = playerRoundWins;
    return `You Won! ${playerS} beats ${computerS}`;
  }
}

playerSel.forEach(
  (el) =>
    (el.onclick = function () {
      console.log(round(el.getAttribute("val"), getComputerChoice()));

      if (totalRounds === 5 && playerRoundWins > computerRoundWins) {
        console.log("You Win");
        modal.classList.toggle("hidden");
        result.innerText = "You win";
      } else if (totalRounds === 5 && computerRoundWins > playerRoundWins) {
        console.log("computer win");
        modal.classList.toggle("hidden");
        result.innerText = "Computer win";
      } else if (totalRounds === 5 && computerRoundWins === playerRoundWins) {
        modal.classList.toggle("hidden");
        result.innerText = "Game Tied";
        console.log("game tied");
      }
    })
);

startAgain.onclick = function () {
  playerRoundWins = 0;
  computerRoundWins = 0;
  totalRounds = 0;
  personC.innerText = playerRoundWins;
  pcCounter.innerText = computerRoundWins;

  modal.classList.toggle("hidden");
};
// paper.onclick = function () {
//   console.log(round("paper", getComputerChoice()));

// };
