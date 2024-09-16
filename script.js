const quizQuestions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
        correct: 0
    },
    {
        question: "Which method is used to access an element by ID in JavaScript?",
        options: ["getElementById()", "querySelector()", "getElementsByClassName()"],
        correct: 0
    },
    {
        question: "Which property is used to change the text color in CSS?",
        options: ["color", "background-color", "text-color"],
        correct: 0
    },
    {
        question: "How do you write a function in JavaScript?",
        options: ["function myFunction()", "def myFunction()", "func myFunction()"],
        correct: 0
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        options: ["onmouseover", "onchange", "onclick"],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;
function loadQuestion() {
    const questionEl = document.getElementById('question');
    const optionsEl = document.getElementById('options');
    questionEl.innerHTML = quizQuestions[currentQuestion].question;
    optionsEl.innerHTML = '';
    quizQuestions[currentQuestion].options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.innerHTML = `<input type="radio" name="option" value="${index}"> ${option}`;
        optionsEl.appendChild(optionElement);
    });
}
function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    
    if (!selectedOption) {
        alert('Please select an answer!');
        return;
    }

    const answer = parseInt(selectedOption.value);
    if (answer === quizQuestions[currentQuestion].correct) {
        score++;
    }

    currentQuestion++;
    if (currentQuestion < quizQuestions.length) {
        loadQuestion();
    } else {
        displayResult();
    }
}
function displayResult() {
    const quizBox = document.getElementById('quiz-box');
    const resultEl = document.getElementById('result');

    quizBox.style.display = 'none';
    resultEl.innerHTML = `You scored ${score} out of ${quizQuestions.length}!`;
}
document.getElementById('submit-btn').addEventListener('click', checkAnswer);
loadQuestion();
