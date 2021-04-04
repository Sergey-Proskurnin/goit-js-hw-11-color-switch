const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.querySelector('body'),
  btnStart: document.querySelector('[data-action="start"]'),
  btnStop: document.querySelector('[data-action="stop"]'),
};

const TIME = 1000;
let intervalId = null;
let isActive = false;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.btnStart.addEventListener('click', onStartChangeBgcBody);
refs.btnStop.addEventListener('click', onStopChangeBgcBody);

function onStartChangeBgcBody() {
  if (isActive) {
    return;
  }
  intervalId = setInterval(onChangeColorBody, TIME, colors);
}

function onStopChangeBgcBody() {
  clearInterval(intervalId);
  isActive = false;
}

function onChangeColorBody(colors) {
  refs.body.style.backgroundColor = `${
    colors[randomIntegerFromInterval(0, colors.length - 1)]
  }`;
  isActive = true;
}
