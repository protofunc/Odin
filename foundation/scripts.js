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
    return `You pressed the ${color} button. Check the console.`
} 

// Add an event listener to the button
redButton.addEventListener("click", function () {
  console.log(compare(1,2))
  alert(bMessage("red"))
});

// Add an event listener to the button
blueButton.addEventListener("click", function () {
    console.log(compare(1,1))
    alert(bMessage("blue"))
  });