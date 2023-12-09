'use strict';

// navigation menu elements
const btnMenu = document.getElementById('nav-btn');
const menu = document.querySelector('.nav-menu');
const overlay = document.querySelector('.overlay');

//game functionality elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

let btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

let diceImg = document.querySelector('.dice');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

let scores, currentScore, activePlayer, diceNumber, playing;

//starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  diceNumber = '';
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceImg.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

//run the game on load;
init();

let switchPlayer = function () {
  currentScore += diceNumber;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
//rolling dice functionality

btnRoll.addEventListener('click', function () {
  //is the game playable ?
  if (playing) {
    //1. generate a random dice roll
    diceNumber = Math.trunc(Math.random() * 6 + 1);
    console.log(diceNumber);
    //2. display the dice
    diceImg.classList.remove('hidden');
    diceImg.src = `./images/dice-${diceNumber}.png`;

    //3. check for rolled 1
    if (diceNumber !== 1) {
      //add dice to current score
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  //is the game playable ?
  if (playing) {
    //1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2.Check if player's score is >= 100
    if (scores[activePlayer] >= 50) {
      //Finish the game
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelectosr(`.player--${activePlayer}`)
        .classList.remove('player--active');
      playing = false;
    } else {
      //Switch to next player
      switchPlayer();
    }
  }

  btnNew.addEventListener('click', init);
});

//menu

const closeMenu = function () {
  menu.classList.add('hidden');
  menu.classList.remove('flex');
  overlay.classList.add('hidden');
};

btnMenu.addEventListener('click', function () {
  menu.classList.remove('hidden');
  menu.classList.add('flex');
  overlay.classList.remove('hidden');
});

overlay.addEventListener('click', closeMenu);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeMenu();
});
