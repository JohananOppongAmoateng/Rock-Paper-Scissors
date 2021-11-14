function computerPlay() {
    const choices = ['scissors', 'paper', 'rock'];
    return choices[Math.floor(Math.random() * choices.length)];

}

// console.log(computerPlay())

function playRound(player, computer) {


    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return 'computer wins'

        } else if (computerSelection === 'scissors') {
            return 'player wins'
        }

    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            return 'computer wins'

        } else if (computerSelection === 'rock') {
            return 'player wins'
        }

    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return 'computer wins'

        } else if (computerSelection === 'paper') {
            return 'player wins'
        }

    }
}

const playerSelection = prompt('choose one: rock / paper / scissors');
const computerSelection = computerPlay()

console.log(playRound(playerSelection, computerSelection))