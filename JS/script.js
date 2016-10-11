"use strict";

console.log('cheese and puppies'); // TODO: remove after functioning

let hangman_config = {}; // TODO: remove from global
hangman_config.answer = "cheese"; // TODO: randomize
hangman_config.status = createStatus(hangman_config.answer); // TODO: remove from global
hangman_config.tries = 8; // TODO: remove from global

function createStatus (answer_string) {
  let status_array = [];
  for (let i = 0; i < answer_string.length; i++) {
    status_array.push("_");
  }
  return status_array;
}

function updateStatus (answer, status, guess_char) {
  // compare answer_string with guess_char then output and updated status_array.
  let isFound = false;
  for (let i = 0; i < answer.length; i++) {
    if (guess_char === answer[i]) {
      status[i] = guess_char;
      isFound = true;
    }
  }
  return {status: status, found: isFound};
}

function updateMessage (found, status, tries, guessed){
  if (found === false){
    return "oooopppsssiiieeesss\nYou have " + tries + " tries remaining.\nPlease try again.\nYour current status is\n" + status.join(" ") + "\nLetters guessed: " + guessed.join(" ");
  }
  if (found === true){
    return "Awesome\ntry again.\nYou have " + tries + " tries remaining.\nyour current status is\n" + status.join(" ") + "\nLetters guessed: " + guessed.join(" ");
  }
}

function makeGuess (){
  let guess;
  let tries = hangman_config.tries;
  let hangman = {};
  let guess_status = hangman_config.status;
  let found;
  let guessed = [];
  let answer = hangman_config.answer;
  let msg = "yo what up!\nLet's play hangman\nYou have " + tries + " tries.\nPlease insert a letter.\n" + guess_status.join(" ");

  while (tries) {
    guess = prompt(msg);

    guessed.push(guess);

    guessed.sort();

    let {status, found} = updateStatus(answer, guess_status, guess);

    if (found) {
      if (status.join('') === hangman_config.answer) {
        alert ("Wow, you're something special, because you just won this game!");
        return true;
      }
    }
    else {
      tries--; // Only decreases with incorrect letters.
      if (tries === 0) {
        alert ("Oh no, you will never get those 10 mins back.");
      }
    }
    // updateMessage (found, status, tries, guessed)
    msg = updateMessage(found, guess_status, tries, guessed);
  }
}

makeGuess();
