// Generate a random selection between
// Rock, Paper, and Scissors.

// Ask user for input

//Compare results

// Print a winner

// This function should return a random value 
// between 1-3, and then make the appropriate
// selection based on that number. 

let getConsoleChoice = function(){
    let rndInt= Math.floor(Math.random() * 3) + 1;
    let x = rndInt;
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


// Acquiring user input, needs to only accept forms 
// of rock, paper, or scissors. All other strings
// must return an error, and try it again.
let  getUserChoice = function(){
let userInput = prompt("Choose your weapon!","Paper");
let userWeapon = userInput.toUpperCase()
console.log(userWeapon)
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

let compChoice = function(){
    let compWeapon= prompt("compweapon", "ROCK")
    let userWeapon = prompt("userweapon", "PAPER")
    switch(compWeapon===userWeapon){
        case true:
            console.log("You've both selected: " + userWeapon + ", resulting in a tie!")
            break;
    
        case false:
            switch(userWeapon==="GUN"){
                case true:
                    console.log("Well, a gun beats everything... I guess you win...")
                    break;
                case false:
            switch(compWeapon==="ROCK"){
                case (true && userWeapon==="PAPER"):
                    console.log(" Paper covers rock! You Win!")
                    break;
                case (true && userWeapon==="SCISSORS"):
                    console.log("Rock smashes scissors! You lose!")
                    break;
                case false:
                switch(compWeapon==="PAPER"){
                    case(true && userWeapon==="ROCK"):
                    console.log("Paper covers rock, sorry. You lose!")
                    break;
                    case(true && userWeapon==="Scissors"):
                    console.log("You win! Scissors cut paper every time baby!")
                    break;
                    case false:
                        switch(compWeapon==="SCISSORS"){
                            case(true && userWeapon==="ROCK"):
                            console.log("Rock beats scissors. (Literally) You Win!")
                            break;
                            case(true && userWeapon==="PAPER"):
                            console.log("You brought paper to a scissors fight... Of course you lost lmao")
                        }
                    
                }
            }
            }
            
    }
};


// Display winner
