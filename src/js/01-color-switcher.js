function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
let intervalId;

startButton.addEventListener('click', onStart);
stopButton.addEventListener('click', onStop);

function onStart() {
  startButton.disabled = true;
  stopButton.disabled = false;
  intervalId = setInterval(changeColor, 1000);
}

function onStop() {
  startButton.disabled = false;
  stopButton.disabled = true;
  clearInterval(intervalId);
}

function changeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}
