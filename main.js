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

<<<<<<< HEAD
/*----- cached element references -----*/
<<<<<<< HEAD
//html elements to be manipulated 

const p1scoreEl = document.querySelector("#player1-score");
const p2scoreEl = document.querySelector("#player2-score");
const hole  = document.querySelectorAll(".col hole");
const pit = document.querySelectorAll(".mancala");

const p1resultsEl = document.querySelector("#player1-score");
const p2resultsEl = document.querySelector("player2-score");

document.querySelectorAll(".col hole").addEventListener
("click", start);
=======
//html elements to be manipulated
=======
let pickedUpMarbles;
>>>>>>> main

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
>>>>>>> main

<<<<<<< HEAD
/*----- event listeners -----*/
//for the holes
document.querySelectorAll(".col hole").addEventListener
("click", start);
/*----- functions -----*/
<<<<<<< HEAD
function initialize(){
//intialze our data to start the game 

//CONTROLLER// 

//How we will decide whose turn it is 
//Possibly a foreach function
//possibly turn this function whoseTurn into a class and place in playerOption function 
board.forEach(function (whoseTurn, idx){
    if (idx =< 6 && idx !== 7){
        return playerTurn.p1
    }
     else {
        return playerTurn.p2
     }
    });

function playerOption(){
    if (idx =< 6 && idx !== 7){
       //allow player to pick these options 
    }
     else {
        return playerTurn.p2
     }
    };

function start() {
    let board = [0 ,4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4];
const playerTurn = {
    p1: "Player1",
    p2: "Player2"
};
}
    
function finalResult(){}
=======
=======

document.querySelectorAll(".col hole").addEventListener
("click", start);

>>>>>>> main
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
>>>>>>> main


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

<<<<<<< HEAD
//VIEW 
function board(){}
function hole(){}
function render( ){}
 //this function will be called whenever the state is changed 
 //changes the apps state  

 initialize()
 render();
=======
initialize();
<<<<<<< HEAD
// depositMarbles();
// pickUpMarbles();
// whoseTurn();
// getWin();

//VIEW
// // allows user to click on a hole on their side
// function selectHole( board, player){
//     return
// }

// //allows the distribution of the marbles
// function hole(){
//    if (playerTurn){
//        for (let i = 1; i < 7; i++)
//    }
// }
//   let holesSelected = function (holeSelectedIndex, pits) {
//     let i = 0;
//     let amountOfMarbles = board[startIndex];
//     let repeat = 0;
//     let aHole = 0;

//     board[holeSelectedIndex] = 0;

//     //Loop around the holes"arrays" beginning with the one selected and the amount picked up
//     for (let i = holeSelectedIndex + 1; i < holeSelectedIndex + 1 + amountOfMarbles; i++) {
//       aHole = i % playerHoles; //go around board
//       board[aHole] = board[aHole] + 1; // board[Hole] += 1
//     }
//     if (aHole === player1.pit) {
//       let repeat = true;
//       return repeat;
//     }

// };

// let boardStart = function () {
//   for (let i = 0; i < board; i++) {
//     if (i == player1.pit || i == player2.pit) {
//       board[i] = 0;
//     } else {
//       board[i] = holes;
//     }
//   }
// };

// let pickUpMarbles = function (startIndex) {
//   for (let i = 0; i < playerHoles; i++) {
//     let aHole = i + startIndex;
//     let amountOfMarbles = board[aHole];

//   }
// }
>>>>>>> main
=======
>>>>>>> main
