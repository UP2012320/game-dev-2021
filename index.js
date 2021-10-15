'use strict';
// If your solution needs to add any
// listeners do so here
function init() {
  const nickInput = document.querySelector('#nick');

  nickInput.addEventListener('input', nickChanged);
}

// Here you should add any other
// code, functions, etc.

function updateLeaderBoard(names, me) {
  const top10 = document.querySelector('#top10');

  top10.textContent = '';

  names.forEach((name, i) => {
    // Don't add more than 10
    if (i >= 10) {
      return;
    }

    const nameListItem = document.createElement('li');
    nameListItem.textContent = name;

    if (name === me) {
      nameListItem.classList.add('myself');
    }

    top10.appendChild(nameListItem);
  });
}

function nickChanged() {
  const playerName = document.querySelector('#playername');
  const nickInput = document.querySelector('#nick');

  playerName.textContent = nickInput.value;
}

function updateStep() {
  const scaleRange = document.querySelector('#scalerange');

  step = Number.parseInt(scaleRange.value);
}

function leaders(max) {
  if (max <= 0) {
    return [];
  }

  const top10 = document.querySelectorAll('#top10 > li');

  return [...top10]
      .map(row => row.textContent)
      .slice(0, max);
}

// Don't edit below this line
window.addEventListener('load', init);
