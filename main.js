const choice = ['paper', 'rock', 'scissor'];
//function that randomly returns either paper, rock or scissors
function computerPlay() {
    const randomNum = Math.floor(Math.random() * choice.length);
    const randomChoice = choice[randomNum];
    return randomChoice;
}

console.log(computerPlay());

//function that plays a single round of Rock Paper Scissors
/*function singleRound(computerSelection, playerSelection) {
    let computerSelection = computerPlay();
    let choice 
}*/