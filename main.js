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


let playerHoles = 14;
/*----- app's state (variables) -----*/
//changes that are being tracked /data at a given moment in time

// let scores = 0;
// let holes = 4;
// let pits = 0;
// let winner = null;

/*----- cached element references -----*/
//html elements to be manipulated

const p1ScoreEl = document.querySelector("#player1-score");
const p2ScoreEl = document.querySelector("#player2-score");
const holes = document.querySelectorAll(".hole"); //need to confirm this is the right syntax
const pit = document.querySelectorAll(".mancala");

const p1ResultsEl = document.querySelector("#player1-score");
const p2ResultsEl = document.querySelector("player2-score");

const hole0= document.getElementById("0");
const hole1= document.getElementById("1");
const hole2= document.getElementById("2");
const hole3= document.getElementById("3");
const hole4= document.getElementById("4");
const hole5= document.getElementById("5");
const hole6= document.getElementById("6");
const hole7= document.getElementById("7");
const hole8= document.getElementById("8");
const hole9 = document.getElementById("9");
const hole10 = document.getElementById("10");
const hole11 = document.getElementById("11");
const hole12 = document.getElementById("12");
const hole13= document.getElementById("13");

/*----- event listeners -----*/
//for the holes
holes.forEach((hole) => hole.addEventListener("click", start));

/*----- functions -----*/
function initialize() {
  scores = {
    p1: 0,
    p2: 0,
  };

  // Amount of tokens in each hole at the beginning//
  let holes = 4; // 4 marbles per hole
  let pits = 0;

  playerTurn = null;
  winner = null;
  render();
}

function pickUpMarbles(){
// Player 1 goes first and can only pick up marbles from indexes 1-6 and not indexes 0 or 7
//Player 2 can only pick up marbles from indexes 8-13 and not indexes 0 or 7
}

function depositMarbles{
//Based on the number of pickedUpMarbles, deposit one marble into each hole starting from indexes 1-6 except at index 7 for Player 1 
}//Based on the number of pickedUpMarbles, deposit one marble into each hole  starting from indexes 8-13 except at index 0 for Player 2 
//Do both of these in a counter-clockwise fashion

function whoseTurn(){
    //If player 1's marbles last land in hole with an index of 0, repeat turn 
    //If player 1's marbles last land in holes with indexes of 8-13, then it is Player 2's turn
    //If player 2's marbles last land in a hole with an index of 7, repeat turn 
    //If player 2's marbles last land in holes with indexes of 1-6, then in is Player 2's turn
} 



function start(evt) {
//   let holeSelected = evt.target;
//   let holeSelectedIndex = parseInt(holeSelected.id);
  


  render();
}

function getWin() {
  // Compare player 1 score to player 2 score and the larger amount will be the winner
  //Prompts with who is the winner and who is the loser 
}


function render() {
  p1ScoreEl.textContent = scores.p1;
  p2ScoreEl.textContent = scores.p2;
}

initialize();
render();


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
 
// function finalResult(){}