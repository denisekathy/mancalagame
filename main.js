let board = [0, 4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4];
const player1 = {
  holes: [1, 2, 3, 4, 5, 6],
  pit: [0],
};

const player2 = {
  holes: [8, 9, 10, 11, 12, 13],
  pit: [7],
};

prompts = ["Player 1 Wins!", "Tie Game!", "Player 2 Wins"];

let pickedUpMarbles;

const p1ScoreEl = document.querySelector("#player1-score");
const p2ScoreEl = document.querySelector("#player2-score");
const holes = document.querySelectorAll(".hole"); 
const pits = document.querySelectorAll(".mancala");

const p1ResultsEl = document.querySelector("#player1-score");
const p2ResultsEl = document.querySelector("player2-score");

const hole0 = document.getElementById("0");
const hole1 = document.getElementById("1");
const hole2 = document.getElementById("2");
const hole3 = document.getElementById("3");
const hole4 = document.getElementById("4");
const hole5 = document.getElementById("5");
const hole6 = document.getElementById("6");
const hole7 = document.getElementById("7");
const hole8 = document.getElementById("8");
const hole9 = document.getElementById("9");
const hole10 = document.getElementById("10");
const hole11 = document.getElementById("11");
const hole12 = document.getElementById("12");
const hole13 = document.getElementById("13");

let pHoles = [];
pHoles.push(
  hole0,
  hole1,
  hole2,
  hole3,
  hole4,
  hole5,
  hole6,
  hole7,
  hole8,
  hole9,
  hole10,
  hole11,
  hole12,
  hole13
);

const prompt = document.querySelector(".winnerPrompt");

holes.forEach((hole) => hole.addEventListener("click", playerTurn));


document.querySelectorAll(".col hole").addEventListener
("click", start);

function initialize() {
  scores = {
    p1: 0,
    p2: 0,
  };

  let marbles = 4; 
  let pits = 0;

  player1Turn = null;
  winner = null;
  render();
}

function playerTurn(evt) {

  let holeSelected = evt.target;
  let holeSelectedIndex = parseInt(holeSelected.id);

  pickUpMarbles = board[holeSelectedIndex];
 
  board[holeSelectedIndex] = 0;

  
  for (let i = 1; i <= pickUpMarbles; i++) {
    if (holeSelectedIndex + i > 13) {
      holeSelectedIndex -= holeSelectedIndex + i;
    }
    board[holeSelectedIndex + i] += 1;
  }

  checkWin();
  render();
}

let player1Turn = true;
let player2Turn = false;

function checkWin() {

  if (board[0] === 10 && board[7] === 10) {
    prompt.textContent = prompts[1];
  } else if (board[0] >= 10 && board[7] < board[0]) {
    prompt.textContent = prompts[0];
  } else if (board[7] >= 10 && board[7] > board[0]) {
    prompt.textContent = prompts[2];
  }
  
}


function render() {
  hole0.textContent = board[0];
  hole1.textContent = board[1];
  hole2.textContent = board[2];
  hole3.textContent = board[3];
  hole4.textContent = board[4];
  hole5.textContent = board[5];
  hole6.textContent = board[6];
  hole7.textContent = board[7];
  hole8.textContent = board[8];
  hole9.textContent = board[9];
  hole10.textContent = board[10];
  hole11.textContent = board[11];
  hole12.textContent = board[12];
  hole13.textContent = board[13];

  p1ScoreEl.textContent = board[0];
  p2ScoreEl.textContent = board[7];
}

initialize();
