// This is the refined array method. Previously i had defined each part using question: and then a separate answer: for each alternative, aswell as a separate object that kept track of the correct answer in correct:
const question = [
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
     ["Thurgood Marshall", "Frederick Douglass", "Booker T. Washington"]
   ),
   createQuestion(
     "What year did the Berlin Wall fall, effectively marking the end of the Cold War?",
     "1989",
     ["1987", "1985", "1991"]
   )
];

// Function that creates the questions out of the array objects
function createQuestion(question, correctAnswer, wrongAnswers) {
  const answers = [
    { text: correctAnswer, correct: true },
    ...wrongAnswers.map(answer => ({ text: answer, correct: false }))
  ];
  
// This part randomizes the position of the answer so that it is different every time. Original solution was an array, but i had to manually change the position of the correct answer, aswell as having an additional object in the array that kept track of the correct answer.
  for (let i = answers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [answers[i], answers[j]] = [answers[j], answers[i]];
  }
  return {
    question: question,
    answers: answers
  };
}


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal);
  });
});

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal);
  });
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal);
  });
});


function openModal(modal) {
  if(modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if(modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}
/*Function displays the question and question number (questionNo) */
function showQuestion() {
  let currentQuestion = question[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  /*resets the questions so that we can hide them*/
  resetState();
  
  /* fetches the answer out of the question array */
  currentQuestion.answers.forEach(answer => { 
    /* creates a button "tag" and saves it as a variable named button*/
    const button = document.createElement("button");
    /* transforms the button text into the text value in the answer array*/
    button.innerHTML = answer.text;
    /*This adds the class "btn" to the newly created button variable, allowing us to 
    manipulate it using its class in the CSS*/
    button.classList.add("btn");
    /* "Adds" the button variable as a child of the answerButtons in the html*/
    answerButtons.appendChild(button);
    if(answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

// This function handles the aftermatch of choosing an answer. It fetches the "click" event and stores it in an event object(e). The variable isCorrect then checks if the selected button has a "data-correct" attribute set to true. It then sets the isCorrect variable to true.
function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  
  // This else/if statement adds the class "correct to the selected button based on whether the answer is correct or not. If it is correct, the class is added and the score is incremeneted, if not, the "incorrect" class is added.
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  }else{
    selectedBtn.classList.add("incorrect");
  }

// Here the collection of buttons are converted into an array using Array.from() and then the forEach() method is used to iterate through each button. It then adds the "correct" class to each button that has a "data-correct" attribute set to true.
  Array.from(answerButtons.children).forEach(button =>{
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
// This line disables the buttons after an answer is chosen, preventing the user from chosing another answer
    button.disabled = true;
  });
// This line changes the display attribute from none to block, allowing the next button to be displayed
  nextButton.style.display = "block";
}

// Function that handles the score at the end, aswell as changes the next button into "play again"
function showScore(){
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${question.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

// Function for generating the next question
function handleNextQuestion(){
  currentQuestionIndex++;
  if (currentQuestionIndex < question.length){
    showQuestion();
  }else {
    showScore();
  }
}
// This of course handles the next button and gives it functionallity
nextButton.addEventListener("click", () =>{
  if(currentQuestionIndex < question.length){
    handleNextQuestion();
  }else {
    startQuiz();
  }
});

startQuiz();
