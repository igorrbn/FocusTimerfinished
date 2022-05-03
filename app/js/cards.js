import { soundCards } from './data.js';

function getSelectedCard(card, element) {
  let selectedCard = soundCards[card];
  selectedCard.displayElement = element;

  let inputVol = element.lastElementChild;
  selectedCard.volume = inputVol;

  return selectedCard;
}

function activateCard(card) {
  let cardDiv = card.displayElement;

  cardDiv.classList.add('card-active');

  card.sound.play();
  card.sound.loop = true;
}

function updateVolume(card) {
  card.volume.addEventListener('change', () => {
    let maxVolume = card.volume.value / 100;

    card.sound.volume = maxVolume;
  });
}

function disableCard(card) {
  let cardDiv = card.displayElement;
  let defaultVolume = 50;

  cardDiv.classList.remove('card-active');

  card.sound.pause();
  card.volume.value = defaultVolume;
}

function checkCard() {
  this.isActive = this.isActive === false ? true : false;

  if (this.isActive) {
    activateCard(this);
    updateVolume(this);
  } else {
    disableCard(this);
  }
}

export { checkCard, getSelectedCard };
