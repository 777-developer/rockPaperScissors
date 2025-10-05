// let humanScore = 0;
// let computerScore = 0;

const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText= document.querySelector("#resultText");
const choiceBths = document.querySelectorAll(".choiceBth");
let player;
let computer;
let result;

choiceBths.forEach(button => button.addEventListener('click', () => {

    player = button.textContent;
    getComputerChoice();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
}))









function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*3) + 1;

    switch (computerChoice) {
        case 1: 
        computer = 'ROCK';
        break;
        case 2:
        computer = 'PAPER';
        break;
        case 3:
        computer = 'SCISSORS';
        break; 
    }
}


function checkWinner() {
    if (player === computer) {
        return 'Draw!';
    }

    else if (computer === 'ROCK') {
        return (player === 'PAPER') ? 'You win!' : 'You lose!';
    }
    else if (computer === 'PAPER') {
        return (player === 'SCISSSORS') ? 'You win!' : 'You lose!';
    }
    else if (computer === 'SCISSORS') {
        return (player === 'ROCK') ? 'You win!' : 'You lose!';
    }

}

// function getHumanChoice() {
    
//     let result = null;
    
//     let humanChoice = prompt('Please your choice: ', '');

//     if (humanChoice) {

//         humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase();

//         if (humanChoice === 'Rock' || humanChoice === 'Scissors' || humanChoice === 'Paper') {
  
//             result = humanChoice;
            
//         }
//     }

//         return result;
// }


    // function playRound(humanChoice, computerChoice) {

    //    if (humanChoice === 'Rock' && computerChoice === 'Paper' || humanChoice === 'Paper' && computerChoice === 'Scissors' || humanChoice === 'Scissors' && computerChoice === 'Rock') {
        
    //         if (humanChoice > computerChoice) {


    //         humanScore++;  
    //         return (`You won! Your choce ${humanChoice} Computer has choice ${computerChoice}`);
            
    //      }


    //         else if (computerChoice > humanChoice) {


    //         computerScore++; 
    //         return (`Computer won! Computer choice ${computerChoice}. You have choiced ${humanChoice}`);
    //     }

    // }
    

    //         else  {
               
    //             humanScore === computerScore;

    //             return (`Draw! You and computer choiced ${humanChoice, computerChoice}`); 
    //     }
    
    // }
 


    // const humanChoice = getHumanChoice();
    // const computerChoice = getComputerChoice();

    
        
    

    
    // function playGame() {


    //     console.log(playRound(humanChoice, computerChoice));
    //     console.log(`human ${humanScore}, computer ${computerScore}`);
    // }

    // playGame();

    

    


    
    

    
        
    

    



       

    

   

    

    

 
       

    
        


        
        


    