const playerSel = document.querySelectorAll(".player-sel");
const personC = document.querySelector(".person-counter");
const pcCounter = document.querySelector(".pc-counter");

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
      } else if (totalRounds === 5 && computerRoundWins > playerRoundWins) {
        console.log("computer win");
      } else if (totalRounds === 5 && computerRoundWins === playerRoundWins) {
        console.log("game tied");
      }
    })
);

// paper.onclick = function () {
//   console.log(round("paper", getComputerChoice()));

// };
