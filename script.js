'use strict';

// console.log(document.querySelector('.message').textContent); //seclector section by class name
// document.querySelector('.message').textContent = '📣 Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;
// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;
let secretNumber = Math.trunc(Math.random() * 20) + 1; // Math.trunc remove decimal
let score = 20;
let highscore = 0;
document.querySelector('.highscore').textContent = highscore;
const x = function () {
  const guess = Number(document.querySelector('.guess').value);
  document.querySelector('.number').textContent = '?';
  console.log(guess);
  document.querySelector('.message').textContent = '📣 Correct Number!';
  //when there is no input
  if (!guess) {
    console.log(
      (document.querySelector('.message').textContent = 'No Number!')
    );
    document.querySelector('.score').textContent = score;
  }
  //when player win
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '📣 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '100px';
    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
    }
  }
  //when guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      score = score - 1;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = '#ff0000';
      document.querySelector('.message').textContent = '📈 Too high!';
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = '😭 YOU LOST THE GAME';
    }
  }
  //when guess is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = '📉 Too low!';
      document.querySelector('body').style.backgroundColor = '#ffa500';
    } else {
      document.querySelector('.message').textContent = '😭 YOU LOST THE GAME';
      document.querySelector('.score').textContent = 0;
    }
  }
};
const y = function () {
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = 'rgba(0, 0, 0, 0.543)';
  document.querySelector('.score').textContent = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
};
document.querySelector('.check').addEventListener('click', x);
document.querySelector('.score').textContent = score;
document.querySelector('.left').addEventListener('click', y);
