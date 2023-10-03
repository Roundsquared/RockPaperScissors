// Generate a random selection between
// Rock, Paper, and Scissors.

// Ask user for input

//Compare results

// Print a winner

// This function should return a random value 
// between 1-3, and then make the appropriate
// selection based on that number. 
let compWeapon;
let userWeapon;
let userInput;

let getConsoleChoice = function(){
    let rndInt= Math.floor(Math.random() * 3) + 1;
    let x = rndInt;
    if(x==1){
        compWeapon = "ROCK"
    }
    else if (x==2){
        compWeapon = "PAPER"
    }
    else {
        compWeapon = "SCISSORS"
    }
    console.log("I'm gonna pick:" + compWeapon)
};


// Acquiring user input, needs to only accept forms 
// of rock, paper, or scissors. All other strings
// must return an error, and try it again.
let  getUserChoice = function(){
userInput = prompt("Choose your weapon!","Paper");
userWeapon = userInput.toUpperCase()
if (userWeapon=="ROCK"){
    console.log("You have selected: "+ userWeapon)
}
else if (userWeapon=="PAPER"){
    console.log("You have selected: "+ userWeapon)
}
else if (userWeapon=="SCISSORS"){
    console.log("You have selected: "+ userWeapon)
}
else if (userWeapon=="GUN"){
    console.log("A true American I see...")
}
else{
    console.log("Invalid input, please enter: Rock, Paper or Scissors")
    getUserChoice()
}
}


// Compare user input to computer generated answer. 

let compareChoice = function(){
    if(compWeapon===userWeapon){
        console.log ("You've both selected:" + userWeapon + ", resulting in a tie!")
    }
    else if(userWeapon==="GUN"){
        console.log("Well, a gun beats everything... I guess you win...")
    }
    else if(compWeapon==="ROCK"){
        switch(userWeapon){
            case "PAPER":
                console.log("You win! Paper beats Rock!")
                break;
            case "SCISSORS": 
                console.log("You lose! Scissors get smashed by Rock ):")
                break;
        }
    }
    else if (compWeapon==="PAPER"){
        switch(userWeapon){
            case "SCISSORS":
                console.log("You win! Scissors beats Paper!")
                break;
            case "ROCK": 
                console.log("You lose! Rock get covered by Paper):")
                break;
        }
    }
    else if (compWeapon==="SCISSORS"){
        switch(userWeapon){
            case "ROCK":
                console.log("You win! Rock beats Scissors!")
                break;
            case "PAPER": 
                console.log("You lose! Paper gets cut by rock ):")
                break;
        }
    
    }
};

let game = function(){
    getConsoleChoice();
    getUserChoice();
    compareChoice();
}

// Display winner
