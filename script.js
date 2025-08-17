let randomNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
  let userGuess = document.getElementById("guess").value;

  if (userGuess == randomNumber) {
    document.getElementById("result").textContent = "WINNER!";
    document.getElementById("result").className = "winner";
  } else {
    document.getElementById("result").textContent = "lose! The number was " + randomNumber;
    document.getElementById("result").className = "lose";
  }
  document.getElementById("doneBtn").style.display = "none";
  document.getElementById("tryAgainBtn").style.display = "inline-block";
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    document.getElementById("guess").value = "";
    document.getElementById("result").textContent = "";
    document.getElementById("result").className = "";
    document.getElementById("doneBtn").style.display = "inline-block";
    document.getElementById("tryAgainBtn").style.display = "none";
}
    