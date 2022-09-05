const refs = {
  body: document.querySelector('body'),
  startButton: document.querySelector('[data-start]'),
  stopButton: document.querySelector('[data-stop]'),
};

let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function setColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
}

refs.stopButton.setAttribute('disabled', 'disabled');

refs.startButton.addEventListener('click', () => {
  refs.startButton.setAttribute('disabled', 'disabled');
  refs.stopButton.removeAttribute('disabled', 'disabled');
  timerId = setInterval(setColor, 1000);
});

refs.stopButton.addEventListener('click', () => {
  refs.stopButton.setAttribute('disabled', 'disabled');
  refs.startButton.removeAttribute('disabled', 'disabled');
  clearInterval(timerId);
});
