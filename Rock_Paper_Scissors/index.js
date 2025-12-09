const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){
    
    const computerChoice = choices[Math.floor(Math.random()*3)];
    let result = "";
    if(playerChoice === computerChoice){
        result = "IT'S A TIE";
    }
    else{
        switch(playerChoice){
            case "rock":
                switch(computerChoice){
                    case "rock": 
                        result = "IT'S A TIE !";
                        break;
                    case "paper":
                        result = "COMPUTER WINS !";
                        computerScore++;
                        break;
                    case "scissors":
                        result = "PLAYER WINS !";
                        playerScore++;
                        break;
                }
                break;
            
            case "paper":
                switch(computerChoice){
                    case "rock": 
                        result = "PLAYER WINS !";
                        playerScore++;
                        break;
                    case "paper":
                        result = "IT'S A TIE !";
                        break;
                    case "scissors":
                        result = "COMPUTER WINS !";
                        computerScore++;
                        break;
                }
                break;
            
            case "scissors":
                switch(computerChoice){
                    case "rock": 
                        result = "COMPUTER WINS !";
                        computerScore++;
                        break;
                    case "paper":
                        result = "PLAYER WINS !";
                        playerScore++;
                        break;
                    case "scissors":
                        result = "IT'S A TIE !";
                        break;
                }
                break;
        }

        playerDisplay.textContent = `PLAYER: ${playerChoice}`;
        computerDisplay.textContent = `COMPUTER: ${computerChoice}`;


        resultDisplay.textContent = result;
        playerScoreDisplay.textContent = `PLAYER-SCORE: ${playerScore}`;
        computerScoreDisplay.textContent = `COMPUTER-SCORE: ${computerScore}`
    }
}


