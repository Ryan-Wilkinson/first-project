$(document).ready(function() {
	var underscore = '';
	var word = pickAWord();
	var livesLeft = 6;



// array of random words for the game
var overwatchCharacters = ['Genji', 'McCree', 'Pharah', 'Reaper', 'Sombra', 'Tracer', 'Bastion', 'Hanzo', 'Junkrat', 'Mei', 'Torbjorn', 'Widowmaker', 'DVA', 'Orisa', 'Reinhardt', 'Roadhog', 'Winston', 'Zarya', 'Ana', 'Lucio', 'Mercy', 'Symmetra', 'Zenyatta'];

var randomWord = overwatchCharacters[Math.floor(Math.random() * overwatchCharacters.length)];

// function for picking a random word
pickAWord();
function pickAWord() {
	$('.secretClass').text(randomWord);
};

for (var i = 0; i < randomWord.length; i++) {
	$('#secret').text((underscore += '_ '));
}

});	