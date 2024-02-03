/*
*
*
* This is red and blue pill functionality
*
*
*/

// Create <p> element and assign an ID to it
const buttonColorText = document.createElement("p");
buttonColorText.id = "button-color-text";

// Access HTML elements for DOM manipulation
const buttonColorDiv = document.querySelector("#button-colors");
let redButton = document.querySelector(".red");
let blueButton = document.querySelector(".blue");

// Display buttonColorText in the right color
function getButtonColor(color) {
    buttonColorText.style.color = color;
    buttonColorText.style.marginTop = "1em";
    buttonColorText.textContent = `You clicked the ${color} button.`;
    buttonColorDiv.appendChild(buttonColorText);
}

// Display red text/message
redButton.addEventListener("click", function () {
  getButtonColor("red");
});

// Display blue text/message
blueButton.addEventListener("click", function (e) {
    getButtonColor("blue");
    e.target.style.background = "black";
});

/*
*
* 
* This is code for the GameBox functionality
* 
*
*/

// Variables for game() functionality
let playerWin = 0;
let cpuWin = 0;
let endOfGame = false;

// Access HTML elements for DOM manipulation
let cpuScore = document.querySelector("#cpu-score");
let playerScore = document.querySelector("#player-score");
let cpuChoice = document.querySelector("#cpu-choice");
let playerChoice = document.querySelector("#player-choice");
let gameOutcome = document.querySelector("#game-outcome");
const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorsButton = document.querySelector("#scissors-button");

// Initiate the rock, paper, scissors (RPS) game
function game(playerSelection) {
    // Check if game needs to be reset
    if (endOfGame===true) {
        gameReset();
    }

    // Get player and computer selections then play a round of RPS
    let cpuSelection = getCpuSelection();
    let roundScore = playRound(playerSelection, cpuSelection);
    if (roundScore === 1) {
        playerWin++;
    }
    if (roundScore === 2) {
        cpuWin++;
    } 

    // Display selection and score on website
    cpuScore.textContent = cpuWin;
    playerScore.textContent = playerWin;
    cpuChoice.textContent = cpuSelection;
    playerChoice.textContent = playerSelection;

    // Declare winner. Best out of 5 wins. Automatically stop if a player gets 3 wins
    if (cpuWin+playerWin === 5 || cpuWin === 3 || playerWin === 3) {
        if (playerWin > cpuWin) {
            gameOutcome.innerHTML = "<b>Player</b> <u>wins</u> the match!";
        }
        if (playerWin < cpuWin) {
            gameOutcome.innerHTML = "<b>Computer</b> <u>wins</u> the match!";
        }

        // Flag end of game so game can reset for next match
        endOfGame = true;
    }
}

// Reset wins, score, and end of game parameter to for new match
function gameReset() {
    cpuWin = 0;
    playerWin = 0;
    cpuScore.textContent = cpuWin;
    playerScore.textContent = playerWin;
    endOfGame = false;
}

// Randomize computer roll
function getCpuSelection() {
    let options = ["Rock", "Paper", "Scissors"];
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

// Play round of the game
function playRound(p, c) {
    // Determine winner:
    if (p === c) {
        gameOutcome.textContent = "Tie! No points awarded.";
        return 0;
    } else if (p === "Rock" && c === "Scissors") {
        gameOutcome.textContent = "Rock beats scissors. Player won!";
        return 1;
    } else if (p === "Rock" && c === "Paper") {
        gameOutcome.textContent = "Paper beats rock. Computer won!";
        return 2;
    } else if (p === "Scissors" && c === "Rock") {
        gameOutcome.textContent = "Rock beats scissors. Computer won!";
        return 2;
    } else if (p === "Scissors" && c === "Paper") {
        gameOutcome.textContent = "Scissors beat paper. Player won!";
        return 1;
    } else if (p === "Paper" && c === "Rock") {
        gameOutcome.textContent = "Paper beats rock. Player won!";
        return 1;
    } else if (p === "Paper" && c === "Scissors") {
        gameOutcome.textContent = "Scissors beat paper. Computer won!";
        return 2;
    }
} 

// EventListners attached to each of the buttons, play game w/ by specifiying player selection
rockButton.addEventListener("click", function () {
    game("Rock");
});

paperButton.addEventListener("click", function () {
    game("Paper");
});

scissorsButton.addEventListener("click", function () {
    game("Scissors");
});