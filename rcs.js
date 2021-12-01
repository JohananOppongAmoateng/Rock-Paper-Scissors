function computerPlay() {
    const choice = ["paper", "scissors", "rock"];
    let computerchoice = choice[Math.floor(Math.random() * choice.length)];
    console.log(computerchoice);
    document.getElementById("computer_set").textContent = computerchoice;
    return computerchoice
}

let computerscore = 0;
let playerscore = 0;
let results = document.getElementById("roundwinner");


function newRound(playerselection, computerselection) {
    if (computerselection === playerselection) {
        results.textContent = "Its a draw";
        return "Its a draw";
    } else if (computerselection === "paper") {
        if (playerselection === "rock") {
            results.textContent = "Computer is the winner";
            computerscore += 1;
            return "Computer is the winner";
        } else if (playerselection === "scissors") {
            results.textContent = "Player is the winner";
            playerscore += 1
            return "Player is the winner"
        }
    } else if (computerselection === "rock") {
        if (playerselection === "scissors") {
            results.textContent = "Computer is the winner";
            computerscore += 1
            return "Computer is the winner"
        } else if (playerselection === "paper") {
            results.textContent = "Player is the winner";
            playerscore += 1
            return "Player is the winner";
        }
    } else if (computerselection === "scissors") {
        if (playerselection === "paper") {
            results.textContent = "Computer is the winner";
            computerscore += 1
            return "Computer is the winner";
        } else if (playerselection === "rock") {
            results.textContent = "Player is the winner";
            playerscore += 1;
            return "Player is the winner";
        }
    }
}

function winner() {

    if (computerscore === 5) {
        document.getElementById("display_winner").textContent = "Computer wins the game with a score of " + computerscore + ":" + playerscore;
    } else if (playerscore === 5) {

        document.getElementById("display_winner").textContent = "Player wins the game with a score of " + playerscore + ":" + computerscore;
    }
}

function rock() {
    document.getElementById('playerchoice').textContent = "User clicked rock"
    newRound("rock", computerPlay());
    winner()
}

function scissors() {
    document.getElementById('playerchoice').textContent = "User clicked scissors"
    newRound("scissors", computerPlay());
    winner()
}

function paper() {
    document.getElementById('playerchoice').textContent = "User clicked paper"
    newRound("paper", computerPlay());
    winner()
}
//input from user
document.getElementById('rock').addEventListener('click', rock);
document.getElementById('scissors').addEventListener('click', scissors);
document.getElementById('paper').addEventListener('click', paper);