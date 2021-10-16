'use strict';
// If your solution needs to add any
// listeners do so here

// !Magical global variables are fetched from lib.js!

function init() {
  // Only worry about clicks targeting the canvas
  canvas.addEventListener('click', onColourChange);

  const nickInput = document.querySelector('#nick');

  nickInput.addEventListener('input', nickChanged);
}

// Here you should add any other
// code, functions, etc.

// For test 6

let colourIndex = 0;

function onColourChange() {
  colourIndex = colourIndex === colours.length - 1 ? 0 : colourIndex + 1;
}

// For test 1

function updateLeaderBoard(names, me) {
  const top10 = document.querySelector('#top10');

  // Clear top10 element's children
  top10.textContent = '';

  // Iterate over name and append an li for each one
  names.forEach((name, i) => {
    // Don't add more than 10
    if (i >= 10) {
      return;
    }

    const nameListItem = document.createElement('li');
    nameListItem.textContent = name;

    // If name is current user add myself class
    if (name === me) {
      nameListItem.classList.add('myself');
    }

    top10.appendChild(nameListItem);
  });
}

// For test 2

function nickChanged() {
  const playerName = document.querySelector('#playername');
  const nickInput = document.querySelector('#nick');

  // Text entered in Input's is stored in value
  playerName.textContent = nickInput.value;
}

// For test 3

function updateStep() {
  const scaleRange = document.querySelector('#scalerange');

  step = Number.parseInt(scaleRange.value);
}

// For test 4

function leaders(max) {
  // Never know when a negative number might somehow appear
  if (max <= 0) {
    return [];
  }

  const top10 = document.querySelectorAll('#top10 > li');

  // Slice to only take 10, shouldn't need to since we check when building the list but good to check
  return [...top10]
      .map(row => row.textContent)
      .slice(0, max);
}

// For test 6

drawUserPos = () => {
  context.beginPath();
  context.lineWidth = 2;
  context.strokeStyle = '#000';

  // Use the same math that's used for the debug rendering
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
