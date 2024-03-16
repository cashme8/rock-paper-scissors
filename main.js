function getComputerChoice(){
    const pick = ['Rock', 'Paper', 'Scissors'];
    const computerpick = pick[Math.floor(Math.random() * pick.length)];
    return computerpick;
}
 // Test the function

 function oneRound(playerSelection, computerSelection) {

    // Convert playerSelection and the comp to lowercase for case-insensitive comparison.
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
// the Winning conditions (using template for readability)
if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return 'You Win! rock beats scissors ';
} else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return "You Win! Paper beats Rock";
} else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return "You Win! Scissors beats Paper";
} else if (playerSelection === computerSelection) {
    return "It's a Tie!";
}
else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;

}
 }

 function playGame(){
    let playernum = 0;
    let computernum = 0;

    for (let i = 0; i <= 5; i++){

        const playerSelection = prompt("pick your play:");
        const computerSelection = getComputerChoice();

        const roundResults = oneRound(playerSelection, computerSelection);

        console.log(roundResults);

        if (roundResults.startsWith('You Win')){
            playernum++;
        }else if (roundResults.startsWith('You Lose!')){
            computernum++;
        }
    }
    //tell the winner
    if (playernum > computernum){
        console.log("My friend, you win the Game")
    }else if (playernum < computernum){
            console.log("You lost, one more Game?")
    }else{
            console.log("The Game is a tie")
        }
}
console.log(playGame());
