///MODEL/////
/*----- constants -----*/
// variables that are not going to be reassigned
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
// let playerHoles = 14;
/*----- app's state (variables) -----*/
//changes that are being tracked /data at a given moment in time

// let scores = 0;
// let holes = 4;
// let pits = 0;
// let winner = null;
let pickedUpMarbles;

/*----- cached element references -----*/
//html elements to be manipulated

const p1ScoreEl = document.querySelector("#player1-score");
const p2ScoreEl = document.querySelector("#player2-score");
const holes = document.querySelectorAll(".hole"); //need to confirm this is the right syntax
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
/*----- event listeners -----*/
//for the holes
holes.forEach((hole) => hole.addEventListener("click", playerTurn));

/*----- functions -----*/
function initialize() {
  scores = {
    p1: 0,
    p2: 0,
  };

  // Amount of tokens in each hole at the beginning//
  let marbles = 4; // 4 marbles per hole
  let pits = 0;

  player1Turn = null;
  winner = null;
  render();
}

function playerTurn(evt) {
  //When the user clicks on a hole that is not an index of 0 or 7 the game will start based on indexes
  //   console.log(evt);
  let holeSelected = evt.target;
  let holeSelectedIndex = parseInt(holeSelected.id);

  //Store value from selected hole in  pickedUpMarbles variable
  pickUpMarbles = board[holeSelectedIndex];
  //The hole that is selected will now be set to 0
  board[holeSelectedIndex] = 0;

  //Deposit marbles into other holes
  for (let i = 1; i <= pickUpMarbles; i++) {
    console.log("this is i ", i);
    console.log("this is holeSelectedIndex + i ", holeSelectedIndex + i);
    if (holeSelectedIndex + i > 13) {
      holeSelectedIndex -= holeSelectedIndex + i;
      console.log("this is holeSelectedIndex ", holeSelectedIndex);
      // first time through i = 1 and holeSelectedIndex[11] and board[12] += 1
      // first time through i = 2 and holeSelectedIndex[11] and board[13] += 1
      // first time through i = 3 and holeSelectedIndex[11] and board[0] += 1
    }
    board[holeSelectedIndex + i] += 1;
    // console.log("this is i ", i);
    // console.log("This is holeSel ", holeSelectedIndex);
    // console.log("This is pickedUp ", pickUpMarbles);
  }

  console.log("board is ", board);
  //   console.log(board);
  checkWin();
  render();
}

let player1Turn = true;
let player2Turn = false;

// function spreadMarbles(){
// Player 1 goes first and can only pick up marbles from indexes 1-6 and not indexes 0 or 7
//  let player1Turn === true {
//      if(player1.holes === holeSelectedIndex && holeSelectedIndex !== player2.holes)
//  }

//  else{
//      player1Turn === false
//  };
// //Player 2 can only pick up marbles from indexes 8-13 and not indexes 0 or 7
// player2Turn === true {
//     if(player2.holes === holeSelectedIndex && holeSelectedIndex !== player1.holes)
// }
// else {
//     player2Turn === false
// };

// };

function depositMarble() {
  //Based on the number of pickedUpMarbles, deposit one marble into each hole starting from indexes 1-6 except at index 7 for Player 1
} //Based on the number of pickedUpMarbles, deposit one marble into each hole  starting from indexes 8-13 except at index 0 for Player 2
//Do both of these in a counter-clockwise fashion

function whoseTurn() {
  //If player 1's marbles last land in hole with an index of 0, repeat turn
  //If player 1's marbles last land in holes with indexes of 8-13, then it is Player 2's turn
  //If player 2's marbles last land in a hole with an index of 7, repeat turn
  //If player 2's marbles last land in holes with indexes of 1-6, then in is Player 2's turn
}

function checkWin() {
  // Winner will be first player to reach 10 in their pit
  // Compare player 1 score to player 2 score and the larger amount will be the winner

  if (board[0] === 10 && board[7] === 10) {
    prompt.textContent = prompts[1];
  } else if (board[0] >= 10 && board[7] < board[0]) {
    prompt.textContent = prompts[0];
  } else if (board[7] >= 10 && board[7] > board[0]) {
    prompt.textContent = prompts[2];
  }
  //Prompts with who is the winner and who is the loser
}

// console.log(pHoles[0]);
function render() {
  // for(let i = 0; i < board.length; i++) {
  //     pHoles[i].textContent = board[i];

  //     };

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
