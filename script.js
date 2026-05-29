let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choice = Math.random();
    if (choice < 0.33) {
        return "stone"
    }
    else if (choice < 0.66) {
        return "paper"
    }
    else {
        return "scissor"
    }

}


function playground(computer, human) {
    let humanChoice = human;
    let computerChoice = computer;

    const result = document.querySelector(".Results");
    const score = document.querySelector(".Score");

    if (humanChoice === computerChoice) {
        result.textContent = "Tie! same choice";

    }
    else if (humanChoice === "stone" && computerChoice === "paper") {
        result.textContent = "You, Lose! paper beats Stone";
        computerScore++;
    }
    else if (humanChoice === "stone" && computerChoice === "scissor") {
        result.textContent = "You, Won! Stone beats Scissor";
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "stone") {
        result.textContent ="You, Won! Paper beats Stone"
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissor") {
        result.textContent = "You, Lose! Scissor beats Paper"
        computerScore++;
    }
    else if (humanChoice === "scissor" && computerChoice === "stone") {
        result.textContent = "You, Lose! Stone beats Scissor"
        computerScore++;
    }
    else if (humanChoice === "scissor" && computerChoice === "paper") {
        result.textContent = "You, Won! Scissor beats Paper"
        humanScore++;
    }
    else {
        result.textContent = "Error!"
    }
    score.textContent = `Your score =${humanScore} | Computer score = ${computerScore}`
    if(humanScore===5||computerScore===5){
        playGame();
    }
}

function playGame() {

    const Final = document.querySelector(".finalResult");

    if (humanScore > computerScore) {
        Final.textContent = "Congratulations! You won the game!!!"
    }
    else if (humanScore < computerScore) {
        Final.textContent = "Uff! Better luck next time"
    }
    else {
        Final.textContent = "Tie!"
    }

}




const stn = document.querySelector(".Stone");
const pap = document.querySelector(".Paper");
const scisr = document.querySelector(".Scissor")


stn.addEventListener("click", ()=>{
    let human = "stone";
    let computer = getComputerChoice();
    playground(computer, human);
})

pap.addEventListener("click", ()=>{
    let human = "paper";
    let computer = getComputerChoice();
    playground(computer, human);
})

scisr.addEventListener("click", ()=>{
    let human = "scissor";
    let computer = getComputerChoice();
    playground(computer, human);
})

