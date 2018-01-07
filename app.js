/*jslint for:true */
// variables
var numSquares = 6;
var colors = [];
var pickedColor;
// selectors
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById('colorDisplay');
var message = document.getElementById('message');
var h1 = document.querySelector('h1');
// buttons
var resetButton = document.getElementById('reset');
var modeButtons  = document.querySelectorAll(".mode");

init();

function init() {
 // mode buttons event listeners
 setUpModeButtons();
 // add event listener for the squares and their logik
 setUpSquares();
 // reset the game
 reset();
}

function setUpModeButtons(){
 for (var i = 0; i < modeButtons.length; i++) {
  // creates a click event listener
  modeButtons[i].addEventListener("click", function (argument) {
   // removes the selected class from modeButtons
   modeButtons[0].classList.remove("selected");
   modeButtons[1].classList.remove("selected");
   // adds the selceted class to the button that was cliked
   this.classList.add("selected");
   // update the number of squares to show depending on the buttoncliked
   this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
   // reset the game according to the number of squares
   reset();
  })
 }
}

function setUpSquares(){
 for (var i = 0; i < squares.length; i++) {
  // add initial colors
  squares[i].style.backgroundColor = colors[i];
  // add click listener
  squares[i].addEventListener("click", function () {
   // grab color of picked square
   var clikedColor = this.style.backgroundColor;
   // compare to the picked color
   if (clikedColor === pickedColor) {
    message.textContent = "Correct";
    resetButton.textContent = "Play Again";
    h1.style.backgroundColor =clikedColor;
    changeColors();
   }else{
    // make the square fade away
    this.style.backgroundColor = '#232323';
    message.textContent = "Try Again";
   }
  })
 }
}

function reset() {
// generate all new colors
 colors = generateRandomColors(numSquares);
 // pick a new random color form array
 pickedColor = pickColor();
 // change color display to the new color
 colorDisplay.textContent = pickedColor;
 // changes the text of the button
 resetButton.textContent = "new colors"
 // changes the message
 message.textContent = "";
 // change colors of squares or make then disapear
 for (var i = 0; i < squares.length; i++){
  if (colors[i]) {
   squares[i].style.backgroundColor = colors[i];
   squares[i].style.display = "block";
  }else{
   squares[i].style.display = "none";
  }
 }
 h1.style.backgroundColor = 'steelblue';
}

resetButton.addEventListener("click", function() {
 reset();
})

function changeColors() {
 // make all square the same color
 for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = pickedColor;
 }
}

function pickColor() {
 // produce a random number
 var random = Math.floor(Math.random() * colors.length);
 return colors[random];
 // assign that number a color
}


function generateRandomColors(number) {
 // make and array
 var arr = []
 // repeat num times
 for (var i = 0; i < number; i++) {
 // add number of random colors to the array
  arr.push(randomColor());
 }
 // return that array
 return arr
}

function randomColor() {
 // red colors
 var red = Math.floor(Math.random() *256);
 // green colors
 var green = Math.floor(Math.random() *256);
 // blue colors
 var blue = Math.floor(Math.random() *256);
 // Rgb
 return "rgb(" + red + ", " + green + ", " + blue + ")";
}

