$(document).ready(function() {
	var chosenWord = '';
	var ourWord = [];
	var blankSpaces = [];
	var letterIndex = [];
	var arrayReplace = [];
	var previousGuesses = [];
	// var livesLeft = $('#livesLeftNumber');  // added in while making lives counter
	var lives = 6;							// added in while making lives counter
	var possibleWords = ['GENJI', 'MCCREE', 'PHARAH', 'REAPER', 'SOMBRA', 'TRACER', 'BASTION', 'HANZO', 'JUNKRAT', 'MEI', 'TORBJORN', 'WIDOWMAKER', 'DVA', 'ORISA', 'REINHARDT', 'ROADHOG', 'WINSTON', 'ZARYA', 'ANA', 'LUCIO', 'MERCY', 'SYMMETRA', 'ZENYATTA'];


// converts words to '_ '
$('#newGame').on('click', newGameClick) // When clicked runs the newGameClick function
$('.letter').on('click', clickingLetterButtons) // when clicked runs the clickingLetterButtons function

// Reset game function, have it being called when you either win or lose.
// function resetTheGame() {
// 	var lives = 6;	
// 	var chosenWord = '';
// 	var ourWord = [];
// 	var blankSpaces = [];
// 	var letterIndex = [];
// 	var arrayReplace = [];
// 	var previousGuesses = [];
// };

 // when clicking the start button, run this function
function newGameClick() {
var chosenWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
	for (var i = 0; i < chosenWord.length; i++) {
		ourWord.push(chosenWord[i]);
		blankSpaces.push('_ ');
}
	$('#secret').append((blankSpaces));
	$('#livesLeftNumber').text(6);           // adds 6 lives when start is clicked
	alert(ourWord);  
};                 // adds alert of the random word chosen, remember to comment out after presentations


// when clicking ANY of the letter buttons run this function
function clickingLetterButtons() {
	$(this).hide();						// Hides the button after its pressed.
	var pressedLetter = this.innerHTML;    // assings button pressed to var pressedLetter
	for (var i = 0; i < ourWord.length; i++) {   // scans through every single letter in the array
		if (pressedLetter === ourWord[i]) {    // if the letter is in the ourWord (randomly generated word) variable
			blankSpaces[i] = pressedLetter;   // then replace that blank space with the pressed letter
		}
	}

		$('.secretClass').text(blankSpaces.join(' '));

		if (blankSpaces.indexOf('_ ') === -1) {     // after each cycle of scanning for the letter it also scans for blank spaces
			$('#incorrectTryBox').text('You Win!'); // writes over lives section if no spaces in the word
			// alert('Congrats! You Win!');
			}
		if (!(ourWord.indexOf(pressedLetter) > -1)) {
			lives -= 1;
			$('#livesLeftNumber').text(lives);
				// console.log(lives);
			}	
		if (lives < 1) {
			$('#incorrectTryBox').text('GAME OVER!!!!');
		}
		// var p = (ourWord.indexOf(pressedLetter));
};


// function livesCounter() {
// if (lives < 1); {
// $('#incorrectTryBox').text('GAME OVER!');
// }	
// };

// #1 was here vvvvvv see bottom.




function showHangedMan() {
	switch (livesLeft) {
		case 0:
				$('#hangmanHead').hide();
				$('#hangmanBody').hide();
				$('#hangmanLarm').hide();
				$('#hangmanRarm').hide();
				$('#hangmanLleg').hide();
				$('#hangmanRleg').hide();
					break;
		case 1:
				$('#hangmanHead').show();
					break;
		case 2:
				$('#hangmanBody').show();
					break;
		case 3:
				$('#hangmanLarm').show();
					break;
		case 4:
				$('#hangmanRarm').show();
					break;
		case 5:
				$('#hangmanLleg').show();
					break;			
		case 6:
				$('#hangmanRleg').show();
					break;
	}
}

// <---- IM NUMBER 1 --->
// 	var pressedLetter 
// 	for (var i = 0; i < ourWord.length; i++) {
// 		if(pressedLetter !== ourWord[i])  {
// 			arrayReplace[i] = pressedLetter

// 	// 		arrayReplace.push('_ ')	;
// 	// 	}
// 	// 	else {
// 	// 		arrayReplace.push(pressedLetter);
// 	// 	}
// 	// }

// // blankSpaces = arrayReplace;
// $('#secret').text((blankSpaces));
// console.log(blankSpaces);
// });
// <--- IM NUMBER 1 --->

});	