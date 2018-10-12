// exercise #1 -------------------------------------------

// Write a program that prints the numbers from 1 to 100. But for multiples 
// of five (5, 10, 15, etc.) print "Chicken" instead of the number and for 
// the multiples of seven (7, 14, 21, etc.) print "Monkey". For numbers 
// which are multiples of both five and seven print "ChickenMonkey".

var output;

function getNumber() {
	var number = Math.floor(Math.random()*100 + 1);
	console.log(number);
	determineOutput(number);
}

function determineOutput(number) {
	var modulo5 = number % 5;
	var modulo7 = number % 7;

	if (modulo5 === 0 && modulo7 === 0) {
		output = "ChickenMonkey"
		appendOutput(output);
	} else if (modulo5 === 0) {
		output = "Chicken"
		appendOutput(output);
	} else if (modulo7 === 0) {
		output = "Monkey";
		appendOutput(output);
	} else {
		output = number;		
		appendOutput(output);
	}
}

function appendOutput(output) {
	var division = document.getElementsByTagName("div")[0];
	var p = document.createElement('p');
	p.textContent = output;
	division.appendChild(p);
}

// exercise #2 -------------------------------------------

// A local nightclub is having a Battle of the Bands night in a few months.
// They expect many bands to sign up because the grand prize is $20,000. 
// To make things easier on the nightclub management, they want each band 
// to be assigned a number so that they can easily keep track of the order 
// in which the bands will perform.

// Your job is to write a function that accepts any band name as an 
// argument. The function will increment a global variable by one each 
// time it is invoked, and return that number, and the band name 
// concatenated together.

let bandNumber = 1;
const takeNumber = function(bandName) {
  let contestant = bandNumber + `. ${bandName}`;
  bandNumber++;
  return contestant;
}

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console

// exercise #3 -------------------------------------------

// Copy the following objects into your JavaScript file.
const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

// A first array containing the objects to be cooked.
const uncookedFood = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

// This exercise does not require you to alter this function. But read
// it. See if you can follow what it takes in, executes, and returns.

// The grill() function. Copy this into your JavaScript as well.

function grill (currentObject) {
    // Modify the food so that it is cooked
    currentObject.cooked = true;

    // Put the cooked food into the appropriate array
    cookedFood.push(currentObject);
};

// Your task is to iterate over the array of uncookedFood and invoke
// the function for each item so that the cookedFood array contains
// all of the items after they are cooked.

for (let i = 0; i < uncookedFood.length; i++) {
  grill(uncookedFood[i]);
}
console.log(cookedFood);

// exercise 4 -------------------------------------------

// See overly-excited file directory