let compWeapon;
let userWeapon;
let compScore;
let userScore;
let totalScore;

let buttonRemove=function(){
    containerDiv.removeChild(firstButton)
    makeButtons();
    getConsoleChoice();
};
let makeButtons= function(){
    let userRock = function(){
        userWeapon = "ROCK";
        compareChoice()
    }

   let userPaper= function(){
        userWeapon = "PAPER"
        compareChoice()
    }
    let userScissors=function(){
        userWeapon="SCISSORS"
        compareChoice()
    }
let rockButton = document.createElement('button')
rockButton.classList.add('gameButton')
rockButton.textContent = "Rock"
containerDiv.appendChild(rockButton)
rockButton.addEventListener('click',userRock)

let paperButton = document.createElement('button')
paperButton.classList.add('gameButton')
containerDiv.appendChild(paperButton)
paperButton.textContent = "Paper"
paperButton.addEventListener('click',userPaper)

let scissorButton = document.createElement('button')
paperButton.classList.add('gameButton')
scissorButton.textContent = "Scissors"
containerDiv.appendChild(scissorButton)
scissorButton.addEventListener('click',userScissors) // userScissors fxn will assign "SCISSORS" to the userWeapon var
}

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
}

let isGameOver=function(){
    if((compScore+userScore)==5){
        return true;
    }
    else{
        return false;
    }
}

let gameOver = function(){
    if(compScore>userScore){
        console.log("The computer has won with a score of:"+compScore+" to:"+userScore+ ". Play again?")
        score.textContent="The computer has won with a score of:"+compScore+" to:"+userScore+ ". Play again?"
        newGame()
    }
    else{
        console.log("You've won with a score of:"+ userScore+" to:"+compScore+". Play again?")
        score.textContent="You've won with a score of:"+ userScore+" to:"+compScore+". Play again?"
        newGame()
    }
}

let newGame = function(){
    compScore=0
    userScore=0
    let resetButton = document.createElement('button')
    containerDiv.appendChild(resetButton)
    resetButton.textContent="Play again?"
    resetButton.addEventListener('click',()=>{
        containerDiv.removeChild(resetButton)
        getConsoleChoice()
    })
}

let compareChoice = function(){    
    if(compWeapon===userWeapon){
        console.log ("You've both selected:" + userWeapon + ", resulting in a tie!")
        if(Number.isInteger(userScore)==false||Number.isInteger(compScore)==false){
            userScore= 0;
            compScore= 0;
        }
    }
    else if(compWeapon==="ROCK"){
        switch(userWeapon){
            case "PAPER":
                console.log("You win! Paper beats Rock!")
                if(Number.isInteger(userScore)==false){
                userScore= 0;
                compScore= 0;
                userScore=userScore+1;
                console.log("user: "+userScore+"comp: "+compScore)
                }
                else{
                    userScore=userScore+1;
                    console.log("user: "+userScore+"comp: "+compScore)
                }
                break;
            case "SCISSORS": 
                console.log("You lose! Scissors get smashed by Rock ):")
                if(Number.isInteger(compScore)==false){
                    compScore= 0;
                    compScore= compScore+1;
                    console.log("user: "+userScore+"comp: "+compScore)
                }
                else{
                    compScore= compScore+1;
                    console.log("user: "+userScore+"comp: "+compScore)
                }
                break;
        }
    }
    else if (compWeapon==="PAPER"){
        switch(userWeapon){
            case "SCISSORS":
                console.log("You win! Scissors beats Paper!")
                if(Number.isInteger(userScore)==false){
                    userScore= 0;
                    compScore= 0;
                    userScore=userScore+1;
                    console.log("user: "+userScore+"comp: "+compScore)
                    }
                    else{
                        userScore=userScore+1;
                        console.log("user: "+userScore+"comp: "+compScore)
                    }
                break;
            case "ROCK": 
                console.log("You lose! Rock get covered by Paper):")
                if(Number.isInteger(compScore)==false){
                    compScore= 0;
                    userScore= 0;
                    compScore= compScore+1;
                    console.log("user: "+userScore+"comp: "+compScore)
                }
                else{
                    compScore= compScore+1;
                    console.log("user: "+userScore+"comp: "+compScore)
                }
                break;
        }
    }
    else if (compWeapon==="SCISSORS"){
        switch(userWeapon){
            case "ROCK":
                console.log("You win! Rock beats Scissors!")
                if(Number.isInteger(userScore)==false){
                    userScore= 0;
                    compScore= 0;
                    userScore=userScore+1;
                    console.log("user: "+userScore+"comp: "+compScore)
                    }
                    else{
                        userScore=userScore+1;
                        console.log("user: "+userScore+"comp: "+compScore)
                    }
                break;
            case "PAPER": 
                console.log("You lose! Paper gets cut by rock ):")
                if(Number.isInteger(compScore)==false){
                    compScore= 0;
                    userScore= 0;
                    compScore= compScore+1;
                    console.log("user: "+userScore+"comp: "+compScore)
                }
                else{
                    compScore= compScore+1;
                    console.log("user: "+userScore+"comp: "+compScore)
                }
                break;
        }
    
    }
    if(isGameOver()){
        score.textContent='The score is: ' + compScore + ' for the CPU and: ' + userScore + ' for you!'
        gameOver()
    }
    else{
        
        
        score.textContent='The score is: ' + compScore + ' for the CPU and: ' + userScore + ' for you!'
        
        getConsoleChoice()

    }
}

    let firstButton = document.querySelector('.surprise')
    let containerDiv = document.querySelector('div')
    let scoreDiv= document.querySelector('.scoreDiv')
    let score = document.createElement('p')
    containerDiv.appendChild(score)
    score.textContent=''
    firstButton.addEventListener('click',buttonRemove)