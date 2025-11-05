const pressRock = document.getElementById("rock");
const pressPaper = document.getElementById("paper");
const pressSissors = document.getElementById("scissor");
const resultMsg = document.getElementById("after");
const myScore = document.getElementById("my-score");
const compScore = document.getElementById("comp-score");

let myScoreValue = 0;
let CompScore = 0;

let choices = ["rock", "paper", "scissor"];

function playGame(playerChoice) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomIndex];
  if (computerChoice === playerChoice) {
    resultMsg.innerHTML = "<h4>Its a tie!</h4>";
  } else if (
    (computerChoice === "rock" && playerChoice === "scissor") ||
    (computerChoice === "paper" && playerChoice === "rock") ||
    (computerChoice === "scissor" && playerChoice === "paper")
  ) {
    CompScore++;
    resultMsg.innerHTML = `<h4>You Lose! ${computerChoice} beats ${playerChoice}</h4>`;
    compScore.textContent = CompScore;
  } else {
    myScoreValue++;
    resultMsg.innerHTML = `<h4>You Win! ${playerChoice} beats ${computerChoice}</h4>`;
    myScore.textContent = myScoreValue;
  }
}

pressPaper.addEventListener("click", () => playGame("paper"));
pressRock.addEventListener("click", () => playGame("rock"));
pressSissors.addEventListener("click", () => playGame("scissor"));
