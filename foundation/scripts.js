// Get the button using its class name. This gets the first element with the class 'red'.
let redButton = document.querySelector(".red");
let blueButton = document.querySelector(".blue");

// Compare func
function compare(a, b) {
    if (a === b) {
        return `${a} equals ${b}`;
    } else if (a != b) {
        return `${a} does not equal ${b}` 
    }
}

// Return button click message.
function bMessage(color) {
    return `You pressed the ${color} button. Check the console.`;
} 

// Add an event listener to the button
redButton.addEventListener("click", function () {
  console.log(compare(1,2));
  alert(bMessage("red"));
});

// Add an event listener to the button
blueButton.addEventListener("click", function () {
    console.log(compare(1,1));
    alert(bMessage("blue"));
  });

/* 
This is code for the GameBox functionality 
*/

// Access "Play" button via its ID
let playButton = document.querySelector("#play");

// Randomize computer roll
function getCSelect() {
    let r = Math.floor(Math.random() * 3) + 1;
    if (r === 1) {
        console.log("cSelect: rock");
        return "rock";
    } else if (r === 2) {
        console.log("cSelect: scissors");
        return "scissors";
    } else {
        console.log("cSelect: paper");
        return "paper";
    }

    /*
    Alternative way:
    let choices = ['rock', 'paper', 'scissors'];
    let cSelect = choices[Math.floor(Math.random() * cSelect.length)];
    console.log(cSelect);
    return cSelect;
    */
}

// Prompt for and return user selection
function getPSelect() {
    let input = prompt("Choose rock, paper, or scissors. Only type one of these three options.").toLowerCase();

    // Return value or end game on incorrect input
    if (input === "rock" || input === "scissors" || input === "paper") {
        console.log("pSelect:", input);
        return input;
    } else {
        alert("Invalid response.");
        return 0;
    }
}

// Play round of the game
function playRound(p, c) {
    // Determine winner:
    if (p === c) {
        console.log("Tie.");
        alert("Tie!");
        return 0;
    } else if (p === 0) {
        console.log("pSelect: invalid");
        return 0;
    } else if (p === "rock" && c === "scissors") {
        console.log("Rock beats scissors.");
        alert("Player won!");
        return 1;
    } else if (p === "rock" && c === "paper") {
        console.log("Paper beats rock.");
        alert("Computer won!");
        return 2;
    } else if (p === "scissors" && c === "rock") {
        console.log("Rock beats scissors.");
        alert("Computer won!");
        return 2;
    } else if (p === "scissors" && c === "paper") {
        console.log("Scissors beat paper.");
        alert("Player won!");
        return 1;
    } else if (p === "paper" && c === "rock") {
        console.log("Paper beats rock.");
        alert("Player won!");
        return 1;
    } else if (p === "paper" && c === "scissors") {
        console.log("Scissors beat paper.");
        alert("Computer won!");
        return 2;
    }
}

// Initiate game
function game() {
    let pW = 0;
    let cW = 0;

    // Aggregate scores, best out of 5. Ties don't count as a round.
    for (let i = 0; i < 5; i++) {
        let roundScore = playRound(getPSelect(), getCSelect()); 
        if (roundScore === 1) {
            pW++;
        } else if (roundScore === 2) {
            cW++;
        } else {
            i--;
        }
    }

    // Show final score and declare winner
    console.log("Player Score: " + pW, "\nComp Score: " + cW);

    if (pW > cW) {
        alert("Player wins the match!");
    } else if (pW < cW) {
        alert("Computer wins the match!");
    } else {
        alert("Tie Game!")
    }
}

// Runs game after clicking the Play button
playButton.addEventListener("click", function () {
    game();
});