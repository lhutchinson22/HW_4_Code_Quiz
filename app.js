console.log("sanity check");

// timer header
let timerCountdown = document.querySelector("#timer");

// timer function
let count = 10;

function startTimerCoundown() {
  var timer = setInterval(function () {
    // displays timer into the html
    document.getElementById("timer").innerHTML = count;
    count--;
    console.log(count);
    if (count === 0) {
      console.log("STOOOOOPPED");
      timerCountdown.textContent = "YOU LOSE.";
      clearInterval(timer);
    }
  }, 1000);
}

startTimerCoundown();

// quiz questions
var myQuestions = [
  {
    question: "Commonly used data types do not include",
    answers: {
      a: "strings",
      b: "booleans",
      c: "alerts",
      d: "numbers",
    },
    correctAnswer: "c",
  },
  {
    question: "The condition of an IF / ELSE statement is closed with___",
    answers: {
      a: "quotes",
      b: "curly brackets",
      c: "parenthesis",
      d: "square function",
    },
    correctAnswer: "c",
  },
  {
    question: "Arrays in javascript can be used to store",
    answers: {
      a: "numbers and strings",
      b: "other arrays",
      c: "booleans",
      d: "all of the above",
    },
    correctAnswer: "d",
  },
  {
    question:
      "String values must be enclosed with___ when being assigned to variables",
    answers: {
      a: "commas",
      b: "curly brackets",
      c: "quotes",
      d: "parentheses",
    },
    correctAnswer: "c",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is",
    answers: {
      a: "Javascript",
      b: "terminal / bash",
      c: "for loops",
      d: "console.log",
    },
    correctAnswer: "d",
  },
];

//using jquery for the submit button to run a function
$(document).ready(function () {
  $("#submit").on("click", function () {
    console.log("You clicked a button!!");
  });
});
