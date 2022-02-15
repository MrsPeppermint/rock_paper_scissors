const words = ["rock", "paper", "scissors"];
var winner = "";

function playRound(playerSelection, computerSelection){
    winner = "tie";
    result = "It's a tie!"
    if (
        playerSelection == "rock" && computerSelection == "paper" ||
        playerSelection == "paper" && computerSelection == "scissors" ||
        playerSelection == "scissors" && computerSelection == "rock"){
            result = "You Lose! " + capitalize(computerSelection) + " beats " + capitalize(playerSelection); 
            winner = "computer";
    } else if (
        playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "paper"){
            result = "You Win! " + capitalize(playerSelection) + " beats " + capitalize(computerSelection);
            winner = "player";
    } 
    return winner,result;
}


function game(){
    let playerScore = 0;
    let computerScore = 0;
    
    while (playerScore < 5 && computerScore < 5){
        playerSelection = playerPlay();
        computerSelection = computerPlay();
        
        playRound(playerSelection, computerSelection);
        if (winner == "computer") {  
            computerScore++;
        } else if (winner == "player") {            
            playerScore++;
        }
        console.log(result);
    }
    if (playerScore > computerScore) {
        console.log("CONGRATULATIONS! You won " + playerScore + " to " + computerScore + ".");
    } else {
        console.log("You lost " + computerScore + " to " + playerScore + ".");
    }
    
}
game();

function computerPlay(){
    return words[Math.floor(Math.random() * words.length)]; 
}

function playerPlay(){
    word = prompt("Enter your word:");
    word = word.toLowerCase();
    for (let i = 0; i < words.length; i++){
        if (word == words[i]){
            return word;
        }
    }
    alert("Entered word is not valid. Try again.")
    return playerPlay();
}

function capitalize(string){
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}
