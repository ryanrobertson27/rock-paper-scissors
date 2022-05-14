//function to take users choice, converts to all lowercase, and returns only if rock, paper, or scissors is inputed. 
let getUserChoice = function(userInput) {
    userInput = userInput.toLowerCase();
    switch (userInput) {
        case 'rock':
            return userInput;
            break;
        case 'paper':
            return userInput;
            break;
        case 'scissors':
            return userInput;
            break;
        case 'bomb':
            return userInput;
            break;
        default:
            console.log('ERROR. Please select "rock", "paper", or "scissors".')
    }
}

//function to generate randomly rock, paper, or scissors
let getComputerChoice = function () {
    let randNum = Math.floor(Math.random() * 3);

    switch (randNum) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
        default:
            console.log('ERROR. The computer is having a panic attack. Please try again');
    }
}


//function to logically determine winner
let determineWinner = function(userChoice, computerChoice) {
    if (userChoice === 'bomb') {
        return 'You win.. shhhhhh!!';
    } else {
        if (userChoice === computerChoice) {
            return 'It\'s a tie!!';
        } else {
            if (userChoice === 'rock') {
                if (computerChoice === 'paper') {
                    return 'The computer won.';
                } else {
                    return 'You win!!';
                }
            }
            if (userChoice === 'paper') {
                if (computerChoice === 'scissor') {
                    return 'The computer won.';
                } else {
                    return 'You win!!';
                }
            }
            if (userChoice === 'scissors') {
                if (computerChoice === 'rock') {
                    return 'The computer won.';
                } else {
                    return 'You win!!';
                }
            }
        }
    }
        
}

//function to run the game
let playGame = function() {
    userChoice = getUserChoice('bomb'); //input rock, paper, or scissors to change user choice
    computerChoice = getComputerChoice();

    console.log(`User Choice: ${userChoice}`);
    console.log(`Computer Choice: ${computerChoice}`);

    console.log(determineWinner(userChoice, computerChoice));

}

playGame();