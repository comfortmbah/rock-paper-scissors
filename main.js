const choice = ['paper', 'rock', 'scissor'];
let playerScore = 0;
let computerScore = 0;
//function that randomly returns either paper, rock or scissors
function computerPlay() {
    const randomNum = Math.floor(Math.random() * choice.length);
    const randomChoice = choice[randomNum];
    return randomChoice;
}

//function that plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        return "It's a tie";
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore++;
        return "You lost! Rock crushes paper";
    }  else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        return "You win! Scissors cut paper";
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore++;
        return "You lost! Paper covers rock";
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore++;
        return "You win! Rock crushes scissors";
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore++;
        return "You lost! Scissors cuts paper";
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore++;
        return "You win! Paper covers rock";
    }
}   
//playerSelection = 'rock';
//computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));

//function that keeps score and record winner or loser at the end
function game() {
   for (let i=0; i < 5; i++) {
    let playerSelection = prompt('Choose what to throw', 'rock, paper or scissors').toLowerCase();
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
   }
   if (playerScore > computerScore) {
    return 'Bravo! You beat the Computer';
   } else if (playerScore < computerScore) {
    return 'You lose! try again';
   } else if (playerScore == computerScore) {
    return 'It is a tie with the Computer';
   }
}
console.log(game());