'use strict';
// If your solution needs to add any
// listeners do so here
function init() {
  const nickInput = document.querySelector('#nick');

  console.log(nickInput);
  nickInput.addEventListener('o', nickChanged);
}

// Here you should add any other
// code, functions, etc.

function updateLeaderBoard(names, me) {
  const top10 = document.querySelector('#top10');

  top10.textContent = '';

  names.forEach((name, i) => {
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
  const playerName = document.querySelector('#player > h1');
  const nickInput = document.querySelector('#nick');

  playerName.textContent = nickInput.value;
}

// Don't edit below this line
window.addEventListener('load', init);
