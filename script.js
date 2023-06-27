function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors']
    let choice = options[Math.floor(Math.random() * options.length)]
    return choice
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === 'rock' && computerSelection === 'paper') {
        return "you lose. paper beats rock."
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return "you win. paper beats rock"
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return "you win. rock beats scissors"
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'you lose. rock beats scissors'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'you win. scissors beats paper'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'you lose. scissors beats paper'
    }
}

const playerSelection = ''
const computerSelection = getComputerChoice()
console.log(playRound(playerSelection, computerSelection))