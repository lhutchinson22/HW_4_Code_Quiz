console.log("sanity check");

// JavaScript function that wraps everything
$(document).ready(function () {
  var highScore = 0;

  var timerCount = 100;
  var timerEl = document.querySelector("#timer");
  console.log(timerEl, timerCount);
  timerEl.textContent = timerCount;

  var timer = window.setInterval(function () {
    timerCount--;
    timerEl.textContent = timerCount;

    if (timerCount === 0) {
      clearInterval(timer);
    }
  }, 1000);

  $("#startButton").on("click", function () {
    $("#welcome-page").addClass("invisble");
    $("#show-question").removeClass("invisible");
    $("#show-answers").removeClass("invisible");
  });

  //questions[0].answers.a
  var questions = [
    {
      q: "Commonly used data types do not include:",
      answers: {
        a: "strings",
        b: "booleans",
        c: "alerts",
        d: "numbers",
      },
      correctAnswer: "c",
    },
    {
      q: "The condition of an IF / ELSE statement is closed with___:",
      answers: {
        a: "quotes",
        b: "curly brackets",
        c: "parenthesis",
        d: "square function",
      },
      correctAnswer: "c",
    },
    {
      q: "Arrays in javascript can be used to store:",
      answers: {
        a: "numbers and strings",
        b: "other arrays",
        c: "booleans",
        d: "all of the above",
      },
      correctAnswer: "d",
    },
    {
      q:
        "String values must be enclosed with___ when being assigned to variables:",
      answers: {
        a: "commas",
        b: "curly brackets",
        c: "quotes",
        d: "parentheses",
      },
      correctAnswer: "c",
    },
    {
      q:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      answers: {
        a: "Javascript",
        b: "terminal / bash",
        c: "for loops",
        d: "console.log",
      },
      correctAnswer: "d",
    },
  ];

  var questionsPointer = 0;

  var question = document.querySelector("#question");
  var optionA = document.querySelector("#optionA");
  var optionB = document.querySelector("#optionB");
  var optionC = document.querySelector("#optionC");

  function setQuestions() {
    if (questionsPointer === questions.length) {
      clearInterval(timer);
      alert("You are done with " + timerCount + " time left");
      $("#highScore").removeClass("invisible");
      console.log(highScore);
      $("#highScore").text("Highscore: " + highScore);
      return;
    }

    question.textContent = questions[questionsPointer].q;
    optionA.textContent = questions[questionsPointer].answers.a;
    optionB.textContent = questions[questionsPointer].answers.b;
    optionC.textContent = questions[questionsPointer].answers.c;
    optionD.textContent = questions[questionsPointer].answers.d;
  }
  setQuestions();

  optionA.addEventListener("click", function () {
    if (
      optionA.getAttribute("data-answer") ===
      questions[questionsPointer].correctAnswer
    ) {
      console.log("This is correct");
      highScore++;
    } else {
      console.log("wrong");
      timerCount -= 10;
    }

    questionsPointer++;
    setQuestions();
  });

  optionB.addEventListener("click", function () {
    if (
      optionB.getAttribute("data-answer") ===
      questions[questionsPointer].correctAnswer
    ) {
      console.log("This is correct");
      highScore++;
    } else {
      console.log("wrong");
      timerCount -= 10;
    }
    questionsPointer++;
    setQuestions();
  });

  optionC.addEventListener("click", function () {
    if (
      optionC.getAttribute("data-answer") ===
      questions[questionsPointer].correctAnswer
    ) {
      console.log("This is correct");
      highScore++;
    } else {
      console.log("wrong");
      timerCount -= 10;
    }
    questionsPointer++;
    setQuestions();
  });

  optionD.addEventListener("click", function () {
    if (
      optionD.getAttribute("data-answer") ===
      questions[questionsPointer].correctAnswer
    ) {
      console.log("This is correct");
      highScore++;
    } else {
      console.log("wrong");
      timerCount -= 10;
    }
    questionsPointer++;
    setQuestions();
  });
});
