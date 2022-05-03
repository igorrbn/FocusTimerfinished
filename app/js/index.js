import { getSelectedCard } from './cards.js';
import { buttonPressAudio } from './data.js';
import {
  startTimer,
  stopTimer,
  pauseTimer,
  increaseMinutes,
  decreaseMinutes,
  updateTimeDisplay,
  defaultMin,
  defaultSec,
} from './timer.js';

document.addEventListener('DOMContentLoaded', () => {
  (function themeEvents() {
    let themeBtns = document.querySelectorAll('.theme-btn');

    for (let themeBtn of themeBtns) {
      themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        themeBtns[0].classList.toggle('hide');
        themeBtns[1].classList.toggle('hide');
      });
    }
  })();

  (function cardEvents() {
    const cardBtns = document.querySelectorAll('.card-btn');

    for (let cardBtn of cardBtns) {
      cardBtn.addEventListener('click', () => {
        let divCard = cardBtn.parentElement;
        let card = Number(divCard.id);

        let selectedCard = getSelectedCard(card, divCard);
        selectedCard.activate();
      });
    }
  })();

  (function timerEvents() {
    const timerBtns = document.querySelectorAll('.time-btn');

    updateTimeDisplay(defaultMin, defaultSec);

    timerBtns.forEach((timeBtn) => {
      timeBtn.addEventListener('click', () => {
        buttonPressAudio.play();

        let clickedBtn = timeBtn.id;

        switch (clickedBtn) {
          case 'play':
            startTimer();
            break;

          case 'pause':
            pauseTimer();
            break;

          case 'add':
            increaseMinutes();
            break;

          case 'remove':
            decreaseMinutes();
            break;

          case 'stop':
            stopTimer();
            break;
        }
      });
    });
  })();
});
