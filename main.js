
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
/*----- app's state (variables) -----*/
//changes that are being tracked /data at a given moment in time

// let scores, 
// let holes,
// let pits, 
// let winner 


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

    playerTurn = null;
    
 
    winner = null;
    render()

}
//intialze our data to start the game 

//CONTROLLER// 

//How we will decide whose turn it is 
//Possibly a foreach function
//possibly turn this function whoseTurn into a class and place in playerOption function 
board.forEach(function (boar, idx){
    if(boar === player1.holes > 0 && player1.holes <= 6){
        return start;
    }
     else {
         return player2.holes
    });


function playerOption(){
    if (idx > 0 && idx >= 6){
       
    }
     else {
        return playerTurn.p2
     }
    };



function start(evt) {
    let clickedHole = evt.target;
    let clickedHoleIndex = player1.holes;
    
     
     render()
}
    
function finalResult(){}

function winner(){}

//VIEW 
// allows user to click on a hole on their side 
function selectHole( board, player){
    return 
}

//allows the distribution of the marbles 
function hole(){
   if (playerTurn){
       for (let i = 1; i < 7; i++)
   }
}
function render( ){
  p1ScoreEl.textContent = scores.p1;
  p2ScoreEl.textContent = scores.p2;

}


 initialize();
 render();