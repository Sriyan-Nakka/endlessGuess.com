const playBtn = document.getElementById("playButton");
const resetBtn = document.getElementById("resetButton");
const gameContainer = document.querySelector("#gameContainer");

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");

resetBtn.addEventListener("click", resetGame);
playBtn.addEventListener("click", playGame);

function resetGame() {}

function playGame() {
  gameContainer.style.display = "block";
}
