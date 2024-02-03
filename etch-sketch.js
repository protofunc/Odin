/*
*
* Grid that changes colors by creating and styling HTML div elements
*
*/

// Access parent div element
const container = document.querySelector(".container");

// Set default values for length and width
let width = 0;
let length = 0;

// Resets the grid by deleting .container's children, checking to see if prompts are valid, and assiging user input to width and length
const newGridButton = document.querySelector(".new-grid-button");
newGridButton.addEventListener("click", function() {
    wipeGrid();
    let lengthPrompt = parseInt(prompt("Enter the length of squares you would like (limit 100)."));
    if (promptCheck(lengthPrompt)) {
        let widthPrompt = parseInt(prompt("Enter the width of squares you would like (limit 100)."));
        if (promptCheck(widthPrompt)) {
            length = lengthPrompt;
            width = widthPrompt;
            runScript();
        }
    }
});


// Startup the grid for play time
function runScript() {
    // Dynamically create objects (arrays) of sub-divs for grid squares
    let widthDiv = addNewDiv(container, 1, "width-div", true);
    let lengthDiv = addNewDiv(container, 1, "length-div", true);
    let lengthDivChild = addNewDiv(lengthDiv[0], width, "length-div-child", true);

    // Add grid squares to the appropriate divs - loop through lengthDivChild to add squares
    addNewDiv(widthDiv[0], width, "square-div", false);
    for (let i = 0; i < lengthDivChild.length; i++) {
        addNewDiv(lengthDivChild[i], length-1, "square-div", false);
    }

    // Change the color of each .square-div when its hovered over
    document.querySelectorAll(".square-div").forEach(square => {
        square.addEventListener("mouseover", function() {
            this.style.backgroundColor = "rgb(218, 66, 66)";
        });
    });
}

// Helper function to validate prompts
function promptCheck(input) {
    if (isNaN(input)) {
        alert("You didn't enter a number.");
    } else if (input < 1 || input > 100) {
        alert("You must enter a number between 1-100.");
    } else {
        return true;
    }
}

// Helper function to create and append a child div to its parent div with use of arrays
function addNewDiv (parentDiv, numberOfChildren, newDivClassName, returnObjectBoolean) {
    let newDiv = [];
    for (let i = 0; i < numberOfChildren; i++) {
        newDiv[i] = document.createElement("div");
        newDiv[i].className = newDivClassName;
        parentDiv.appendChild(newDiv[i]);
    }
    if (returnObjectBoolean) {
        return newDiv;
    }
}

// Helper function to wipe the gride (delete elements in container) and start new sketcher
function wipeGrid() {
    while (container && container.firstChild) {
        container.removeChild(container.firstChild);
    }
}