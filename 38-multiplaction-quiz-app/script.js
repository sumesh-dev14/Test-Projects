const submitBtn = document.getElementById("submit-btn");
const inputEl = document.getElementById("input");
const num1El = document.getElementById("num1");
const num2El = document.getElementById("num2");
const scoreEl = document.getElementById("score");

let num1 = Math.floor(Math.random() * 10);
let num2 = Math.floor(Math.random() * 10);
let correctGuess = num1 * num2;
let score = 0;

num1El.innerText = num1;
num2El.innerText = num2;

submitBtn.addEventListener("click", function() {
  const inputVal = Number(inputEl.value); 

  if (inputVal === correctGuess) {
    score++;
    scoreEl.innerText = score;
    document.getElementById('message').innerHTML = "correct answer ✅"

    num1 = Math.floor(Math.random() * 10);
    num2 = Math.floor(Math.random() * 10);
    correctGuess = num1 * num2;
    num1El.innerText = num1;
    num2El.innerText = num2;

    inputEl.value = ""; 
  } else {
    document.getElementById('message').innerHTML = "wrong answer ❌"
  }
});








