// global variables for DOM elements3
var body = document.body;
var quizTitle = document.querySelector(".quiz-title");
var countdown = document.querySelector(".countdown");
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

var timeLeft = 60;

var highScore = 0
localStorage.setItem("highScore", 0);

var userScore = 0
// localStorage.setItem()

startQuizButton.addEventListener("click", startCount);

function startCount() {

  quizInfoHead.remove();
  quizInfoBody.remove();
  startQuizButton.remove();

  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      countdown.textContent = `${timeLeft}`;
      timeLeft--;
    } else if (timeLeft === 1) {
      countdown.textContent = `${timeLeft}`;
      timeLeft--;
    } else if (timeLeft === 0) {
      clearInterval(timeInterval);
      countdown.textContent = "0";
      quizTitle.textContent = "Game Over!"
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
  question: `How would you correctly call a function named "doTHis"?`,
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

// question and answers function loop

var questionsLoop = function () {
  quizQuestion = document.createElement("h2");
  quizQuestion.className = "quiz-question";
  quizQuestion.textContent = questionsAndAnswers[currentIndex].question;
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

  quizAnswerOne.textContent = questionsAndAnswers[currentIndex].answerOne;
  quizAnswerTwo.textContent = questionsAndAnswers[currentIndex].answerTwo;
  quizAnswerThree.textContent = questionsAndAnswers[currentIndex].answerThree;
  quizAnswerFour.textContent = questionsAndAnswers[currentIndex].answerFour;

  quizBox.appendChild(quizAnswerBox);
  quizBox.appendChild(quizAnswerOne);
  quizBox.appendChild(quizAnswerTwo);
  quizBox.appendChild(quizAnswerThree);
  quizBox.appendChild(quizAnswerFour);

  quizAnswerOne.addEventListener("click", answerCheck);
  quizAnswerTwo.addEventListener("click", answerCheck);
  quizAnswerThree.addEventListener("click", answerCheck);
  quizAnswerFour.addEventListener("click", answerCheck);

};

var answerCheck = function(event) {
  console.log(event.target);
  console.log(event.target.textContent);

  if (event.target.textContent === questionsAndAnswers[currentIndex].correctAnswer) {
    userScore++
    console.log(userScore);
    quizQuestion.textContent = "Correct!";
  } else {
    timeLeft = timeLeft - 15;
    quizQuestion.textContent = "Wrong!";
  }

  currentIndex++



};
