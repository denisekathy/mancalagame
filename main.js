
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
const hole  = document.querySelectorAll(".cole hole");
const pit = document.querySelectorAll(".mancala");


/*----- event listeners -----*/
//button to play game 



/*----- functions -----*/
function initialize(){
//intialze our data to start the game 
let board = [0 ,4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4];
let playerTurn = {
    p1: "Player1",
    p2: "Player2"
};
//CONTROLLER// 

//How we will decide whose turn it is 
function whoseTurn(){
    if (idx >= 6 && idx !== 0){
        return playerTurn
    }
}

function player2Turn(){
    (idx =< 13 && idx !== 7)
}
function changeTurn (){
    if ( variable for player1 !=== pit) {
     return player1Turn
    }
    else 
        (variable for player1 === pit ){
            return player2Turn
        }
     
    
}

function playerOption(){}

function finalResult(){}

function winner(){}

//VIEW 
function board(){}
function hole(){}
function render( ){}
 //this function will be called whenever the state is changed 
 //changes the apps state  