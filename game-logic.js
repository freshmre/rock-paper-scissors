function computerPlay() {
    /* Randomly choses a play */

    return ['Rock', 'Paper', 'Scissors'][Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    /* Decides winner of a single game 
       returnedArray[0] = 1: Win for player, 0: Tie, -1: Loss
       returnedArray[1] = formatted outcome message
       playerSelection is case insensitive */

    playerSelection = playerSelection.slice(0, 1).toUpperCase() + playerSelection.slice(1).toLowerCase();

    if (playerSelection === computerSelection){
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

function game() {
    /* Game of 5 rounds
       Shows score at the end */
    
    let gameOutcome;
    let playerScore = 0;
    let computerScore = 0;
    for (let gamesLeft = 5; gamesLeft > 0; gamesLeft--) {
        gameOutcome = playRound(prompt('Rock, Paper or Scissors? '), computerPlay());
        switch (gameOutcome[0]) {
            case 1:
                playerScore += 1;
                break;
            case -1:
                computerScore += 1;
                break;
        }
        alert(gameOutcome[1]);
    }
    alert(`Match Ended\nYou: ${playerScore} Computer: ${computerScore}`);
}

game();