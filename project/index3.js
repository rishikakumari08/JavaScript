const randomNum = parseInt(Math.random() * 100) + 1; // Removed parentheses

const submit = document.querySelector("#submit");
const userInp = document.querySelector('#guess');
const PrevGuess = document.querySelector('#prevGuess');
const Result = document.querySelector("#result");
const LowOrHi = document.querySelector("#lowOrHi");
const startOver = document.querySelector(".GuessPara");

let guesses = []; // Keep track of all guesses
let numGuess = 1; // Keep track of the number of guesses
let playGame = true;

if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInp.value);
    console.log(guess); // Check guess is logged correctly
    validateGuess(guess);
  });
}

// Check if the guess number is valid or not
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Enter a valid number");
  } else if (guess < 0) {
    alert("Enter a number greater than 0");
  } else if (guess > 100) {
    alert("Enter a number less than 100");
  } else {
    guesses.push(guess);
    if (numGuess >=10) {
      displayGuess(guess);
      displayMessage(`Game Over, the correct number was ${randomNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

// Check whether the guess is low, high, or correct
function checkGuess(guess) {
  if (guess === randomNum) {
    displayMessage(`You guessed it right!`);
    endGame();
  } else if (guess < randomNum) {
    displayMessage(`Number is too low`);
  } else if (guess > randomNum) {
    displayMessage(`Number is too high`);
  }
}

// Display the guessed number
function displayGuess(guess) {
  userInp.value = ''; // Clear input field
  PrevGuess.innerHTML += ` ${guess}`; // Append guessed number
  numGuess++;
  Result.innerHTML = `${(11 - numGuess)}`; // Update remaining guesses
}

// Display a message
function displayMessage(message) {
  LowOrHi.innerHTML = `<h2 style="color:white;">${message}</h2>`;
}

// Placeholder for new game
function newGame() {
  // Logic for starting a new game would go here
}

// End the game
function endGame() {
  playGame = false; // Disable further guesses
  userInp.disabled = true; // Disable input field
  submit.disabled = true; // Disable submit button
}
