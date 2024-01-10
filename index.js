const bodyElement = document.getElementById("body");
let intervalId;
let partying = false;
const colorArray = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "purple",
  "black",
  "lightblue",
  "lightgreen",
  "grey",
  "darkgrey",
  "lightgrey",
  "pink",
  "teal",
  "maroon",
];

let newColor;
function randomizeColor() {
  do {
    newColor = colorArray[Math.floor(Math.random() * colorArray.length)];
  } while (newColor == bodyElement.style.backgroundColor);
  console.log("old is", bodyElement.style.backgroundColor);
  console.log("new is ", newColor);
  bodyElement.style.backgroundColor = newColor;
}

function changeColor(color) {
  if (partying) {
    stopParty();
  }
  if (color != "random") {
    bodyElement.style.backgroundColor = color;
  } else {
    randomizeColor();
  }
}

function changeParty() {
  if (!partying) {
    partying = true;
    intervalId = setInterval(randomizeColor, 200);
    document.getElementById("party-button").innerHTML = "Relax";
  } else {
    stopParty();
  }
}

function stopParty() {
  document.getElementById("party-button").innerHTML = "Party!";
  partying = false;
  clearInterval(intervalId);
}
