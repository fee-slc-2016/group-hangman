"use strict";

console.log('cheese and puppies');

let char = prompt ('What character would you like to try next?');

 // Note that the console.log below uses two parameters.  By default it will autopopulate the space between the two.  This is only if they are both strings.

console.log('the player is trying', char);

// We are using 'cheese' as the answer and 'e' as the guess for now.

let answer = "cheese";
let status = createStatus(answer);
let guess = "e";

function createStatus (answer_string) {
  let status_array = [];
  for (let i = 0; i < answer_string.length; i++) {
    status_array.push("_");
  }
  return status_array;
}
console.log(status);
