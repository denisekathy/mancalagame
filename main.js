
///MODEL/////
/*----- constants -----*/
// variables that are not going to be reassigned 
const hole;
const pit;
const player1 = //Player 1
const player2 = //Player 2



/*----- app's state (variables) -----*/
//changes that are being tracked /data at a given moment in time

let scores, 
let holes,
let pits, 
let winner 


/*----- cached element references -----*/
//html elements to be manipulated 

const p1scoreEl = document.querySelector("#player1-score");
const p2scoreEl = document.querySelector("#player2-score");
const hole  = document.querySelectorAll(".col hole");
const pit = document.querySelectorAll(".mancala");

const p1resultsEl = document.querySelector("#player1-score");
const p2resultsEl = document.querySelector("player2-score");

document.querySelectorAll(".col hole").addEventListener
("click", start);

/*----- event listeners -----*/
//for the holes
document.querySelectorAll(".col hole").addEventListener
("click", start);
/*----- functions -----*/
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

function winner(){}

//VIEW 
function board(){}
function hole(){}
function render( ){}
 //this function will be called whenever the state is changed 
 //changes the apps state  

 initialize()
 render();