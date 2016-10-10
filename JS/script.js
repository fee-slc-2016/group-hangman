"use strict";

console.log('cheese and puppies');

// We are using 'cheese' as the answer and 'e' as the guess for now.

let answer = "cheese";
let status = createStatus(answer);

function createStatus (answer_string) {
  let status_array = [];
  for (let i = 0; i < answer_string.length; i++) {
    status_array.push("_");
  }
  return status_array;
}
console.log(status);

function updateStatus (answer_string, status_array, guess_char) {
  // compare answer_string with guess_char then output and updated status_array.

  for (let i = 0; i < answer_string.length; i++) {
    if (guess_char === answer_string[i]) {
      status_array[i] = guess_char;
    }
  }
  return status_array;
}

function makeGuess (){
  let guess = prompt ('What character would you like to try next?');
  // TODO: Make status more functional.
  status = updateStatus(answer, status, guess);
}

makeGuess();
