playerScore = 0
computerScore = 0

function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors']
    let choice = options[Math.floor(Math.random() * options.length)]
    return choice
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice()
    let result = ''

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {

        playerScore++
        result = 'You win! ' + playerSelection + ' beats ' + computerSelection
    } else if (playerSelection === computerSelection) {
        result = 'Tie, you both chose ' + playerSelection
    } else {
        computerScore++
        result = 'You lose. ' + computerSelection + ' beats ' + playerSelection
    }
    return result
}

const playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase()
const computerSelection = getComputerChoice()
console.log(playRound(playerSelection, computerSelection))




