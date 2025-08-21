const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

const  quizQuestions = [
    {
        question: "Which element has the atomic number 1?",
        answer: [
            {text:"A) Helium",correct: false},
            {text:"B) Hydrogen",correct: true},
            {text:"C) Oxygen",correct: false},
            {text:"D) Lithium",correct: false}
        ]
    },
    {
        question: "Which of the following is a noble gas?",
        answer: [
            {text:"A) Nitrogen",correct: false},
            {text:"B) Neon",correct: true},
            {text:"C) Sodium",correct: false},
            {text:"D) Nickel",correct: false}
        ]
    },
    {
        question: "Which element is a halogen?",
        answer: [
            {text:"A) Chlorine",correct: true},
            {text:"B) Calcium",correct: false},
            {text:"C) Carbon",correct: false},
            {text:"D) Chromium",correct: false}
        ]
    },
    {
        question: "What is the chemical symbol for Iron?",
        answer: [
            {text:"A) Ir",correct: false},
            {text:"B) Fe",correct: true},
            {text:"C) In",correct: false},
            {text:"D) Io",correct: false}
        ]
    },
    {
        question: "Which period contains the most elements?",
        answer: [
            {text:"A) Period 1",correct: false},
            {text:"B) Period 2",correct: false},
            {text:"C) Period 3",correct: false},
            {text:"D) Period 6",correct: true}
        ]
    },

];


let currentQuestionIndex = 0;
let score = 0;
let answerDisable = false;

console.log("hello");

