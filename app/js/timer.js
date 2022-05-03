import { kitchenTimer } from './data.js';

let timeCount;
let timerActive = false;
const defaultMin = 25;
const defaultSec = 0;
let minutes = defaultMin;
let seconds = defaultSec;

function timerEndSound() {
  kitchenTimer.play();

  let timerDisplay = document.querySelector('.timer-wrapper');

  timerDisplay.classList.add('timer-shake');

  setTimeout(() => {
    timerDisplay.classList.remove('timer-shake');
  }, 2400);
}

function countdown() {
  let isFinished = minutes === 0 && seconds === 0;

  timeCount = setTimeout(() => {
    if (isFinished) {
      timerActive = false;
      timerEndSound();
      togglePlayPauseBtn();
      return;
    }

    if (seconds === 0) {
      seconds = 60;
      --minutes;
    }

    --seconds;

    countdown();
    updateTimeDisplay(minutes, seconds);
  }, 1000);
}

function togglePlayPauseBtn() {
  let playBtn = document.querySelector('#play');
  let pauseBtn = document.querySelector('#pause');

  playBtn.classList.toggle('hide');
  pauseBtn.classList.toggle('hide');
}

function startTimer() {
  timerActive = true;
  togglePlayPauseBtn();
  countdown();
}

function stopTimer() {
  if (timerActive) {
    togglePlayPauseBtn();
    timerActive = false;
  }

  minutes = defaultMin;
  seconds = defaultSec;

  clearTimeout(timeCount);

  updateTimeDisplay(minutes, seconds);
}

function pauseTimer() {
  timerActive = false;

  clearTimeout(timeCount);
  togglePlayPauseBtn();
}

function increaseMinutes() {
  minutes = minutes < 60 ? Number(minutes) + 5 : (minutes = 5);

  updateTimeDisplay(minutes, seconds);
}

function decreaseMinutes() {
  minutes = minutes > 5 ? Number(minutes) - 5 : (minutes = 60);

  updateTimeDisplay(minutes, seconds);
}

function updateTimeDisplay(minutes, seconds) {
  let timerDisplay = document.querySelector('.time');

  seconds = String(seconds).padStart(2, '0');
  minutes = String(minutes).padStart(2, '0');

  timerDisplay.innerText = `${minutes}:${seconds}`;
}

export {
  startTimer,
  stopTimer,
  pauseTimer,
  increaseMinutes,
  decreaseMinutes,
  togglePlayPauseBtn,
  countdown,
  updateTimeDisplay,
  defaultMin,
  defaultSec,
};
