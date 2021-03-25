
///MODEL/////
/*----- constants -----*/
// variables that are not going to be reassigned 
let board = [0 ,4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4];
const player1 = {
    holes: [1, 2, 3, 4, 5, 6],
    pit : [0]
};

const player2 = {
    holes: [8, 9, 10, 11, 12, 13],
    pit: [7]
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
const holes  = document.querySelectorAll(".hole"); //need to confirm this is the right syntax
const pit = document.querySelectorAll(".mancala");

const p1ResultsEl = document.querySelector("#player1-score");
const p2ResultsEl = document.querySelector("player2-score");

const hole1 = document.getElementById("#h2");
const hole2 = document.getElementById("#h3");
const hole3 = document.getElementById("#h3");
const hole4 = document.getElementById("#h4");
const hole5 = document.getElementById("#h5");
const hole6 = document.getElementById("#h6");
const hole7 = document.getElementById("#h7");
const hole8 = document.getElementById("#h8");
const hole9 = document.getElementById("#h9");
const hole10 = document.getElementById("#h10");
const hole11 = document.getElementById("#h11");
const hole12 = document.getElementById("#h12");

/*----- event listeners -----*/
//for the holes
holes.forEach(hole =>
    hole.addEventListener("click", start) );

/*----- functions -----*/

function initialize(){
    scores = {
        p1: 0,
        p2: 0,
    };

    // Amount of tokens in each hole at the beginning// 
    let holes = 4; // 4 marbles per hole 
    let pits = 0;

    playerTurn = null;
    
 let boardStart = function(){
     for ( let i = 0; i < board; i++){ 
        if( i == player1.pit || i == player2.pit){
            board[i]= 0; 
        }
        else {
            board[i] = holes;
        }
 };

 let pickUpMarbles = funtion(startIndex){
     var i = 0;
     for (i = 0; i < playerHoles; i++) {
         let aHole = i + startIndex;

        //  if(startIndex === player2) {   //not sure if this function is needed 
        //      aHole = board.length - 2 - i;
        //  }
         let amountOfMarbles = board[aHole];
     }
 }
    winner = null;
    render()

}


//How we will decide whose turn it is 
//Possibly a foreach function
//possibly turn this function whoseTurn into a class and place in playerOption function 
// board.forEach(function (boar, idx){
//     if(boar === player1.holes > 0 && player1.holes <= 6){
//         return start;
//     }
//      else {
//          return player2.holes
//     });


let playerOption = function(){
    let option = parseInt();

    if (option[holes] === 0) {

    }
    else if (holeSelected(option, player1.pit)){
        if (gameOver()) }
        //find a way to see if the game is over 
    }

    else {
        player.2 turn
    }
}
    
};

// // Decide wha
// function playerOption(){
//     if (idx > 0 && idx >= 6){
       
//     }
//      else {
//         return playerTurn.p2
//      }
//     };



function start(evt) {
    let holeSelected = evt.target;
    let holeSelectedIndex = player1.holes;
    
   let holeSelected = function(startIndex, pits){
       let i = 0;
       let amountOfMarbles = board[startIndex]; // Amount of tokes in the selected bin
       let repeat = 0;
       let aHole = 0;

       board[startIndex] = 0;
       
    //Loop around the holes"arrays" beginning with the one selected and the amount picked up 
    for ( i = startIndex + 1; i < startIndex + 1 + amountOfMarbles; i++) {
        aHole = i % playerHoles; //go around board
        board[aHole] = board[aHole} + 1; // board[Hole] += 1
    }
      if( aHole === player1.pit) {
          let repeat = true;
          return repeat;
      }

    
   }
   

     render()
}
    
// function finalResult(){}

function winner(){
    let i = 0;
    let player1.pit = 0;
    let player2.pit = 1;
    
    for(i = 0; i < 6; i++){
        if ( player1.pit > player2.pit){
            alert("Player 1 Wins");
        }
        else {
            alert("Player 2 Wins");
        }
    }
}

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
function render( ){
  p1ScoreEl.textContent = scores.p1;
  p2ScoreEl.textContent = scores.p2;

}


 initialize();
 render();