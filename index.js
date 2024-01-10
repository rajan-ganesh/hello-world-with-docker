const bodyElement = document.getElementById("body");
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
  console.log("new is ", newColor)
  bodyElement.style.backgroundColor = newColor;
}

function changeColor(color) {
  if (color != "random") {
    bodyElement.style.backgroundColor = color;
  } else {
    randomizeColor();
  }
}
