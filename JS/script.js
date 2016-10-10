"use strict";

console.log('cheese and puppies');

// We are using 'cheese' as the answer and 'e' as the guess for now.

let hangman_config = {};
hangman_config.answer = "cheese";
hangman_config.status = createStatus(hangman_config.answer);
hangman_config.tries = 8;


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

function updateMessage (hangman){
  if (hangman === undefined){
    // TODO no magic numbers!
    return "yo what up!\nLet's play hangman\nYou have " + hangman_config.tries + " tries.\nPlease insert a letter.\n" + hangman_config.status.join(" ");
  }
  if (hangman.found === false){
    return "oooopppsssiiieeesss\nYou have " + hangman.tries + " tries remaining.\nPlease try again.\nYour current status is\n" + hangman.status.join(" ");
  }
  if (hangman.found === true){
    return "Awesome\ntry again.\nYou have " + hangman.tries + " tries remaining.\nyour current status is\n" + hangman.status.join(" ");
  }
}

function makeGuess (){
  let guess;
  let hangman;
  let tries = hangman_config.tries;
  while (tries) {
    guess = prompt (updateMessage(hangman));

    // TODO: Make status more functional.

    hangman = updateStatus(hangman_config.answer, hangman_config.status, guess);
    hangman_config.status = hangman.status;
    hangman.tries = hangman.tries || tries;
    if (hangman.found) {
      if (hangman.status.join('') === hangman_config.answer) {
        alert ("Wow, you're something special, because you just won this game!");
        return true;
      }
    }
    else {
      tries--; // Only decreases with incorrect letters.
      hangman.tries = tries;
    }
    console.log(hangman_config.status);
  }
}

makeGuess();
