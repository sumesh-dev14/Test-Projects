let randomNumber = Math.floor(Math.random() * 100) + 1;
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const previousGuess = document.querySelector(".guesses");
const remainingGuess = document.querySelector(".lastResult");
const guessType = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let NoOfAttempts = 0;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateNums(guess);
  });
}

// func to check a valid guess weather to check if he have entered any other chars other than numbers

function validateNums(guess) {
  if (isNaN(guess)) {
    alert("please enter a valid number");
  } else if (guess < 1) {
    alert("please enter number greater than 1");
  } else if (guess > 100) {
    alert("please enter number less than 100");
  } else {
    prevGuess.push(guess);
    if (NoOfAttempts === 10) {
      displayGuess(guess);
      displayMessage(`Game Over 🙁. the random Number was  ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

// giving message to user that above condition is true
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`Your guess was correct 🎯`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is too low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is too high`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  previousGuess.innerHTML += `${guess}, `;
  NoOfAttempts++;
  remainingGuess.innerHTML = `${10 - NoOfAttempts}`;
}

function displayMessage(msg) {
  guessType.innerHTML = `<h3>${msg}</h3>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute(`disabled`, "");
  p.classList.add("buttone");
  p.innerHTML = `<button id="newGame" class="new-game-btn">Start New Game</button>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const NewGameBtn = document.querySelector("#newGame");
  NewGameBtn.addEventListener("click", function (e) {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    prevGuess = [];
    NoOfAttempts = 0;
    previousGuess.innerHTML = "";
    remainingGuess.innerHTML = `${10}`;
    guessType.innerHTML = "";
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
