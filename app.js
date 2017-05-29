'use strict';
let henSound = new Audio('hen.wav');

function newQuestion() {
  let rand = Math.floor(Math.random() * questions.length);
  document.getElementById('question').textContent = questions[rand];
  henSound.play();
}

document.getElementById('button').addEventListener('click', newQuestion);

newQuestion();
