const playSPBtn = document.getElementById("playSPButton");
const playMPBtn = document.getElementById("playMPButton");
const resetBtn = document.getElementById("resetButton");
const chooseButton = document.querySelectorAll(".chooseButton");
const modeContainer = document.querySelector("#modeContainer");
const gameContainer = document.querySelector("#gameContainer");
const chooseContainer = document.querySelector("#chooseContainer");

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");

let singleplayerMode = true;
let numbersToChooseFrom = 2;

resetBtn.addEventListener("click", resetGame);
playSPBtn.addEventListener("click", () => {
  singleplayerMode = true;
  startGame(singleplayerMode);
});
playMPBtn.addEventListener("click", () => {
  singleplayerMode = false;
  startGame(singleplayerMode);
});

function resetGame() {
  gameContainer.style.display = "none";
  modeContainer.style.display = "block";
}

function startGame(singleplayerMode) {
  modeContainer.style.display = "none";
  if (singleplayerMode) {
    chooseContainer.style.display = "block";
  } else if (!singleplayerMode) {
    //todo: write multiplayer names then numbers choosing code
  }
}

chooseButton.forEach((button) => {
  button.addEventListener("click", () => {
    chooseContainer.style.display = "none";

    numbersToChooseFrom = Number(button.dataset.numbers);
    console.log(numbersToChooseFrom);
    numbersDisplay(numbersToChooseFrom);
  });
});

function numbersDisplay(numbersToChooseFrom) {
  num1.style.display = "block";
  if (numbersToChooseFrom == 2) {
    num2.style.display = "block";
    num3.style.display = "none";
    num4.style.display = "none";
    num5.style.display = "none";
  } else if (numbersToChooseFrom == 3) {
    num2.style.display = "block";
    num3.style.display = "block";
    num4.style.display = "none";
    num5.style.display = "none";
  } else if (numbersToChooseFrom == 4) {
    num2.style.display = "block";
    num3.style.display = "block";
    num4.style.display = "block";
    num5.style.display = "none";
  } else if (numbersToChooseFrom == 5) {
    num2.style.display = "block";
    num3.style.display = "block";
    num4.style.display = "block";
    num5.style.display = "block";
  }
  initiateGame();
}

function initiateGame(numbersToChooseFrom) {
  gameContainer.style.display = "block";
}
