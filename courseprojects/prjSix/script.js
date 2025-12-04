document.addEventListener("DOMContentLoaded", () => {
  // all buttons
  const startQuizBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");
  const reStartBtn = document.getElementById("restart-btn");
  // question containers selectors
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  // result container selectors
  const resultContainer = document.getElementById("result-container");
  const scoreDislpay = document.getElementById("score");

  const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "Who wrote 'Hamlet'?",
      choices: [
        "Charles Dickens",
        "Jane Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
    },
  ];

  let currentIndex = 0;
  let score = 0;

  // not calling the func but refering the variable
  startQuizBtn.addEventListener("click", startQuiz);
  nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex < questions.length) {
      showQuestions();
    } else {
      showResult();
    }
  });

  function startQuiz() {
    startQuizBtn.classList.add("hidden");
    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    showQuestions();
  }

  function showQuestions() {
    nextBtn.classList.add("hidden");
    // displaying the question with the help of arr and pointer to question dynamically using currentIndex var
    questionText.textContent = questions[currentIndex].question;
    choicesList.innerHTML = "";
    questions[currentIndex].choices.forEach((choice) => {
      let li = document.createElement("li");
      li.textContent = choice;
      li.addEventListener("click", () => selectAnswer(choice));
      choicesList.appendChild(li);
    });
  }
  function selectAnswer(choice) {
    const correctAnswer = questions[currentIndex].answer;
    if (choice === correctAnswer) {
      score++;
    }
    nextBtn.classList.remove("hidden");
  }
  function showResult() {
    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreDislpay.textContent = `${score} out of ${questions.length}`;
  }

  reStartBtn.addEventListener("click", () => {
    currentIndex = 0;
    score = 0;
    // resultContainer.classList.add("hidden");
    startQuiz()
  });
});
