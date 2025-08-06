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

        humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase();
     
      if (humanChoice === 'Rock' && computerChoice === 'Paper' || humanChoice === 'Paper' && computerChoice === 'Scissors' || humanChoice === 'Scissors' && computerChoice === 'Rock') {
        
            if (humanChoice > computerChoice) {

                humanScore++;  
                return 'You won!';
            
         }

            else if (computerChoice > humanChoice) {

                computerScore++; 
                return 'Computer won!';
        }
            else if (humanChoice === computerChoice) {

                return 'Draw';
            
        }

    }
}

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    
        
    

    

    console.log(playRound(humanChoice, computerChoice));

    
        
    

    alert(`human ${humanScore}, computer ${computerScore}`);



       

    

   

    

    

 
       

    
        


        
        


       
    
    
    


    



