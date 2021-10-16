'use strict';
// If your solution needs to add any
// listeners do so here

function init() {
  canvas.addEventListener('click', () => {
    colourIndex = colourIndex === colours.length - 1 ? 0 : colourIndex + 1;
  });

  const nickInput = document.querySelector('#nick');

  nickInput.addEventListener('input', nickChanged);
}

// Here you should add any other
// code, functions, etc.

let colourIndex = 0;

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

  // Slice to only take 10, shouldn't need to since we check when building the list but good to check
  return [...top10]
      .map(row => row.textContent)
      .slice(0, max);
}

drawUserPos = () => {
  context.beginPath();
  context.lineWidth = 2;
  context.strokeStyle = '#000';
  context.arc(halfWidth + pointer.xOffset, halfHeight + pointer.yOffset, (pointer.radius / step) * 50, 0, 2 * Math.PI);
  context.stroke();
};

drawPointerPos = () => {
  context.beginPath();
  context.lineWidth = 2;
  context.fillStyle = colours[colourIndex];
  context.arc(halfWidth, halfHeight, step, 0, 2 * Math.PI);
  context.fill();
};

// Don't edit below this line
window.addEventListener('load', init);
