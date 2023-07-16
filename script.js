/* Dom nodes */
const scorePlayer = document.querySelector('.player-score');
const scoreComputer = document.querySelector('.computer-score');
const message = document.querySelector('.message')
const selectionPlayer = document.querySelector('.player-selection');
const selectionComputer = document.querySelector('.computer-selection');

/* Score */
let playerScore = 0
let computerScore = 0

/* Player and Computer selections */
const options = ['rock', 'paper', 'scissors']
function getComputerChoice() {
    let choice = options[Math.floor(Math.random() * options.length)]
    return choice
}

function getPlayerChoice() {
    let validatedInput = false;
    while(validatedInput == false) {
        const choice = prompt('Rock, Papr or Scissors');
        if (choice == null){
            continue;
        }
        const choiceLower = choice.toLowerCase();
        if(options.includes(choiceLower)) {
            validatedInput = true;
            return choiceLower
        }
    }
}

/* game logic */
function playRound(playerSelection, computerSelection) {
    let result = ''

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
        scorePlayer.innerHTML++    
        result = 'You win! ' + playerSelection + ' beats ' + computerSelection
    } else if (playerSelection === computerSelection) {
        result = 'Tie, you both chose ' + playerSelection
    } else {
        scoreComputer.innerHTML++
        result = 'You lose. ' + computerSelection + ' beats ' + playerSelection
    }
    return result;

}

function game() {
    for(i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log('game over')
}

game()



