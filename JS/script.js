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

function updateStatus (hangman, guess_char) {
  // compare answer_string with guess_char then output and updated status_array.
  let isFound = false;
  for (let i = 0; i < hangman.answer.length; i++) {
    if (guess_char === hangman.answer[i]) {
      hangman.status[i] = guess_char;
      isFound = true;
    }
  }
  hangman.found = isFound;
  return hangman;
}

function updateMessage (hangman){
  console.log("hangman" + hangman);
  if (hangman.found === undefined){
    return "yo what up!\nLet's play hangman\nYou have " + hangman_config.tries + " tries.\nPlease insert a letter.\n" + hangman_config.status.join(" ");
  }
  if (hangman.found === false){
    console.log("hangman" + hangman);

    return "oooopppsssiiieeesss\nYou have " + hangman.tries + " tries remaining.\nPlease try again.\nYour current status is\n" + hangman.status.join(" ") + "\nLetters guessed: " + hangman.guessed.join(" ");
  }
  if (hangman.found === true){
    console.log("hangman" + hangman);

    return "Awesome\ntry again.\nYou have " + hangman.tries + " tries remaining.\nyour current status is\n" + hangman.status.join(" ") + "\nLetters guessed: " + hangman.guessed.join(" ");
  }
}

function makeGuess (){
  let guess;
  let tries = hangman_config.tries;
  let hangman = {};

  hangman.guessed = [];
  hangman.tries = hangman_config.tries;
  hangman.status = hangman_config.status;
  hangman.answer = hangman_config.answer;
  hangman.found = false;

  while (tries) {
    guess = prompt(updateMessage(hangman));
    console.log("hangman: " + hangman);


    hangman.guessed.push(guess);
    console.log("hangman.guessed(pushed): " + hangman.guessed);

    hangman.guessed.sort();
    console.log("hangman.guessed(sorted): " + hangman.guessed);
``
    // TODO: Make status more functional.

    hangman = updateStatus(hangman, guess);
    console.log("hangman.guessed(post updateStatus): " + hangman.guessed);


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
      if (tries === 0) {
        alert ("Oh no, you will never get those 10 mins back.");
      }
    }
    console.log("hangman_config.status" + hangman_config.status);
  }
}

makeGuess();
