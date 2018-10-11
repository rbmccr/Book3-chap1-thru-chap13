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