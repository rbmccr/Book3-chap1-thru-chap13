// 10/11/2018

// exercise #1
const me = {
  name: "Brendan",
  age: 25,
  hairColor: "blonde",
  personality: "defender",
  scream: () => `what the hell, ${them.name}?!`
}

const them = {
  name: "Kyle",
  age: 22,
  hairColor: "red",
  personality: "analyst"
}

// execise #2
const age = 30;
const timeSpan = 25;
const futureAge = age + timeSpan;
const name = "Biff";
const generationStereotype = "millenial";
const dadJoke = "milleni-old";

console.log(`Hi. My name is ${name}, and I am ${age} years old.`);
console.log(`They say that makes me a ${generationStereotype}.`);
console.log(`In ${timeSpan} years I'll be ${futureAge}!`)
console.log(`I guess that means I'll be a ${dadJoke} then. Ha ha!`);

// exercise #3
let employee = {
  name: "Jeff Winger",
  age: 37,
  department: "legal",
  hire_date: "09/22/2010"
}

console.log(`Our company's lawyer is ${employee.name}`);
console.log(`${employee.name.split(' ')[0]} was hired on ${employee["hire_date"]}`);

employee.vacation_days = 20;

let eom = "employee_of_the_month";
employee[eom] = false;
console.log(employee);

// exercise #4
let painter = {
  tools: ["brush", "roller", "caulk", "sandpaper", "dropcloth"],
  uniform: "white overalls",
  cost_per_hour: 25.00,
  insured: true,
  paint: () => "The painter finished the job.",
  increaseWage: (number) => { painter.cost_per_hour += number; }
}

painter.addTools = (newTool) => { // adds method to painter object
  painter.tools.push(newTool); 
}

console.log(painter.paint());
painter.addTools("crowbar");
painter.addTools("facemask");
console.log(painter);

// exercise #5
let hitchhikers_guide = {
  characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
  catchphrase: "Don't Panic",
  random_facts: {
      copies_sold: 14000000,
      formats: ["radio", "TV", "film", "graphic novel"],
      ultimate_answer: {
          meaning_of_life: 42
      }
  }
};

console.log(hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life);

let meaning = "meaning_of_life";
console.log(hitchhikers_guide.random_facts.ultimate_answer[meaning]);


// for each loop
let tools = ["brush", "roller", "caulk", "sandpaper", "dropcloth"];
//requires one argument in function passed in
tools.forEach( (tool) => {console.log("The painter uses this: ", tool)});

// exercise #6 (reverse the sentence)
// method 1
let hyperbole = ["dev", "JS", "unicorn", "ninja", "rockstar", "a", "am", "I"];

let word = "";

for (let i = hyperbole.length - 1; i >= 0; i--) {
  word += hyperbole[i] + " ";
}

console.log(word);

//method 2
console.log(hyperbole.reverse().join(' '));

//method 3 (already reversed in above code -- could do reverse().forEach() here)
let sentence = "";
hyperbole.forEach( (word) => {
  sentence += word + " ";
  console.log(sentence)
});

// ------------------------ Querying the DOM

var title = document.querySelector('title');
title.classList.add("urgent");
console.log(title);

var h1 = document.querySelector('h1');
h1.classList.add("urgent");
console.log(h1);

var second_article = document.querySelectorAll('.article__section')[1];
second_article.classList.add('highlight');

// ------------------------ Functions

// 1.Write a function that takes a string of a dog breed as an argument
//   (like ‘border collie’)
// 2.Have the function return “my favorite dog breed is” plus the passed
//   in string. If no argument is passed to the function, return “I like 
//   cats”.
// 3.Execute the function in a way that captures the returned value in 
//   a variable.
// 4.Console.log the string “When it comes to pets,” plus the returned
//   value of the function.

let dog = function(breed) {
  if (breed === undefined) { //can also just pass breeed (boolean)
    return `I like cats.`
  }
  return `my favorite dog breed is ${breed}`
};

console.log(`When it comes to pets, ${dog('German Shepherd')}`);
console.log(`When it comes to pets, ${dog()}`);

// 1.Create a function that creates an object with three properties: 
// name, age, profession. Have the function take an array as an argument.
// In the body of the function, loop over the array to set the values of 
// the object’s properties. log the result to the console as a table.
// 2.Create a second function that takes three arguments: name, age, 
// profession. Have the function place the three arguments into an array
// and pass that array to the first function by calling it.

let object = {}
let array = []
function getrekt(array) {
  for (let i = 0; i < array.length; i++) {
    if (i == 0) {
      object.name = array[i];
    } else if (i == 1) {
      object.age = array[i];
    } else if (i == 2) {
      object.profession = array[i];
    } else {
      console.log ('error in loop, function getrekt()');
    }
  }
  return object;
}

function yoyo(name, age, profession) {
  array = [name, age, profession];
  getrekt(array);
}

yoyo("Steve", 30, "Nothing");
console.table(object);

yoyo("Biggie Smalls", "24", "Rapper");
console.table(object);


// Alternative method:
const personalObjectMaker = (array) => {
  let personalObj = {};
  const properties = ["name", "age", "profession"];
  //1st forEach argument is the array value at index 'i' in the array
  //2nd argument is always index, 3rd argument is the array itself
  properties.forEach((property, index) => {
  personalObj[property] = array[index];
});
  return console.table(personalObj)
}

const personalInfo = (name, age, profession) => {
  const personalArray = [name, age, profession];
  personalObjectMaker(personalArray);
}

personalInfo("Brendan", 25, "Student");

// 1. Create a function that logs the result of adding two numbers
// 2. Create a second function called calculate that takes three 
//    arguments: two numbers and a function
// 3. Execute the second function and make it output 5

function add(a, b) {
  return a + b;
}

function calculate(x, y, func) {
  return func(x, y);
}

console.log(calculate(2, 3, add));

const article = document.getElementById('article')

article.addEventListener("click", function(event) {
  console.log(event.target.textContent);
})