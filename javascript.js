console.log("Hello World")

let humanScore = 0
let computerScore = 0
let winCondition = 3

function getComputerChoice() {
    return parseInt(Math.random() * 3) + 1
}

function getHumanChoice() {
    return prompt(`1:Rock\n2:Paper\n3:Scissors`, 1)
}


function humanChoiceToInt(humanChoice) {
    if (humanChoice == "1" || humanChoice.toLowerCase() == "rock") {
        humanChoice = 1
    } else if (humanChoice == "2" || humanChoice.toLowerCase() == "paper") {
        humanChoice = 2
    } else if (humanChoice == "3" || humanChoice.toLowerCase() == "scissors") {
        humanChoice = 3
    }
    return humanChoice
}


function playRound(humanChoice, computerChoice) {
    //1 for rock
    //2 for paper
    //3 for scissors
    if (humanChoice == computerChoice) {
        console.log("Draw")
    }
    else if (humanChoice == 1 && computerChoice == 2) {
        computerScore += 1
        console.log("You lose! Paper beats Rock")
    }
    else if (humanChoice == 1 && computerChoice == 3) {
        humanScore += 1
        console.log("You Win! Rock beats Scissors")
    }
    else if (humanChoice == 2 && computerChoice == 1) {
        humanScore += 1
        console.log("You Win! Paper beats Rock")
    }
    else if (humanChoice == 2 && computerChoice == 3) {
        computerScore += 1
        console.log("You Lose! Scissors beats Paper")
    }
    else if (humanChoice == 3 && computerChoice == 1) {
        computerScore += 1
        console.log("You Lose! Rock beats Scissors")
    }
    else if (humanChoice == 3 && computerChoice == 2) {
        humanScore += 1
        console.log("You Win! Scissors beats Paper")
    }
}

function playGame() {
    while (humanScore < winCondition && computerScore < winCondition) {
        const humanSelection = humanChoiceToInt(getHumanChoice());
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)

    }
    console.log(`Score is
    You:    ${humanScore}
    Computer: ${computerScore}`)

    if (humanScore > computerScore) {
        console.log("You Win!!")
    } else {
        console.log("Computer Wins!!")
    }
}

playGame()