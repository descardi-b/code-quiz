// global variables for DOM elements3
var body = document.body;
var quizTitle = document.querySelector(".quiz-title");
var countdown;
var startQuizButton = document.querySelector(".start-quiz");
var quizInfoHead = document.querySelector(".quiz-info-head");
var quizInfoBody = document.querySelector(".quiz-info-body");
var quizBox = document.querySelector(".quiz-box");
var quizQuestion;
var quizAnswerBox;
var quizAnswerOne;
var quizAnswerTwo;
var quizAnswerThree;
var quizAnswerFour;
var currentIndex = 0;
var timeInterval;

var timeLeft = 5;

// checking local storage for current high score
var highScore = localStorage.getItem("highScore")
if (!highScore) {
  highScore = 0;
} else {
  highScore = parseInt(highScore);
};
console.log(highScore);

var userScore = 0
// localStorage.setItem()

// starting the quiz
startQuizButton.addEventListener("click", startCount);

// starting the quiz timer
function startCount() {

  // remove initial quiz info
  quizInfoHead.remove();
  quizInfoBody.remove();
  startQuizButton.remove();

  // putting in the countdown
  var header = document.querySelector("header");
  countdown = document.createElement("h2");
  countdown.className = "countdown";
  countdown.textContent = timeLeft;

  header.appendChild(countdown);

  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  timeInterval = setInterval(function () {
    if (timeLeft >= 1) {
      timeLeft--;
      countdown.textContent = `${timeLeft}`;
    } else {
      stopQuiz();
      // clearInterval(timeInterval);
      // countdown.textContent = "0";
      // quizTitle.textContent = "Game Over!"
    }
  }, 1000);
  questionsLoop();
};

// array for quiz questions and answers
var questionsAndAnswers = [{
  question: "Which of these is NOT a type of value in programming?",
  answerOne: "Boolean",
  answerTwo: "String",
  answerThree: "Integer",
  answerFour: "Balloon",
  correctAnswer: "Balloon",
}, {
  question: "Which of these is a correct example of camel case?",
  answerOne: "neverletMeGo",
  answerTwo: "joyLuckClub",
  answerThree: "InglouriousBasterds",
  answerFour: "cherryorchard",
  correctAnswer: "joyLuckClub",
}, {
  question: `How would you correctly call a function named "doThis"?`,
  answerOne: "doThis()",
  answerTwo: "dothis()",
  answerThree: "dothis();",
  answerFour: "doThis();",
  correctAnswer: "doThis();",
}, {
  question: "Do you love to code?",
  answerOne: "Yes!",
  answerTwo: "No way",
  answerThree: "Maybe?",
  answerFour: "Who's asking?",
  correctAnswer: "Yes!",
}];

// appending the questions and answer elements
var questionsLoop = function () {
  quizQuestion = document.createElement("h2");
  quizQuestion.className = "quiz-question";
  // quizQuestion.textContent = questionsAndAnswers[currentIndex].question;
  quizBox.appendChild(quizQuestion);

  quizAnswerBox = document.createElement("ul");

  quizAnswerOne = document.createElement("li");
  quizAnswerTwo = document.createElement("li");
  quizAnswerThree = document.createElement("li");
  quizAnswerFour = document.createElement("li");

  quizAnswerOne.className = "quiz-answer";
  quizAnswerTwo.className = "quiz-answer";
  quizAnswerThree.className = "quiz-answer";
  quizAnswerFour.className = "quiz-answer";

  quizBox.appendChild(quizAnswerBox);
  quizBox.appendChild(quizAnswerOne);
  quizBox.appendChild(quizAnswerTwo);
  quizBox.appendChild(quizAnswerThree);
  quizBox.appendChild(quizAnswerFour);

  quizAnswerOne.addEventListener("click", answerCheck);
  quizAnswerTwo.addEventListener("click", answerCheck);
  quizAnswerThree.addEventListener("click", answerCheck);
  quizAnswerFour.addEventListener("click", answerCheck);

  updateQuestions();
};

// checking if the user selected the right answer
var answerCheck = function (event) {

  if (event.target.textContent === questionsAndAnswers[currentIndex].correctAnswer) {
    userScore++
    quizQuestion.textContent = "Correct!";
  } else {
    timeLeft = timeLeft - 15;
    quizQuestion.textContent = "Wrong!";
  }

  currentIndex++
  updateQuestions();
};

// update the next question and answers
var updateQuestions = function () {
  if (currentIndex < questionsAndAnswers.length) {
    quizQuestion.textContent = questionsAndAnswers[currentIndex].question;
    quizAnswerOne.textContent = questionsAndAnswers[currentIndex].answerOne;
    quizAnswerTwo.textContent = questionsAndAnswers[currentIndex].answerTwo;
    quizAnswerThree.textContent = questionsAndAnswers[currentIndex].answerThree;
    quizAnswerFour.textContent = questionsAndAnswers[currentIndex].answerFour;
  } else {
    stopQuiz();
  }
};

// stop the quiz
var stopQuiz = function () {
  quizAnswerOne.remove();
  quizAnswerTwo.remove();
  quizAnswerThree.remove();
  quizAnswerFour.remove();
  clearInterval(timeInterval);

  countdown.textContent = "0";
  quizTitle.textContent = "Game Over!"
  quizQuestion.textContent = `You scored ${userScore} points.`;

  quizInfoBody.textContent = "Enter your initials to save your score:";
  quizBox.appendChild(quizInfoBody);

  var userNameInput = document.createElement("input");
  quizBox.appendChild(inputBox);

  // check if user score is greater than current high score
  if (userScore > highScore) {
    highScore = userScore;
  }

  var userObject = {
    name: userNameInput,
    score: userScore,
  };

  localStorage.setItem("highScore", highScore);
  localStorage.setItem("userScore", userObject); 
}


