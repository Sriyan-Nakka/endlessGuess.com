const playSPBtn = document.getElementById("playSPButton");
const playMPBtn = document.getElementById("playMPButton");
const resetBtn = document.getElementById("resetButton");
const chooseButton = document.querySelectorAll(".chooseButton");
const modeContainer = document.querySelector("#modeContainer");
const gameContainer = document.querySelector("#gameContainer");
const chooseContainer = document.querySelector("#chooseContainer");
const numbersDiv = document.querySelector("#numbers");
const multiplayerNames = document.querySelector("#multiplayerNames");
const result = document.querySelector("#result");
const pointsSpan = document.querySelector("#pointsSpan");
const chancesLeftSpan = document.querySelector("#chancesLeft");

const namesForm = document.getElementById("namesForm");
const singleplayerOverview = document.getElementById("singleplayerOverview");
const multiplayerOverview = document.getElementById("multiplayerOverview");
const player1Name = document.getElementById("player1Name");
const player2Name = document.getElementById("player2Name");

let player1 = "";
let player2 = "";

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");
const numbers = document.querySelectorAll(".number");

let singleplayerMode = true;
let numbersToChooseFrom = 2;
let chancesLeft = 3;
let points = 0;

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
  chancesLeft = 3;
  chancesLeftSpan.textContent = chancesLeft;
  points = 0;
  pointsSpan.textContent = points;

  if (singleplayerMode) {
    chooseContainer.style.display = "block";
  } else if (!singleplayerMode) {
    multiplayerNames.showModal();
  }
}

namesForm.addEventListener("submit", (e) => {
  e.preventDefault();
  player1 = player1Name.value;
  player2 = player2Name.value;
  multiplayerNames.close();
  chooseContainer.style.display = "block";
});

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

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    numbersDiv.style.pointerEvents = "none";

    let selectedNumber = Number(number.dataset.number);
    let randNum = Math.floor(Math.random() * numbersToChooseFrom) + 1;
    if (randNum == selectedNumber) {
      console.log("Correct Number");
      points++;
      pointsSpan.textContent = points;
      result.textContent = "You are correct!";
      result.style.color = "greenyellow";
      setTimeout(() => {
        numbersDiv.style.pointerEvents = "auto";
        result.textContent = "";
        result.style.color = "white";
      }, 2000);
    } else {
      chancesLeft--;
      chancesLeftSpan.textContent = chancesLeft;
      if (chancesLeft <= 0) {
        result.textContent = `Your chances are over, you lost... Try again`;
        result.style.color = "lightcoral";
        numbersDiv.style.display = "none";
        resetBtn.style.display = "none";
        setTimeout(() => {
          numbersDiv.style.pointerEvents = "auto";
          numbersDiv.style.display = "flex";
          gameContainer.style.display = "none";
          resetBtn.style.display = "inline-block";
          modeContainer.style.display = "block";
          result.textContent = "";
          result.style.color = "white";
        }, 2000);
      } else {
        points = points - 2;
        pointsSpan.textContent = points;
        result.textContent = `You are wrong... The number was ${randNum}, guess another number.`;
        result.style.color = "red";
        setTimeout(() => {
          numbersDiv.style.pointerEvents = "auto";
          result.textContent = "";
          result.style.color = "white";
        }, 2000);
      }
    }
  });
});
