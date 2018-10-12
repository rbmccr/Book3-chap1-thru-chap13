 // Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];
/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/

// Add logic to addExcitement that places an exclamation point (!) 
// after every third word.

// Add a new argument to the function so that a developer can specify
// which character should be displayed instead of it always being an 
// exclamation point.

function addExcitement (theWordArray, punctuation) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
      // Concatenate the new word onto buildMeUp
      if (i % 3 === 0 && i > 0) {
        buildMeUp += theWordArray[i] + punctuation +" ";
      } else {
        buildMeUp += theWordArray[i] + " ";
      }
      // Print buildMeUp to the console
      console.log(buildMeUp);
    }

}
// Invoke the function and pass in the array
addExcitement(sentence, "?")

//advanced challenge -----------------------------------------
// rewrite the above function as arrow function
let newBuildMeUp = "";

let funk = (theWordArray, punctuation) => {
  for (let i = 0; i < theWordArray.length; i++) {
    if (i % 3 === 0 && i > 0) {
      newBuildMeUp += theWordArray[i] + punctuation +" ";
    } else {
      newBuildMeUp += theWordArray[i] + " ";
    }
    console.log(newBuildMeUp);
  }
}

funk(sentence, "#");