//again button
//random number..
//get input
//compaire with randome number

"use strict";

let currentHighScore = 0;
let highScore = 0;
let score = 20;

const hintElement = document.getElementById("hint");
const hintOriginal = hintElement.innerHTML;

const myNumberElement = document.getElementById("myNumber");
const myNumOriginal = myNumberElement.innerHTML;

const scoreElement = document.getElementById("score");
const highScoreElement = document.getElementById("highScore");

const containeElement = document.getElementById("container");
const containerOriginal = containeElement.style.backgroundColor;

let userInput;
let randomNumber;

// find randome and store
const findRandom = function () {
  randomNumber = Math.trunc(Math.random() * 21);
  console.log(randomNumber);
  return randomNumber;
};

randomNumber = findRandom();

document.getElementById("sendValue").onclick = function () {
  userInput = Number(document.getElementById("userInput").value);

  console.log(typeof userInput);

  //compair
  if (userInput < randomNumber) {
    hintElement.innerHTML = "📉 Too low..";
    score--;
  } else if (userInput > randomNumber) {
    hintElement.innerHTML = "📈 Too high";
    score--;
  } else {
    myNumberElement.innerHTML = userInput;
    hintElement.innerHTML = "🎊 Correct Number..!";
    containeElement.style.backgroundColor = "green";

    // set highScore and display
    currentHighScore = score;
    if (highScore >= currentHighScore) {
      highScoreElement.innerHTML = highScore;
    } else if (highScore < currentHighScore) {
      highScoreElement.innerHTML = score;
      highScore = currentHighScore;
    }
  }
  scoreElement.innerHTML = score;
};

//--- Again button----
document.getElementById("again").onclick = function () {
  score = 20;
  hintElement.innerHTML = hintOriginal;
  scoreElement.innerHTML = score;
  myNumberElement.innerHTML = myNumOriginal;
  document.getElementById("userInput").value = "";
  containeElement.style.backgroundColor = containerOriginal;
  randomNumber = findRandom();
};
