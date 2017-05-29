'use strict';
let henSound = new Audio('hen.wav');

function newQuestion() {
  henSound.play();
  let rand = Math.floor(Math.random() * questions.length);
  document.getElementById('question').textContent = questions[rand];
}

document.getElementById('button').addEventListener('click', newQuestion);
newQuestion();
