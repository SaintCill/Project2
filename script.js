
// Define an array of questions for the quiz
const questions = [
    // Create a question object with the provided question text, correct answer, and wrong answers
    createQuestion(
        "What year did Christopher Columbus discover America?",
        "1492",
        ["1498", "1502", "1506"]
    ),
    createQuestion(
        "Who was the first President of the United States?",
        "George Washington",
        ["Thomas Jefferson", "John Adams", "James Madison"]
    ),
    createQuestion(
     "What year did World War II end?",
     "1945",
     ["1939", "1942", "1943"]
    ),
    createQuestion(
        "Who wrote the famous play 'Romeo and Juliet'?",
        "William Shakespeare",
        ["Jane Austen", "Charles Dickens", "Mark Twain"]
    ),
    createQuestion(
        "In which city was the Declaration of Independence signed?",
        "Philadelphia",
        ["New York", "Washington, D.C.", "Boston"]
    ),
    createQuestion(
        "Which ancient civilization is credited with the invention of writing?",
        "Mesopotamia",
        ["Egypt", "Greece", "India"]
    ),
    createQuestion(
        "Who was the longest-reigning monarch in British history?",
        "Queen Victoria",
        ["King George VI", "Queen Elizabeth II", "King Charles III"]
    ),
    createQuestion(
        "What event marked the beginning of the French Revolution?",
        "The Storming of the Bastille",
        ["The Reign of Terror", "The Execution of King Louis XVI", "The Tennis Court Oath"]
    ),
    createQuestion(
        "Who was the first African-American to serve as a U.S. Senator?",
        "Hiram Rhodes Revels",
    [   "Thurgood Marshall", "Frederick Douglass", "Booker T. Washington"]
    ),
    createQuestion(
         "What year did the Berlin Wall fall, effectively marking the end of the Cold War?",
         "1989",
         ["1987", "1985", "1991"]
    )
];

// Get references to HTML elements
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

// Initialize variables to track quiz state
let currentQuestionIndex = 0;
let score = 0;

// Creates a question object with the provided question text, correct answer, and wrong answers
function createQuestion(questionText, correctAnswer, wrongAnswers) {
    // Construct an array of answer objects with correct and incorrect options
    const answers = [
        { text: correctAnswer, correct: true },
        ...wrongAnswers.map(answer => ({ text: answer, correct: false }))
    ];


    return {
        question: questionText,
        answers: answers
    };
}

// Shuffles the elements of an array in place using the Fisher-Yates algorithm

function shuffleArray(array) {
    // Fisher-Yates algorithm for shuffling
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Define a function to start the quiz, reset quiz state variables and updates UI
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

// Function that displays current question
function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;

    resetState();

    // Shuffle the answers to randomize their order
    shuffleArray(currentQuestion.answers);

    // Attaches event listeners to the answer buttons to handle answer selection
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = true;
        }

        button.addEventListener("click", selectAnswer);
    });
}

// Function that resets UI state for the next question
function resetState() {
    nextButton.style.display = "none";
    answerButtons.innerHTML = ""; // Clear previous answer buttons
}

// Function that handles users selection of an answer
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    // Determines if selected answer is correct, updates the UI and tracks score
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

// Function that handles displaying the final score
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

// Define a function to handle moving to the next question or showing the final score
function handleNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

// Handles the click event of the next button to move to the next question or show the score
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextQuestion();
    } else {
        startQuiz();
    }
});






// Initializes the quiz and sets up modal functionality when the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize quiz
    startQuiz();

    // Initialize modals
    const openModalButtons = document.querySelectorAll('[data-modal-target]');
    const closeModalButtons = document.querySelectorAll('[data-close-button]');
    const overlay = document.getElementById('overlay');

    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = document.querySelector(button.dataset.modalTarget);
            openModal(modal);
        });
    });

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            closeModal(modal);
        });
    });

    overlay.addEventListener('click', () => {
        const modals = document.querySelectorAll('.modal.active');
        modals.forEach(modal => {
            closeModal(modal);
        });
    });

    // Opens the specified modal by adding 'active' class to it and the overlay
    function openModal(modal) {
        if(modal == null) return;
        modal.classList.add('active');
        overlay.classList.add('active');
      }
      
      // Closes the specified modal by removing 'active' class from it and the overlay
      function closeModal(modal) {
        if(modal == null) return;
        modal.classList.remove('active');
        overlay.classList.remove('active');
      }
});



