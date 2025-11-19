const colorCode = document.getElementById("color-code");
const optionCont = document.getElementById("options-container");
const scoreI = document.getElementById("score");
let randomColor = null;

let score = 0;

function gererateRand(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function gererateRandColorRGB() {
  const red = gererateRand(0, 255);
  const green = gererateRand(0, 255);
  const blue = gererateRand(0, 255);
  return `rgb(${red},${green},${blue})`;
}

function incrScore() {
  score += 1;
  scoreI.innerText = score;
}

function validateResult(event) {
  const selectedColor = event.target.style.backgroundColor;

  if (selectedColor === randomColor) {
    incrScore();
  } else {
    score = 0;
    scoreI.innerText = score;
  }

  window.localStorage.setItem("score", score);
  startGame();
}

function startGame() {
  score = Number(localStorage.getItem("score")) || 0;
  scoreI.innerText = score;

  optionCont.innerHTML = "";
  randomColor = gererateRandColorRGB();
  colorCode.innerText = randomColor;

  const ansIdx = gererateRand(0, 5);

  for (let i = 0; i < 6; i++) {
    const div = document.createElement("div");
    div.addEventListener("click", validateResult);
    div.style.backgroundColor = i === ansIdx ? randomColor : gererateRandColorRGB();
    optionCont.append(div);
  }
}


function startGame() {
  score =Number( window.localStorage.getItem("score")) ?? 0;
  scoreI.innerText = score;
  optionCont.innerHTML = null;
  randomColor = gererateRandColorRGB();
  colorCode.innerText = randomColor;
  const ansIdx = gererateRand(0, 5);
  for (let i = 0; i < 6; i++) {
    const div = document.createElement("div");
    div.addEventListener("click", (e) => validateResult(e));
    div.style.backgroundColor =
      i === ansIdx ? randomColor : gererateRandColorRGB();
    optionCont.append(div);
  }
}

window.addEventListener("load", () => startGame());

console.log(gererateRandColorRGB());
