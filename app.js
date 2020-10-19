console.log("sanity check");

// timer header
let timerCountdown = document.querySelector("#timer");

// timer function
let count = 75;
function startTimerCoundown() {
  var timer = setInterval(function () {
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
