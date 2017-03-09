$(document).ready(function() {
	var chosenWord = '';
	var ourWord = [];
	var blankSpaces = [];
	var letterIndex = [];
	var arrayReplace = [];
	var previousGuesses = [];
	var lives = 6;							
	var possibleWords = ['GENJI', 'MCCREE', 'PHARAH', 'REAPER', 'SOMBRA', 'TRACER', 'BASTION', 'HANZO', 'JUNKRAT', 'MEI', 'TORBJORN', 'WIDOWMAKER', 'DVA', 'ORISA', 'REINHARDT', 'ROADHOG', 'WINSTON', 'ZARYA', 'ANA', 'LUCIO', 'MERCY', 'SYMMETRA', 'ZENYATTA'];


// Reset game function, have it being called when you either win or lose.
// var resetTheGame = function() {
// 	var lives = 6;	
// 	var chosenWord = '';
// 	var ourWord = [];						FUCKING JUNK MIGHT COME BACK AND TRY AND USE
// 	var blankSpaces = [];
// 	var letterIndex = [];
// 	var arrayReplace = [];
// 	var previousGuesses = [];
// 	// alert('HEY I RESET!');
// };

 // when clicking the start button, run this function
$('#newGame').click(function() {
var chosenWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];  // randomly picks a word from the array
	for (var i = 0; i < chosenWord.length; i++) {
		ourWord.push(chosenWord[i]);
		blankSpaces.push('_ ');
}
	$('#secret').append((blankSpaces));
	$('#livesLeftNumber').text(lives);  // displays lives on the dom when start game is clicked
	showHangedMan(lives);   // starts the hanged man switch function
	alert(chosenWord);   // adds alert of the random word chosen, remember to comment out after presentations
});                


// when clicking ANY of the letter buttons run this function
$('.letter').click(function() {
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
			setTimeout(location.reload.bind(location), 5000);    // after you win refreshes the page after 5 seconds to start over
			// alert('Congrats! You Win!');   'for testing remove later'
			}
		if (!(ourWord.indexOf(pressedLetter) > -1)) {
			lives -= 1;
			showHangedMan(lives);					// everytime lives counts down goes through the switch/case
			$('#livesLeftNumber').text(lives);
			// console.log(lives);    'for testing, remove later'
			}	
		if (lives < 1) {
			$('#incorrectTryBox').text('GAME OVER!!!!');
			setTimeout(location.reload.bind(location), 5000); // after you lose refreshes the page after 5 seconds to start over
		}
		// var p = (ourWord.indexOf(pressedLetter));
});

// #1 was here vvvvvv see bottom.

var showHangedMan = function(x) {
	switch (x) {
		case 6:
				$('#hangmanHead').hide();
				$('#hangmanBody').hide();
				$('#hangmanLarm').hide();
				$('#hangmanRarm').hide();
				$('#hangmanLleg').hide();
				$('#hangmanRleg').hide();
					break;
		case 5:
				$('#hangmanHead').show();
					break;
		case 4:
				$('#hangmanBody').show();
					break;
		case 3:
				$('#hangmanLarm').show();
					break;
		case 2:
				$('#hangmanRarm').show();
					break;
		case 1:
				$('#hangmanLleg').show();
					break;			
		case 0:
				$('#hangmanRleg').show();
					break;
		default:
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