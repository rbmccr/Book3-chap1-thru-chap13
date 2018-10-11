// Use JavaScript to obtain a reference to the first section with the class of
// article__header and change its text with the textContent property to "Welcome
// to the {insert your name here} blog"
var header1 = document.querySelector(".article__header");
header1.textContent = "Welcome to the Brendan blog";

// Use JavaScript to obtain a reference to all article__header elements 
// and change their classList property value to article__header important.
var headers = document.querySelectorAll(".article__header");
for (i = 0; i < headers.length; i++) {
  headers[i].classList.add("important");
  console.log(headers[i].classList);
}

// Obtain a reference the element with a class of dashed and remove it.
var dashedParent = document.querySelector(".article");
var dashed = document.querySelector(".dashed");
dashedParent.removeChild(dashed);

// Obtain a reference the element with a class of article__footer and add
// the class of goldenrod it.
var header1 = document.querySelector(".article__footer");
header1.classList.add("goldenrod");