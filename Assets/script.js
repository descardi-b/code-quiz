// global variables for DOM elements3
var body = document.body;
var quizTitle = document.querySelector(".quiz-title");
var countdown = document.querySelector(".countdown");
var startQuizButton = document.querySelector(".start-quiz");
var quizInfoHead = document.querySelector(".quiz-info-head");
var quizInfoBody = document.querySelector(".quiz-info-body");

startQuizButton.addEventListener("click", startCount);

function startCount() {
  var timeLeft = 60;

  quizInfoHead.remove();
  quizInfoBody.remove();
  startQuizButton.remove();

  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function() {
    if (timeLeft > 1) {
      countdown.textContent =`${timeLeft}`;
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
};

// array for quiz questions and answers

var questionsAndAnswers = [{
  question: "Which of these is NOT a type of value in programming?",
  answerOne: "Boolean",
  answerTwo: "String",
  answerThree: "Integer",
  answerFour: "Balloon",
},{
  question: "Which of these is a correct example of camel case?",
  answerOne: "neverletMeGo",
  answerTwo: "joyLuckClub",
  answerThree: "InglouriousBasterds",
  answerFour: "cherryorchard",
},{
  question: `How would you correctly call a function named "doTHis"?`,
  answerOne: "doThis()",
  answerTwo: "dothis()",
  answerThree: "dothis();",
  answerFour: "doThis();",
}, {
  question: "Do you love to code?",
  answerOne: "Yes!",
  answerTwo: "No way",
  answerThree: "Maybe?",
  answerFour: "Who's asking?",
}];
