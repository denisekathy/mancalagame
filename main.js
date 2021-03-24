
///MODEL/////
/*----- constants -----*/
// variables that are not going to be reassigned 
let board = [0 ,4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4];
const playerTurn = {
    p1: "Player1",
    p2: "Player2"
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
const hole  = document.querySelectorAll(".col hole");
const pit = document.querySelectorAll(".mancala");

const p1ResultsEl = document.querySelector("#player1-score");
const p2ResultsEl = document.querySelector("player2-score");

document.querySelectorAll(".col hole").addEventListener
("click", start);

/*----- event listeners -----*/
//for the holes
document.querySelectorAll(".col hole").addEventListener
("click", start);
/*----- functions -----*/
function initialize(){
    scores = {
        p1: 0,
        p2: 0,
    };

    playerTurn= null;
    

    winner = null;
    render()

}
//intialze our data to start the game 

//CONTROLLER// 

//How we will decide whose turn it is 
//Possibly a foreach function
//possibly turn this function whoseTurn into a class and place in playerOption function 
board.forEach(function (whoseTurn, idx){
    if (idx > 0 && idx <= 6){
        playerTurn = 1;
        return playerTurn
    }
     else {
         playerTurn = -1;
        return playerTurn
     }
    });

function playerOption(){
    if (idx > 0 && idx >= 6){
       //allow player to pick these options 
    }
     else {
        return playerTurn.p2
     }
    };

function start() {
      playerTurn = 1;
    
     render()
}
    
function finalResult(){}

function winner(){}

//VIEW 
function board(){}
function hole(){}
function render( ){
  p1ScoreEl.textContent = scores.p1;
  p2ScoreEl.textContent = scores.p2;

  //do I need to render the intial game board titled let board or based on my results

}


 initialize();
 render();