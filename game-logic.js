function computerPlay() {
    /* Randomly choses a play */

    return ['Rock', 'Paper', 'Scissors'][Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 0;
    }

    else if ((playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
        return 1;
    }

    else {
        return -1;
    }
}

let wins = ties = losses = 0;
let round = 1;
let games = 5;
let end = false;
let playerChoiceMap = {
    'rock-button': 'Rock',
    'paper-button': 'Paper',
    'scissors-button': 'Scissors',
}
let allowed = true;

const choiceBtns = document.getElementById('controls').querySelectorAll("button");
const playerScore = document.getElementById('player-score');
const tieScore = document.getElementById('tie-score');
const computerScore = document.getElementById('computer-score');
const playerPick = document.getElementById('player-pick');
const computerPick = document.getElementById('computer-pick');
const resetBtn = document.getElementById('reset-btn');
const roundNumber = document.getElementById('round-number');

choiceBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (end || !allowed) return;
        allowed = false;
        setTimeout(() => allowed = true, 400);
        let output;
        round++;
        let computerChoice = computerPlay();
        playerSelection = playerChoiceMap[btn.id];
        computerPick.style.background = `url('assets/${computerChoice.toLowerCase()}-colored.svg') no-repeat`
        playerPick.style.background = `url('assets/${playerSelection.toLowerCase()}-colored.svg') no-repeat`
        let gameoutcome = playRound(playerSelection, computerChoice);
        switch (gameoutcome) {
            case 1:
                wins++;
                playerScore.textContent = wins;
                break;
            case 0:
                ties++;
                tieScore.textContent = ties;
                break;
            case -1:
                losses++;
                computerScore.textContent = losses;
                break;
        }
        if (wins == games || losses == games) {
            end = true;
            let gameResult;
            if (wins == games) gameResult = 'You Win!';
            else if (losses == games) gameResult = 'You Lose!';
            roundNumber.textContent = gameResult;
        }
        else {
            roundNumber.textContent = `round ${round}`;
        }
    })
})

resetBtn.addEventListener('click', () => {
    end = false;
    round = 1;
    wins = ties = losses = 0;
    playerScore.textContent = tieScore.textContent = computerScore.textContent = '0';
    roundNumber.textContent = 'round 1';
})