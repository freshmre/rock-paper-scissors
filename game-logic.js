function computerPlay() {
    /* Randomly choses a play */

    return ['Rock', 'Paper', 'Scissors'][Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    /* Decides winner of a single game 
       expected input 'Rock', 'Paper' or 'Scissors'
       returnedArray[0] = 1: Win for player, 0: Tie, -1: Loss
       returnedArray[1] = formatted outcome message
       playerSelection is case insensitive */

    playerSelection = playerSelection.slice(0, 1).toUpperCase() + playerSelection.slice(1).toLowerCase();

    if (playerSelection === computerSelection) {
        return [0, `It's a tie, both played ${computerSelection}`]
    }

    else if ((playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
        return [1, `You Win! ${playerSelection} beats ${computerSelection}`]
    }

    else {
        return [-1, `You Lose! ${computerSelection} beats ${playerSelection}`]
    }
}

let wins = ties = losses = 0;

const choiceBtns = document.querySelectorAll("button");
const announcement = document.querySelector('#top-text');
const results = document.querySelector('#results');


choiceBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        let output;
        let games = 5;
        let computerChoice = computerPlay();
        let gameoutcome = playRound(btn.id, computerChoice);
        announcement.innerHTML = gameoutcome[1];
        switch (gameoutcome[0]) {
            case 1:
                wins += 1;
                break;
            case 0:
                ties += 1;
                break;
            case -1:
                losses += 1;
                break;
        }
        if (wins >= games || losses >= games) {
            if (wins >= games) { output = `You Won the game! ${wins} - ${losses}`; }
            else if (losses >= games) { output = `You Lost the game ! ${wins} - ${losses}`; }
            wins = ties = losses = 0;
        }
        else output = `You: ${wins} | Ties: ${ties} | Computer: ${losses}`;
        results.innerHTML = output;
    })
})