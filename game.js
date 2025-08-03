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

console.log(getHumanChoice());



