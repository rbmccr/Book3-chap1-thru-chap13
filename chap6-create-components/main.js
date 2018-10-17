const students = [
  {
      name: "Chris Miller",
      class: "History",
      info: "Failed last exam",
      score: 59
  },
  {
      name: "Courtney Seward",
      class: "History",
      info: "Has completed all homework",
      score: 91
  },
  {
      name: "Garrett Ward",
      class: "History",
      info: "Wonderful at helping other students",
      score: 88
  },
  {
      name: "John Dulaney",
      class: "History",
      info: "Has never missed a class or exam",
      score: 92
  },
  {
      name: "Greg Lawrence",
      class: "History",
      info: "Sub-par performance all around",
      score: 64
  },
  {
      name: "Leah Duvic",
      class: "History",
      info: "Wonderful student",
      score: 97
  },
  {
      name: "Jesse Page",
      class: "History",
      info: "Smokes too much. Distracting.",
      score: 76
  },
  {
      name: "Kevin Haggerty",
      class: "History",
      info: "Falls asleep in class",
      score: 79
  },
  {
      name: "Max Wolf",
      class: "History",
      info: "Talks too much",
      score: 83
  },
  {
      name: "Lissa Goforth",
      class: "History",
      info: "Asks pointless, unrelated questions",
      score: 78
  },
  {
      name: "Tyler Bowman",
      class: "History",
      info: "When was the last time he attended class?",
      score: 48
  },
  {
      name: "Ray Medrano",
      class: "History",
      info: "Needs to contribute to in-class discussions",
      score: 95
  }
]

let studentComponent = "";
const container = document.querySelector("#container");

// -------------------------------- Practice -------------------------------- //

// const h1 = (title, style) => {
//   return `<h1 class="${style}">${title}</h1>`;
// }

// const section = (title, style) => {
//   return `<section class="bordered dashed ${style} ${studentComponent}">${title}</section>`;
// }

// const aside = (title, style) => {
//   return `<aside class="${style}">${title}</aside>`;
// }

// const student = (name, classType, info) => `
//     <div id="student">
//         ${h1(name, "xx-large")}
//         ${section(classType, "section--padded")}
//         ${aside(info, "pushRight")}
//     </div>
// `

// function classroom() {
//   for (i = 0; i < students.length; i++) {
//     if (students[i].score >= 60) {
//         studentComponent = "passing";
//     } else {
//         studentComponent = "failing";
//     }
//     container.innerHTML += student(students[i].name, students[i].class, students[i].info);
//   }
// }

// classroom();

// -------------------------------- Challenge -------------------------------- //

      //Method 1

// const h1 = (...props) => {
//   return `<h1 class="${props[1]}">${props[0]}</h1>`
// }

// const section = (...props) => {
//   return `<section class="bordered dashed ${props[1]} ${studentComponent}">${props[0]}</section>`
// }

// const aside = (...props) => {
//   return `<aside class="${props[1]}">${props[0]}</aside>`
// }

// const student = (...props) => `
//     <div id="student">
//         ${h1(props[0], "xx-large")}
//         ${section(props[1], "section--padded")}
//         ${aside(props[2], "pushRight")}
//     </div>
// `

// function classroom() {
//   for (i = 0; i < students.length; i++) {
//     if (students[i].score >= 60) {
//         studentComponent = "passing";
//     } else {
//         studentComponent = "failing";
//     }
//     container.innerHTML += student(students[i].name, students[i].class, students[i].info);
//   }
// }

// classroom();

        // Method 2 --- NOT WORKING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const h1 = (...props) => {
//   return `<h1 class="${props.style}">${props.content}</h1>`
// }

// const section = (...props) => {
//   return `<section class="bordered dashed ${props.style} ${studentComponent}">${props.content}</section>`
// }

// const aside = (...props) => {
//   return `<aside class="${props.style}">${props.content}</aside>`
// }

// const student = (info, ...props) => `
//     <div id="student">
//         ${h1(props.style, "xx-large")}
//         ${section(props.content, "section--padded")}
//         ${aside(info, "pushRight")}
//     </div>
// `

// function classroom() {
//   for (i = 0; i < students.length; i++) {
//     if (students[i].score >= 60) {
//         studentComponent = "passing";
//     } else {
//         studentComponent = "failing";
//     }
//     container.innerHTML += student(students[i].name, students[i].class, students[i].info);
//   }
// }

// classroom();

// -------------------------------- Advanced Challenge -------------------------------- //

let target = document.querySelector('#messages');
let fragment = document.createDocumentFragment();

//creates a section element, adds a class, adds text content, and appends it to the DOM
for (let i = 0; i < 5; i++) {
  const section = document.createElement('section');
  //creates random 5 character line of text (base 36 is 0-9 & A-Z)
  section.textContent = Math.random().toString(36).substring(2, 7);
  section.setAttribute('class', 'message');
  fragment.appendChild(section);
}

target.appendChild(fragment);