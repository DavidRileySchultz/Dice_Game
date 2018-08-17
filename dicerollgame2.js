"use strict"
function playSomeGolf(){
    console.log("Golf Game...")
    alert("Would you like to play a hole of golf?!");

    let holeLength = prompt("Enter the length of your hole:");
    let playerOne = holeLength;
    let playerTwo = holeLength;
    let playerScores = [playerOne, playerTwo];
    

    while(!checkGameOver(playerScores[0],playerScores[1])){

        for(let i = 0; i < playerScores.length; i++){
            console.log("It's player " + (i+1) + "'s turn!");
            console.log(playerScores[i] + " " + "Remaining");
            let clubChoice = getNumberOfSides();
            let distanceHit = getRandomNumber(clubChoice);
            playerScores[i] -= distanceHit;
            playerScores[i] = Math.abs(playerScores[i]);
            console.log("You hit a " + distanceHit + "!");
        }
        console.log("Hole Complete!!");
    }
        
}

function getRandomNumber(clubChoice){
   
    return Math.floor(Math.random() * clubChoice);
}

function getNumberOfSides(){ 
    let isValidInput = false;
    let clubChoice;

    while(!isValidInput){
        clubChoice = prompt("Please choose Driver(20), 3 Wood(16), 5 Iron(14), 8 Iron(10), Wedge(6), or Putter(4)!");    
        if(clubChoice === "Driver(20)"){
            isValidInput = true;
            clubChoice = 20;
        }
        else if(clubChoice === "3 Wood(16)"){
            isValidInput = true;
            clubChoice = 16;
        }
        else if(clubChoice === "5 Iron(14)"){
            isValidInput = true;
            clubChoice = 14;
        }
        else if(clubChoice === "8 Iron(10)"){
            isValidInput = true;
            clubChoice = 10;
        }
        else if(clubChoice === "Wedge(6)"){
            isValidInput = true;
            clubChoice = 6;
        }
        else if(clubChoice === "Putter(4)"){
            isValidInput = true;
            clubChoice = 4;
        }
        else {
            alert("Please re-enter your club choice");
        }   
    }
    return clubChoice;
}

function checkGameOver(playerOne, playerTwo){
    return playerOne === 0 || playerTwo === 0;
}

