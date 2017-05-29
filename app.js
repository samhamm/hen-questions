'use strict';


function newQuestion() {
  var rand = Math.floor(Math.random() * questions.length);
  document.getElementById('question').textContent = questions[rand];
}

document.getElementById('button').addEventListener('click', newQuestion);

newQuestion();
