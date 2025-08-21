let randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

function checkGuess() {
  attempts++;
  document.getElementById("attempts").textContent = "Attempts: " + attempts;

  let userGuess = document.getElementById("guess").value;
  if (userGuess == randomNumber) {
    document.getElementById("result").textContent = "WINNER!";
    document.getElementById("result").className = "winner";
  } else {
    document.getElementById("result").textContent =
      "LOSE! The number was " + randomNumber;
    document.getElementById("result").className = "lose";
  }

 

  document.getElementById("doneBtn").style.display = "none";
  document.getElementById("tryAgainBtn").style.display = "inline-block";
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 10) + 1;
  attempts = 0;

  document.getElementById("guess").value = "";
  document.getElementById("result").textContent = "";
  document.getElementById("result").className = "";
  document.getElementById("attempts").textContent = "Attempts: " + attempts;

  document.getElementById("doneBtn").style.display = "inline-block";
  document.getElementById("tryAgainBtn").style.display = "none";
}
