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
    if (humanChoice === computerChoice) {
        console.log("Tie! same choice");
    }
    else if (humanChoice === "stone" && computerChoice === "paper") {
        console.log("You, Loose! paper beats Stone");
        computerScore++;
    }
    else if (humanChoice === "stone" && computerChoice === "scissor") {
        console.log("You, Won! Stone beats Scissor");
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "stone") {
        console.log("You, Won! Paper beats Stone");
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissor") {
        console.log("You, Loose! Scissor beats Paper");
        computerScore++;
    }
    else if (humanChoice === "scissor" && computerChoice === "stone") {
        console.log("You, Loose! Stone beats Scissor");
        computerScore++;
    }
    else if (humanChoice === "scissor" && computerChoice === "paper") {
        console.log("You, Won! Scissor beats Paper");
        humanScore++;
    }
    else {
        console.log("Error!");
    }


}

function playGame() {



    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!!!")
    }
    else if (humanScore < computerScore) {
        console.log("Uff! Better luck next time")
    }
    else {
        console.log("Tie!")
    }
}

playGame()

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