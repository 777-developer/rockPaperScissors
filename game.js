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
    
    let result = null;
    
    let humanChoice = prompt('Please your choice: ', '');

    if (humanChoice) {

        humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase();

        if (humanChoice === 'Rock' || humanChoice === 'Scissors' || humanChoice === 'Paper') {
  
            result = humanChoice;
            
        }
    }

        return result;
}


    function playRound(humanChoice, computerChoice) {

       if (humanChoice === 'Rock' && computerChoice === 'Paper' || humanChoice === 'Paper' && computerChoice === 'Scissors' || humanChoice === 'Scissors' && computerChoice === 'Rock') {
        
            if (humanChoice > computerChoice) {


            humanScore++;  
            return (`You won! Your choce ${humanChoice} Computer has choice ${computerChoice}`);
            
         }


            else if (computerChoice > humanChoice) {


            computerScore++; 
            return (`Computer won! Computer choice ${computerChoice}. You have choiced ${humanChoice}`);
        }

    }
    

            else  {
               
                humanScore === computerScore;

                return (`Draw! You and computer choiced ${humanChoice, computerChoice}`); 
        }
    
    }
 


    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    
        
    

    
    function playGame() {


        console.log(playRound(humanChoice, computerChoice));
        console.log(`human ${humanScore}, computer ${computerScore}`);
    }

    playGame();
    


    
    

    
        
    

    



       

    

   

    

    

 
       

    
        


        
        


    