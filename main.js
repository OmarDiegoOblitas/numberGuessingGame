let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrhi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

function checkGuess() {
  guessSubmit.addEventListener("click", checkGuess);

  let userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "intentos anteriores";
  }
  guesses.textContent += userGuess + "";

  if (userGuess === randomNumber) {
    lastResult.textContent = "!Felicitaciones¡ !Lo Adivinaste¡";
    lastResult.getElementsByClassName.backgroundColor = "green";
    lowOrhi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "Fin de juego";
    setGameOver();
  } else {
    lastResult.textContent = "!Incorrecto¡";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrhi.textContent = "!El numero es muy bajo¡";
    } else if (userGuess > randomNumber) {
      lowOrhi.textContent = "!El numero es muy grande¡";
    }
  }
  guessCount++;
  guessField.value = "";
  guessField.focus();
}
function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Iniciar nuevo juego";
  document.body.append(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll(".resultParas p");
  for (let i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();

  lastResult.style.backgroundColor = "white";

  randomNumber = Math.floor(Math.random() * 100) + 1;
}
