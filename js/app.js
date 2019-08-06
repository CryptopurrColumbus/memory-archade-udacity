// Initiate a few variables
let openedcards = [];
let matchedcards = [];
let clickcount = 0;
let timeCount = 0;
let timerPtr;

// Funcation which adds the timer feature
function startTimer() {
  timeCount += 1;
  timerPtr = setTimeout(startTimer, 1000);
}

// shuffle the cards
function implementshuffle() {
  let array = [...document.getElementsByClassName('card')];
  let woodoo = document.getElementsByClassName('deck')[0];
  while (woodoo.firstChild) {
    woodoo.removeChild(woodoo.firstChild);
  }
  array = shuffle(array);
  for (element of array) {
    woodoo.appendChild(element);
  }
}

function updatemove() {
  document.getElementsByClassName('moves')[0].textContent = clickcount;
}

function clickelement(e) {
  if (e.target.nodeName === 'LI') {
    clickcount++;
    updatemove();
    istar();
    let a = e.target;
    openedcards.push(a);
    a.classList.add('open', 'show');
    if (openedcards.length == 2) {
      let x = openedcards[0].getElementsByClassName('fa')[0];
      let y = openedcards[1].getElementsByClassName('fa')[0];
      if (x.className == y.className) {
        g = x.closest('li');
        h = y.closest('li');
        g.classList.add('match');
        h.classList.add('match');
        matchedcards.push(openedcards[0]);
        matchedcards.push(openedcards[1]);
      } else {
        // css or js for showing open show class is not
        // working here
        g = x.closest('li');
        h = y.closest('li');
        g.classList.remove('open', 'show');
        h.classList.remove('open', 'show');
      }
      openedcards = [];
    }
  } else {
    console.log('No card was clicked. Please click a card.');
  }
}

function youwin(e) {
  if (matchedcards.length == 16) {
    alert(`Congratulations! You have won! You took ${timeCount} 
			seconds to complete the game.`);
  }
}

function resetdeck() {
  let carddecks = [...document.getElementsByClassName('card')];
  for (carddeck of carddecks) {
    carddeck.classList.remove('open', 'show', 'match');
  }

  implementshuffle();

  let ul = document.getElementsByClassName('stars')[0];
  ul.children[2].style.display = 'inline-block';
  ul.children[1].style.display = 'inline-block';

  clickcount = 0;
  updatemove();

  timeCount = 0;
  clearTimeout(timerPtr);
  startTimer();

  matchedcards = [];
}

function removestar2() {
  let ul = document.getElementsByClassName('stars')[0];
  if (ul.children.length == 3) {
    ul.children[2].style.display = 'none';
  }
}

function removestar1() {
  let ul = document.getElementsByClassName('stars')[0];
  if (ul.children.length == 2) {
    ul.children[1].style.display = 'none';
  }
}

function istar(e) {
  if (clickcount > 16 && clickcount < 28) {
    removestar2();
  } else if (clickcount >= 28) {
    removestar1();
  }
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const deckSel = document.getElementsByClassName('deck')[0];
deckSel.addEventListener('click', clickelement);
deckSel.addEventListener('click', youwin);

const restartbtn = document.getElementsByClassName('restart')[0];
restartbtn.addEventListener('click', resetdeck);

document.addEventListener('DOMContentLoaded', implementshuffle);
startTimer();
