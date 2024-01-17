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
}

// Prompt for and return user selection
function getPSelect() {
    let input = prompt("Choose rock, paper, or scissor.")
    let iStr = "";
    
    // Lowercase all text to account for case sensitivity
    for (let i = 0; i < input.length; i++) {
        iStr = iStr + input[i].toLowerCase();  
    }

    if (iStr === "rock" || iStr === "scissors" || iStr === "paper") {
        console.log("pSelect:", iStr);
        return iStr;
    } else {
        alert("Incorrect value. Ending game.");
        throw new Error("Does not match rock, paper, or scissors.");
    }
}

// Play round of the game
function playRound(p, c) {
    // Determine winner:
    if (p === c) {
        alert("Tie!")
        return 3;
    } else if (p === "rock" && c === "scissors") {
        console.log("Rock beats scissors.")
        alert("Player won!");
        return 1;
    } else if (p === "rock" && c === "paper") {
        console.log("Paper beats rock.");
        alert("Computer won!");
        return 2;
    } else if (p === "scissors" && c === "rock") {
        console.log("Rock beats scissors.")
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

    // Aggregate scores, best out of 5. Ties are counted as points for both teams.
    for (let i = 0; i < 5; i++) {
        let count = playRound(getPSelect(), getCSelect()); 
        if (count === 1) {
            pW++;
        } else if (count === 2) {
            cW++;
        } else {
            pW++;
            cW++;
        }
    }

    // Show final score and declare winner
    console.log("pW: " + pW, "\ncW: " + cW);

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