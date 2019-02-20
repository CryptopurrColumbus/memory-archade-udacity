//card flip on click and get id of its parent element
// add classes open and show to a card when it is clicked

function clickelement (e) {
	if (e.target.nodeName === 'LI') 
  	{
  		console.log(`Card clicked was ${e.target.id}.`);
  		let a = e.target;
  		console.log(a.classList);
  		a.classList.add("open","show");
  		console.log(a.classList);

  	}
    else 
    {
    	console.log('No card was clicked. Please click a card.');
    }
}

const deckSel = document.getElementsByClassName('deck')[0];
deckSel.addEventListener('click', clickelement );



/*
 * Create a list that holds all of your cards
 */
 // lists of all cards by types
 
 let closedcards = document.getElementsByClassName('card');
 let openedcards = document.getElementsByClassName('open');
 let matchedcards = document.getElementsByClassName('show');


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
