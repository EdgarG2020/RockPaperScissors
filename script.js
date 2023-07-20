/* Dom nodes */
const scorePlayer = document.querySelector('.player-score');
const scoreComputer = document.querySelector('.computer-score');
const startGame = document.getElementById('start')
const reStartGame = document.getElementById('restart')
const message = document.querySelector('.message')
const buttons = document.querySelectorAll('container')
var rockButton = document.getElementById("rockButton");
var paperButton = document.getElementById("paperButton");
var scissorsButton = document.getElementById("scissorsButton");


let playerChoice = ''
rockButton.addEventListener("click", function () {
    playerChoice = "rock";
    playRound();
});

paperButton.addEventListener("click", function () {
    playerChoice = "paper";
    playRound();
});

scissorsButton.addEventListener("click", function () {
    playerChoice = "scissors";
    playRound();
});

/* Player and Computer selections */
const options = ['rock', 'paper', 'scissors']
function getComputerChoice() {
    let choice = options[Math.floor(Math.random() * options.length)]
    return choice
}

//uses prompt for choice
// function getPlayerChoice() {
//     let validatedInput = false;
//     while (validatedInput == false) {
//         const choice = prompt('Rock, Paper or Scissors');
//         if (choice == null) {
//             continue;
//         }
//         const choiceLower = choice.toLowerCase();
//         if (options.includes(choiceLower)) {
//             validatedInput = true;
//             return choiceLower
//         }
//     }
// }

// uses buttons
function getPlayerChoice() {
    return playerChoice
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie"
    } else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
        return "Player"
    } else {
        return "Computer"
    }
}

/* game logic */
// function playRound(playerSelection, computerSelection) {
//     let result = ''

//     if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
//         (playerSelection == 'scissors' && computerSelection == 'paper') ||
//         (playerSelection == 'paper' && computerSelection == 'rock')) {
//         scorePlayer.innerHTML++
//         result = 'You win! ' + playerSelection + ' beats ' + computerSelection
//     } else if (playerSelection === computerSelection) {
//         scoreComputer.innerHTML++
//         scorePlayer.innerHTML++
//         result = 'Tie, you both chose ' + playerSelection
//     } else {
//         scoreComputer.innerHTML++
//         result = 'You lose. ' + computerSelection + ' beats ' + playerSelection
//     }
//     return result;
// }

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection)
    if (result == "Tie") {
        return `It's a tie, you both selected ${playerSelection}`
    } else if (result == "Player") {
        return `You won! ${playerSelection} beats ${computerSelection}`
    } else {
        return `You lost. ${computerSelection} beats ${playerSelection}`
    }
}

function game() {
    while (scorePlayer.innerHTML < 5 && scoreComputer.innerHTML < 5) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if (checkWinner(playerSelection, computerSelection) == "Tie") {
            scorePlayer.innerHTML++
            scoreComputer.innerHTML++
        }
        if (checkWinner(playerSelection, computerSelection) == "Player") {
            scorePlayer.innerHTML++
        } else if (checkWinner(playerSelection, computerSelection) == "Computer") {
            scoreComputer.innerHTML++
        }
    }
    if (scoreComputer.innerHTML == scorePlayer.innerHTML) {
        message.innerHTML = "It's a tie! Play again!"
    } else if (scoreComputer.innerHTML > scorePlayer.innerHTML) {
        message.innerHTML = "You lost -_- play again!"
    } else {
        message.innerHTML = "You beat the machine! Do it again!"
    }
    startGame.innerHTML = "Play agian"
}

startGame.addEventListener('click', function () {
    game()
})
