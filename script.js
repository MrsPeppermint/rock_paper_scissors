const words = ["Rock", "Paper", "Scissors"];
const final = document.querySelector(".final")
const displayResult = document.createElement("p");
displayResult.setAttribute("id", "result");

const player = document.querySelector("#playerFinal");
const computer = document.querySelector("#computerFinal");

const start = document.querySelector(".start");
const container = document.querySelector(".container");
start.addEventListener("click", () => {
    container.style.display = "block";
    start.style.display = "none";
});

var playerFinal = 0;
var computerFinal = 0;

const buttons = document.querySelector("#buttons");
const selection = buttons.querySelectorAll("button");
selection.forEach((button) => {
    button.addEventListener("click", () => {
        if (playerFinal < 5 && computerFinal < 5){
            playRound(button.id, computerPlay());
            if (playerFinal == 5){
                buttons.style.display = "none";
                final.textContent = "Congratulations, YOU WON! " + playerFinal + " VS " + computerFinal;
            } else if (computerFinal == 5) {
                buttons.style.display = "none";
                final.textContent = "You LOST! " + playerFinal + " VS " + computerFinal;
            }
        }
        displayResult.textContent = result; 
        container.insertBefore(displayResult, final);
    }); 
});

function playRound(playerSelection, computerSelection){
    if (
        playerSelection == "Rock" && computerSelection == "Paper" ||
        playerSelection == "Paper" && computerSelection == "Scissors" ||
        playerSelection == "Scissors" && computerSelection == "Rock"){
            result = "You Lose! " + computerSelection + " beats " + playerSelection; 
            computerFinal++;
            computer.textContent = computerFinal;
    } else if (
        playerSelection == "Rock" && computerSelection == "Scissors" ||
        playerSelection == "Paper" && computerSelection == "Rock" ||
        playerSelection == "Scissors" && computerSelection == "Paper"){
            result = "You Win! " + playerSelection + " beats " + computerSelection;
            playerFinal++;
            player.textContent = playerFinal;
    } else {
        result = "It's a tie!";
    }
}

function computerPlay(){
    return words[Math.floor(Math.random() * words.length)]; 
}
