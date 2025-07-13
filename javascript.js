function getComputerChoice() {
    let num = Math.random();
    if(num <= 0.33) return 0;
    if(num >0.33 && num <=0.66) return 1;
    if(num >0.66) return 2;
}

function playRound (humanChoice, ComputerChoice) {
    if(humanChoice == ComputerChoice) {
        return -1;
    }

    if((humanChoice == 0 && ComputerChoice == 1) || (humanChoice == 1 && ComputerChoice == 2) || (humanChoice == 2 && ComputerChoice == 0)){
        return 0;
    }

    if((humanChoice == 1 && ComputerChoice == 0) || (humanChoice == 2 && ComputerChoice == 1) || (humanChoice == 0 && ComputerChoice == 2)){
        return 1;
    }
}

let humanChoice = '';
let computerChoice = -1;

let humanScoreN = 0;
let compScoreN = 0;

let humanScore = document.querySelector("#player-score");
humanScore.textContent = humanScoreN;
let compScore = document.querySelector("#comp-score");
compScore.textContent = compScoreN;

let roundNumber = 1;
let round = document.querySelector("#round");
round.textContent = roundNumber;

const optionBtns = document.querySelectorAll('.option');

optionBtns.forEach(btn => {
    btn.addEventListener('click', () => {

        optionBtns.forEach(option => option.classList.remove('clicked'));
        btn.classList.toggle('clicked');
        humanChoice = parseInt(btn.id);
    })
})

const playButton = document.querySelector('#play');

playButton.addEventListener('click', () => {
    computerChoice = getComputerChoice();
    let win = playRound(humanChoice, computerChoice);
    roundNumber++;
    round.textContent = roundNumber;
    if(win == -1) {
        console.log("Its a Tie!");
    } else if(win == 0){
        console.log("You Lose, Computer Wins!");
        compScoreN++;
        compScore.textContent = compScoreN;
    } else {
        console.log("Yow Win!");
        humanScoreN++;
        humanScore.textContent = humanScoreN;
    }
})