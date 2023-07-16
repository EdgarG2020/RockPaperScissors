/* Dom nodes */
const scorePlayer = document.querySelector('.player-score');
const scoreComputer = document.querySelector('.computer-score');
const rockButton = document.getElementById('rock')
const paperButton = document.getElementById('paper')
const scissorsButton = document.getElementById('scissors')
const startGame = document.getElementById('start')
const restartGame = document.getElementById('restart')
const message = document.querySelector('.message')
// const selectionComputer = document.querySelector('.computer-selection');


/* Player and Computer selections */
const options = ['rock', 'paper', 'scissors']
function getComputerChoice() {
    let choice = options[Math.floor(Math.random() * options.length)]
    return choice
}

function getPlayerChoice() {
    let validatedInput = false;
    while (validatedInput == false) {
        const choice = prompt('Rock, Paper or Scissors');
        if (choice == null) {
            continue;
        }
        const choiceLower = choice.toLowerCase();
        if (options.includes(choiceLower)) {
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
        scoreComputer.innerHTML++
        scorePlayer.innerHTML++
        result = 'Tie, you both chose ' + playerSelection
    } else {
        scoreComputer.innerHTML++
        result = 'You lose. ' + computerSelection + ' beats ' + playerSelection
    }
    return result;
}

startGame.addEventListener('click', function game() {
    for (i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log('Game Over')
    if (scorePlayer.innerHTML > scoreComputer.innerHTML) {
        message.innerHTML = 'You win!'
    } else if (scoreComputer.innerHTML > scorePlayer.innerHTML) {
        message.innerHTML = 'computer wins -_-'
    } else {
        message.innerHTML = 'Tie'
    }
})


//game()



