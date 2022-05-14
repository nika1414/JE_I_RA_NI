console.log("JEIRANI");
document.getElementById("button").style.display = "none";
document.getElementById("tryAgain").style.display = "none";
document.getElementById("myPicture").style.display = "none";
document.getElementById("Reveal").style.display = "none";

const Won = (document.getElementById("Won").style.display = "none");
const Lost = (document.getElementById("Lost").style.display = "none");
const Tie = (document.getElementById("Tie").style.display = "none");

var myPix = new Array(
  "images/Hole.png",
  "images/Paper.png",
  "images/Scissors.png"
);
var randomNum = Math.floor(Math.random() * myPix.length);
var randPic = (document.getElementById("myPicture").src = myPix[randomNum]);

let hole = document.getElementById("hole");
let paper = document.getElementById("Paper");
let scissors = document.getElementById("Scissors");
let chooseAMove = document.getElementById("chooseAMove");
document.getElementById("willYouWin").style.display = "none";
let willYouWin = document.getElementById("willYouWin");
document.getElementById("questionMark").style.display = "none";

function ClickHole() {
  paper.style.display = "none";
  scissors.style.display = "none";
  chooseAMove.style.display = "none";
  willYouWin.style.display = "block";
  hole.style.transition = "0.6s";
  hole.style.height = "120px";
  hole.style.width = "420px";
  document.getElementById("questionMark").style.display = "block";
  document.getElementById("button").style.display = "block";
  document.getElementById("Reveal").style.display = "block";
  if (hole && randPic == "images/Hole.png") {
    document.getElementById("Tie").style.display = "block";
  } else if (hole && randPic == "images/Paper.png") {
    document.getElementById("Lost").style.display = "block";
  } else if (hole && randPic == "images/Scissors.png") {
    document.getElementById("Won").style.display = "block";
  }
  document.getElementById("willYouWin").style.display = "none";
}

function ClickPaper() {
  hole.style.display = "none";
  scissors.style.display = "none";
  chooseAMove.style.display = "none";
  willYouWin.style.display = "block";
  paper.style.transform = "translate(-250%, -50%)";
  paper.style.height = "300px";
  paper.style.width = "250px";
  paper.style.transition = "0.6s";
  document.getElementById("questionMark").style.display = "block";
  document.getElementById("Reveal").style.display = "block";
  document.getElementById("button").style.display = "block";

  if (paper && randPic == "images/Hole.png") {
    document.getElementById("Won").style.display = "block";
  } else if (paper && randPic == "images/Paper.png") {
    document.getElementById("Tie").style.display = "block";
  } else if (paper && randPic == "images/Scissors.png") {
    document.getElementById("Lost").style.display = "block";
  }
  document.getElementById("willYouWin").style.display = "none";
}

function ClickScissors() {
  paper.style.display = "none";
  hole.style.display = "none";
  chooseAMove.style.display = "none";
  willYouWin.style.display = "block";
  scissors.style.transform = "translate(-375%, -50%)";
  scissors.style.height = "200px";
  scissors.style.width = "250px";
  scissors.style.transition = "0.6s";
  document.getElementById("questionMark").style.display = "block";
  document.getElementById("Reveal").style.display = "block";
  document.getElementById("button").style.display = "block";

  if (scissors && randPic == "images/Hole.png") {
    document.getElementById("Lost").style.display = "block";
  } else if (scissors && randPic == "images/Paper.png") {
    document.getElementById("Won").style.display = "block";
  } else if (scissors && randPic == "images/Scissors.png") {
    document.getElementById("Tie").style.display = "block";
  }
  document.getElementById("willYouWin").style.display = "none";
}

function ShowMe() {
  document.getElementById("myPicture").style.display = "block";
  document.getElementById("questionMark").style.display = "none";
  document.getElementById("Reveal").style.display = "none";
  document.getElementById("button").style.display = "none";
  document.getElementById("tryAgain").style.display = "block";
}

function TryAgain() {}

console.log("Random Image is :" + randPic);

// //Winning Positions
// if (
//   (hole && randPic == "images/Scissors.png") ||
//   (paper && randPic == "images/Hole.png") ||
//   (scissors && randPic == "images/Paper.png")
// ) {
//   document.getElementById("Won").style.display = "block";
//   document.getElementById("willYouWin").style.display = "none";
// }

// //losing Positions
// if (
//   (hole && randPic == "images/Paper.png") ||
//   (paper && randPic == "images/Scissors.png") ||
//   (scissors && randPic == "images/Hole.png")
// ) {
//   document.getElementById("Lost").style.display = "block";
//   document.getElementById("willYouWin").style.display = "none";
// }

// //Tiing Positions
// if (
//   (hole && randPic == "images/Hole.png") ||
//   (paper && randPic == "images/Paper.png") ||
//   (scissors && randPic == "images/Scissors.png")
// ) {
//   document.getElementById("Tie").style.display = "block";
//   document.getElementById("willYouWin").style.display = "none";
// }
