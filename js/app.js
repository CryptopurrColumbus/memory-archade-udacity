// Initiate a few variables
let openCards = [];
let matchedCards = [];
let clickCount = 0;
let timeCount = 0;
let timerPtr;

// Function which adds the timer feature
function startTimer() {
  timeCount += 1;
  timerPtr = setTimeout(startTimer, 1000);
}

// Helper function to shuffle the cards
function shuffleArray(array) {
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

// Function to shuffle Deck
// Remove all cards from DOM,
// use the shuffleArray method,
// Reinsert in the DOM
function shuffleDeck() {
  let cards = [...document.getElementsByClassName('card')];
  let deck = document.getElementsByClassName('deck')[0];
  while (deck.firstChild) {
    deck.removeChild(deck.firstChild);
  }
  cards = shuffleArray(cards);
  for (element of cards) {
    deck.appendChild(element);
  }
}

function updateMove() {
  document.getElementsByClassName('moves')[0].textContent = clickCount;
}

function checkAndUpdateStar(e) {
  let ul = document.getElementsByClassName('stars')[0];
  if (clickCount > 16 && clickCount < 28) {
    if (ul.children.length == 3) {
      ul.children[2].style.display = 'none';
    }
  } else if (clickCount >= 28) {
    if (ul.children.length == 2) {
      ul.children[1].style.display = 'none';
    }
  }
}

// When the click count increases, update the moves count
// in DOM, check if star count needs adjustment
function cardClickCountHandler() {
    clickCount++;
    updateMove();
    checkAndUpdateStar();
}

function cardOnClickHandler(e) {
  let eventTarget = e.target;
  // We only consider clicks on the cards
  if (eventTarget.nodeName === 'LI') {
    cardClickCountHandler();
    openCards.push(eventTarget);
    // Open the cards
    eventTarget.classList.add('open', 'show');
    // We keep the max length of openCards to 2
    // and thus we don't need to do anything
    // when there is only one element in openCards
    // apart from keeping the one element open
    if (openCards.length == 2) {
      let prev = openCards[0].getElementsByClassName('fa')[0];
      let curr = openCards[1].getElementsByClassName('fa')[0];
      prevCard = prev.closest('li');
      currCard = curr.closest('li');
      if (prev.className == curr.className) {
        // The cards matched
        prevCard.classList.add('match');
        currCard.classList.add('match');
        matchedCards.push(openCards[0]);
        matchedCards.push(openCards[1]);
      } else {
        // The cards didn't match
        prevCard.classList.remove('open', 'show');
        currCard.classList.remove('open', 'show');
      }
      // The max length of openCards we want is 2.
      openCards = [];
    }
  } else {
    console.log('No card was clicked. Please click a card.');
  }
}

// check if victory condition has been met
// if so, alert the user.
function victoryHandler(e) {
  if (matchedCards.length == 16) {
    alert(`Congratulations! You have won! You took ${timeCount} 
			seconds to complete the game.`);
  }
}

// Reset the whole game platform, we want to play again
function resetDeck() {
  let cards = [...document.getElementsByClassName('card')];
  for (card of cards) {
    card.classList.remove('open', 'show', 'match');
  }

  shuffleDeck();

  let ul = document.getElementsByClassName('stars')[0];
  ul.children[2].style.display = 'inline-block';
  ul.children[1].style.display = 'inline-block';

  clickCount = 0;
  updateMove();

  timeCount = 0;
  clearTimeout(timerPtr);
  startTimer();

  matchedCards = [];
}


// Register event handlers, start the timer
function main() {
  const deckSel = document.getElementsByClassName('deck')[0];
  deckSel.addEventListener('click', cardOnClickHandler);
  deckSel.addEventListener('click', victoryHandler);

  const restartBtn = document.getElementsByClassName('restart')[0];
  restartBtn.addEventListener('click', resetDeck);

  document.addEventListener('DOMContentLoaded', shuffleDeck);
  startTimer();
}

main();
