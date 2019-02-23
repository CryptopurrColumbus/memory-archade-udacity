//card flip on click and get id of its parent element
// add classes open and show to a card when it is clicked


//  matching two cards

/*
 * Create a list that holds all of your cards
 */

 // * Display the cards on the page


let openedcards = [];
let matchedcards = [];
let clickcount = 0;

function clickelement (e) {
	if (e.target.nodeName === 'LI') {
		clickcount++;
		istar();
        let a = e.target;
  		openedcards.push(a);
  		a.classList.add("open", "show");		
  		if (openedcards.length == 2) {
            let x = openedcards[0].getElementsByClassName('fa')[0];
  			let y = openedcards[1].getElementsByClassName('fa')[0];
  			if (x.className == y.className) {
  			    g = x.closest('li');
  				h = y.closest('li');
  				g.classList.add("match");
  				h.classList.add("match");
  				matchedcards.push(openedcards[0]);
  				matchedcards.push(openedcards[1]);
  			} else {
  				// css or js for showing open show class is not 
  				// working here
				g = x.closest('li');
				h = y.closest('li');
                g.classList.remove("open","show");
				h.classList.remove("open","show");
  			}
        openedcards = [];
    	}
  	} else {
    	console.log('No card was clicked. Please click a card.');
    }
}


function youwin (e) { 
	if (matchedcards.length == 16) {
		alert('you win');
	}
} 

function resetdeck() {
	let carddecks = [...document.getElementsByClassName('card')];
    for (carddeck of carddecks) {
    	carddeck.classList.remove("open", "show", "match");
    }

}

function removestar2() {
	let ul = document.getElementsByClassName("stars")[0];
	if (ul.children.length == 3) {
		ul.removeChild(ul.children[2]);
		document.getElementsByClassName('moves')[0].textContent = "2";
	}

}

function removestar1() {
	let ul = document.getElementsByClassName("stars")[0];
	if (ul.children.length == 2) {
		ul.removeChild(ul.children[1]);
		document.getElementsByClassName('moves')[0].textContent = "1";
	}

}

function istar(e) {

    if (clickcount > 4 && clickcount < 8) {
		removestar2();
	} else if (clickcount >= 8) {
		removestar1();
	}

}

const deckSel = document.getElementsByClassName('deck')[0];
deckSel.addEventListener('click', clickelement);
deckSel.addEventListener('click', youwin);

const restartbtn = document.getElementsByClassName('restart')[0];
restartbtn.addEventListener('click', resetdeck);

/*
 
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





