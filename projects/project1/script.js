'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Scoring
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  // No input
  if (!guess) {
    displayMessage('No number!');

    // Correct answer
  } else if (guess === secretNumber) {
    displayMessage('Correct number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // Guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  // Reset score and number
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Reset message
  displayMessage('Start guessing...');

  // Clear the guess field
  document.querySelector('.guess').value = null;

  // Reset background
  document.querySelector('body').style.backgroundColor = 'black';

  // Reset secret number to ?
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
});
