let playernum = 0;
let computernum = 0;

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

 /*function playGame(){
    let playernum = 0;
    let computernum = 0;

    let continuePlaying = true;

    while (continuePlaying){

        const playerSelection = prompt("pick your play:");
        const computerSelection = getComputerChoice();

        const roundResults = oneRound(playerSelection, computerSelection);

        console.log(roundResults);

        if (roundResults.startsWith('You Win')){
            playernum++;
        }else if (roundResults.startsWith('You Lose!')){
            computernum++;
        }
        continuePlaying = confirm("Do you want to play another round?");
    }

    //tell the winner
    if (roundResults.startsWith('You Win')) {
        playernum++;
    } else if (roundResults.startsWith('You Lose!')) {
        computernum++;
    }

    let answer;
    answer.textContent = (`Player: ${playernum}, Computer: ${computernum}`);
}
console.log(playGame());*/
/* this is the code i used before and it served a different purpose*/

function playRound(playerSelection) {

    const computerSelection = getComputerChoice();
    const roundResults = oneRound(playerSelection, computerSelection);

    document.getElementById('results').innerText = roundResults;
 
   
    if (roundResults.startsWith('You Win')) {
        playernum++;
    } else if (roundResults.startsWith('You Lose!')) {
        computernum++;
    }


       
    document.getElementById('playerScore').innerText = `Player: ${playernum}`;
    document.getElementById('computerScore').innerText = `Computer: ${computernum}`;

    checkwinner();
}


function checkwinner(){

    if(playernum === 5) {
        document.getElementById('winner').innerText = "congratulations! you are the winner";
        disablebuttons();

    }else if(computernum === 5) {
        document.getElementById('winner').innerText = "sorry my friend you lost this one but not all";
        disablebuttons();
    }
}

function disablebuttons(){

    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        button.disabled = true;
    });
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.value);
    });
});



