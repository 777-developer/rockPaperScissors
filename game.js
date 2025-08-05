let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let computerChoce = Math.random();
    
    if (computerChoce < 0.36) {
        return 'Rock';
    }
    else if (computerChoce < 0.65) {
        return 'Paper';
    }
    else {
        return 'Scissors';
    }
}

function getHumanChoice() {
    
    let humanChoice = prompt('Please your choice: ', '');

    return humanChoice;
}

    // console.log(getHumanChoice());

    function playRound(humanChoice, computerChoice) {

        humanScore++;
        computerScore++;


        humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase();

    if (humanChoice === computerChoice) {
        
        return 'Draw';
 
    }

    else if (humanChoice === 'Rock' && computerChoice === 'Paper' || humanChoice === 'Paper' && computerChoice === 'Scissors' || humanChoice === 'Scissors' && computerChoice === 'Rock') {
        
        return 'You lose! Paper beats Rock';

    }
}
    


        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();



    function playGame() {

        // humanScore++;
        // computerScore++;

        // const roundScore = playRound();
        
        
    }

    console.log(playRound(humanChoice, computerChoice));
    alert(`${humanScore} computer ${computerScore}`)
    







