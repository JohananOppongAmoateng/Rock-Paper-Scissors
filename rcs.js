function computerPlay() {
    const choices = ['scissors', 'paper', 'rock'];
    return choices[Math.floor(Math.random() * choices.length)];

}

// console.log(computerPlay())

function playRound(player, computer) {

    if (player === 'rock') {
        if (computer === 'paper') {
            return 'computer wins'

        } else if (computer === 'scissors') {
            return 'player wins'
        }

    } else if (player === 'paper') {
        if (computer === 'scissors') {
            return 'computer wins'

        } else if (computer === 'rock') {
            return 'player wins'
        }

    } else if (player === 'scissors') {
        if (computer === 'rock') {
            return 'computer wins'

        } else if (computer === 'paper') {
            return 'player wins'
        }

    } else {
        return 'It was a tie'
    }
}


let comp_score = 0
let player_score = 0

function game() {
    let playerSelection = prompt('choose one: rock / paper / scissors');
    let computerSelection = computerPlay()

    let winner = playRound(playerSelection, computerSelection)
    console.log(winner)

    if (winner === 'computer wins') {
        comp_score += 1;
    } else if (winner === 'player wins') {
        player_score += 1;
    } else {
        player_score += 0
        comp_score += 0
    }

}
game(game(game(game(game()))))

console.log("The score is " + comp_score + ':' + player_score)