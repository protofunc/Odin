/**
 * ===== Troubleshooting =====
 * The function below should log the number 2, however it does not, 
 * see if you can fix it!
 * Be sure to fix it in the spirit of the code, do not hard code the result.
 */

function troubleshooting() {
	const a = 1;
	const b = 1;

	let result;

	// Edit between these lines
	// =================================
	result = a + b;

	// =================================

	return result;
}

console.log(troubleshooting());

/**
 * The code below tells the browser to ask you for a number
 * then if that number is `6`, it returns `true` otherwise it returns `false`
 * 
 * Change this code so it returns `true` when the number is greater than or equal to 10, and false if it is less than 10
 */

function numberChecker(num) {
	console.log("Number is " + num)
	if(num >= 10) {
		return true;
	} else {
		return false;
	}
}

console.log(numberChecker(9), numberChecker(10), numberChecker(11));

/**
 * Lets do some math!
 * Some rules first:
 *   - Replace the strings to the right of the = with the math expression they describe.
 *   - Do not manually enter the answers to the equations. For example, `const a = 9` would be incorrect as 9 is the answer to the equation you're being asked to write out
 */

const a = 1 + 8;
const b = 22 * 3;
const c = 5 % 4;
const d = a - 17;
const e = a + b + c + d;

console.log(a, b, c, d, e);

/*

  ===== Step 2: =====
  Once you understand the code snippet above, delete it. Then, using the following instructions, recreate the snippet on your own under "Your code goes here".
	
  ---------------------------------------------------------------
	
  1. Create 4 variables: firstName, lastName, thisYear, and birthYear

  2. Create a 5th variable, greeting, that is constructed from the previous 4
  (it should contain a greeting with the person's full name and their age)

  3. Print greeting with console.log

  4. Press 'Run' to ensure your code works

  */
	
let firstName = "Jeremy";
let lastName = "Lynn";
let thisYear = 2023;
let birthYear = 1990;
let greeting = `Hey. ${firstName + " " + lastName} is ${thisYear - birthYear} years old.`;

console.log(greeting,"~Break~");

// Assignment

function add7(n) {
	return n+7;
}

function mult(a, b) {
	return a*b;
}

// Write a function called capitalize that takes a string and returns 
// that string with only the first letter capitalized.
// Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.

function title(str) {
	let nStr = "";
	let c = "";
	
	for (let i=0; i<str.length; i++) {
		nStr = nStr + str[i].toLowerCase();
	}

	c = nStr[0].toUpperCase();
	nStr = c + nStr.slice(1);
	return nStr;
}
console.log(add7(3));
console.log(mult(2, 2));
console.log(`${title("heLlO")} friends. ${title("ThIs")} is title case in action.`);

// Write a function called lastLetter that takes a string and returns the very last letter of that string:
// lastLetter("abcd") should return "d"

function last(str) {
	let i = str.length-1;
	return `"${str[i]}"`;
}

let lL = "badabing"
console.log("The last letter of " + lL + " is the letter " + last(lL) + "\n");