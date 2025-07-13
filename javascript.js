// getComputerChoice = function(){
//     let num = Math.random();
//     if(num <= 0.33) return 0;
//     if(num >0.33 && num <=0.66) return 1;
//     if(num >0.66) return 2;
// }

// getHumanChoice = function () {
//     let choice = prompt("Enter Ur Choice (Rock, Paper, Scissors): ");
//     choice = choice.toLowerCase();
//     if(choice == 'rock') return 0;
//     if(choice == 'paper') return 1;
//     if(choice == 'scissors') return 2;
// }

// playRound = function (humanChoice, ComputerChoice) {
//     if(humanChoice == ComputerChoice) {
//         return -1;
//     }

//     if((humanChoice == 0 && ComputerChoice == 1) || (humanChoice == 1 && ComputerChoice == 2) || (humanChoice == 2 && ComputerChoice == 0)){
//         return 0;
//     }

//     if((humanChoice == 1 && ComputerChoice == 0) || (humanChoice == 2 && ComputerChoice == 1) || (humanChoice == 0 && ComputerChoice == 2)){
//         return 1;
//     }
// }

// console.log("Hello, World!");

let humanScore = document.querySelector("#player-score");
humanScore.textContent = 0;
let compScore = document.querySelector("#comp-score");
compScore.textContent = 0;

let roundNumber = document.querySelector("#round");
roundNumber.textContent = 1;



// // for(let i=0;i<5;i++){
//     let num = getComputerChoice();
//     let choice = getHumanChoice();
//     let win = playRound(choice, num);
//     if(win == -1) {
//         console.log("Its a Tie!");
//     } else if(win == 0){
//         console.log("You Lose, Computer Wins!");
//         compScore++;
//     } else {
//         console.log("Yow Win!");
//         humanScore++;
//     }

//     console.log("Score: ");
//     console.log(`Your Score: ${humanScore}`);
//     console.log(`Computer Score: ${compScore}`)
// // }
