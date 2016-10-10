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

function updateStatus (answer_string, status_array, guess_char) {
  // compare answer_string with guess_char then output and updated status_array.
  let isFound = false;
  for (let i = 0; i < answer_string.length; i++) {
    if (guess_char === answer_string[i]) {
      status_array[i] = guess_char;
      isFound = true;
    }
  }
  return {status: status_array, found: isFound};
}

function updateMessage (guessFeedbackObj){
  if (guessFeedbackObj === undefined){
    return "yo what up!\nLet's play hangman\nPlease insert a letter.\n" + status.join(" ");
  }

  if (guessFeedbackObj.found === false){
    return "oooopppsssiiieeesss\ntry again.\nyour current status is\n" + guessFeedbackObj.status.join(" ");
  }

  if (guessFeedbackObj.found === true){
    return "Awesome\ntry again.\nyour current status is\n" + guessFeedbackObj.status.join(" ");
  }
}

function makeGuess (){
  let guess;
  let guessFeedbackObj;
  for (let i = 0; i < 5 ; i++) {
    guess = prompt (updateMessage(guessFeedbackObj));

    // TODO: Make status more functional.

    guessFeedbackObj = updateStatus(answer, status, guess);
    status = guessFeedbackObj.status;
    console.log(status);
  }

}

makeGuess();
