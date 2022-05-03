import { checkCard } from './cards.js';

const soundCards = [
  {
    name: 'forest',
    sound: new Audio('./assets/sounds/Floresta.wav'),
    volume: 0,
    isActive: false,
    displayElement: '',
    activate: checkCard,
  },
  {
    name: 'rain',
    sound: new Audio('./assets/sounds/Chuva.wav'),
    volume: 0,
    isActive: false,
    displayElement: '',
    activate: checkCard,
  },
  {
    name: 'coffee',
    sound: new Audio('./assets/sounds/Cafeteria.wav'),
    volume: 0,
    isActive: false,
    displayElement: '',
    activate: checkCard,
  },
  {
    name: 'fire',
    sound: new Audio('./assets/sounds/Lareira.wav'),
    volume: 0,
    isActive: false,
    displayElement: '',
    activate: checkCard,
  },
];

const buttonPressAudio = new Audio(
  'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
);
const kitchenTimer = new Audio(
  'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
);

export { soundCards, buttonPressAudio, kitchenTimer };
