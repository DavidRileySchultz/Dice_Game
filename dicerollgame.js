"use strict"

console.log("Golf Game...")
alert("Would you like to play a hole of golf?!");

function playSomeGolf(){

    let holeLength = prompt("Enter the length of your hole:");
    
    while(holeLength > 0){
        console.log(holeLength + " " + "Remaining");
        let clubChoice = getNumberOfSides();
        let distanceHit = getRandomNumber(clubChoice);
        holeLength -= distanceHit;
    }
    console.log("Hole Complete!!!");
    alert("Hole Complete!!!");
}

function getRandomNumber(){
   
    return Math.floor(Math.random() * clubChoice);
}

function getNumberOfSides(clubChoice){
   
    while(true){
        clubChoice = prompt("Please choose Driver(20), 3 Wood(16), 5 Iron(14), 8 Iron(10), Wedge(6), or Putter(4)!")

        if(clubChoice === "Driver(20)"){
            let clubChoice = 20;
            return clubChoice;
        }
        else if(clubChoice === "3 Wood(16)"){
            let clubChoice = 16;
            return clubChoice;
        }
        else if(clubChoice === "5 Iron(14)"){
            let clubChoice = 14;
            return clubChoice;
        }
        else if(clubChoice === "8 Iron(10)"){
            let clubChoice = 10;
            return clubChoice;
        }
        else if(clubChoice === "Wedge(6)"){
            let clubChoice = 6;
            return clubChoice;
        }
        else if(clubChoice === "Putter(4)"){
            let clubChoice = 4;
            return clubChoice;
        }
        else if(clubChoice !== "Driver(20)" && clubChoice !== "3 Wood(12)" && clubChoice !== "5 Iron(10)" && clubChoice !== "8 Iron(8)" && clubChoice !== "Wedge(6)" && clubChoice !== "Putter(4)" ){
            alert("Please re-enter your club choice");
        }
    }
}

playSomeGolf(); 