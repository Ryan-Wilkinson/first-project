$(document).ready(function() {
	var chosenWord = '';
	var ourWord = [];
	var blankSpaces = [];
	var letterIndex = [];
	var livesLeft = 6;
	var possibleWords = ['GENJI', 'MCCREE', 'PHARAH', 'REAPER', 'SOMBRA', 'TRACER', 'BASTION', 'HANZO', 'JUNKRAT', 'MEI', 'TORBJORN', 'WIDOWMAKER', 'DVA', 'ORISA', 'REINHARDT', 'ROADHOG', 'WINSTON', 'ZARYA', 'ANA', 'LUCIO', 'MERCY', 'SYMMETRA', 'ZENYATTA'];



// array of random words for the game


// converts words to '_ '
$('#newGame').click(function() {
var chosenWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
	for (var i = 0; i < chosenWord.length; i++) {
		ourWord.push(chosenWord[i]);
		blankSpaces.push('_ ');
}
	$('#secret').append((blankSpaces));
	alert(ourWord);
});


$('.letter').click(function() {
	var theLetter = this.innerHTML;
	for (var i = 0; i < ourWord.length; i++) {
		if (theLetter === ourWord[i]) {
			letterIndex.push(i);
		}
	}
console.log(letterIndex);
});











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



});	