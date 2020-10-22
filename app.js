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

//using jquery for the submit button to run a function
$(document).ready(function () {
  $("#submit").on("click", function () {
    console.log("You clicked a button!!");
  });
});
