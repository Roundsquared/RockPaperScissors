// Generate a random selection between
// Rock, Paper, and Scissors.

// Ask user for input

//Compare results

// Print a winner

// This function should return a random value 
// between 1-9, and then make the appropriate
// selection based on that number. 

let getConsoleChoice = function(){
    let rndInt= Math.floor(Math.random() * 3) + 1;
    let x = rndInt;
    console.log(x);
    let compWeapon;
    if(x==1){
        compWeapon = "Rock"
    }
    else if (x==2){
        compWeapon = "Paper"
    }
    else {
        compWeapon = "Scissors"
    }
    console.log(compWeapon)
};

// This actually will create the random number
// to be used by getConsoleChoice

let numberGen = function(){
    
    console.log(rndInt) 
};

// Acquiring user input, needs to only accept forms 
// of rock, paper, or scissors. All other strings
// must return an error.

// let userInput = prompt("Choose your weapon!","Paper");

// Modify user's input to something standardized (maybe in v2)


// Compare user input to computer generated answer. 


// Display winner
