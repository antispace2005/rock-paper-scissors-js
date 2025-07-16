console.log("Hello World")

let humanScore = 0
let computerScore = 0
let winCondition = 5
let lastRoundWinner = 0
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
        const ChoiceText = humanChoice == 1 ? "Rock" : humanChoice == 2 ? "Scissors" : "Paper"
        lastRoundWinner = 0

        return `Draw! ${ChoiceText} can't beat ${ChoiceText}`
    }
    else if (humanChoice == 1 && computerChoice == 2) {
        computerScore += 1
        lastRoundWinner = -1
        return "You lose! Paper beats Rock"
    }
    else if (humanChoice == 1 && computerChoice == 3) {
        humanScore += 1
        lastRoundWinner = 1

        return "You Win! Rock beats Scissors"
    }
    else if (humanChoice == 2 && computerChoice == 1) {
        humanScore += 1
        lastRoundWinner = 1

        return "You Win! Paper beats Rock"
    }
    else if (humanChoice == 2 && computerChoice == 3) {
        computerScore += 1
        lastRoundWinner = -1

        return "You Lose! Scissors beats Paper"
    }
    else if (humanChoice == 3 && computerChoice == 1) {
        computerScore += 1
        lastRoundWinner = -1

        return "You Lose! Rock beats Scissors"
    }
    else if (humanChoice == 3 && computerChoice == 2) {
        humanScore += 1
        lastRoundWinner = 1

        return "You Win! Scissors beats Paper"
    }
}


const rockBtn = document.querySelector("#rock")
const paperBtn = document.querySelector("#paper")
const scissorsBtn = document.querySelector("#scissors")
const roundsLog = document.querySelector("#roundsLog")
const humanScoreElement = document.querySelector("#humanScore")
const computerScoreElement = document.querySelector("#computerScore")
const winner = document.querySelector("#winner")



function playButton(choice) {
    const round = document.createElement("li")
    round.textContent = playRound(choice, getComputerChoice())
    roundsLog.appendChild(round)
    if (lastRoundWinner == 1){
        round.style.color = 'green'
    }else if (lastRoundWinner == -1){
                round.style.color = 'red'

    }else{
                round.style.color = 'orange'

    }

    if (!(humanScore < winCondition && computerScore < winCondition)) {
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;


        if (humanScore > computerScore) {
            winner.textContent = `You Win!!`
            winner.style.color = 'green'
        } else {
            winner.textContent = `Computer Wins!!`
            winner.style.color = 'red'

        }



    }
    humanScoreElement.textContent = `You:    ${humanScore}`
    computerScoreElement.textContent = `Computer: ${computerScore}`




}


rockBtn.addEventListener("click", () => playButton(1))
paperBtn.addEventListener("click", () => playButton(2))
scissorsBtn.addEventListener("click", () => playButton(3))

