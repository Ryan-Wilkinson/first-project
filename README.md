# Hangman Project!
First Project for WDI-9

## Project Overview
For the first project I decided to go with re-creating the timeless game: Hangman. The game starts when you click the "Start New Game" button. The game randomly chooses a word
from a list of preset words. You will have six lives to try and guess the word correctly. You use the alphabet buttons to go through and pick the letters you would like to guess. If the letter you choose is not in the word you will lose a word and the hangman will start to appear. After six incorrect guesses the entire hangman is displayed and you will lose the game. However if you manage to guess the word correctly you win. After either winnin or losing the game will restart after five seconds.

## Link to the IO
[Hangman Webpage](https://ryan-wilkinson.github.io/)

## Trello Board
[Hangman Trello Flow](https://trello.com/b/6Z3myJRZ/first-project)

## Wireframes
### First Sketch
With this I orginally wanted to do boxes and and overlay them and hide certain sides to make the actual hanged man. Did not go this route, no clue why I thought this would be a good idea.

![First Design Layout](http://i.imgur.com/125YbeQ.jpg)

### Start-Game
![Start-Game](https://github.com/Ryan-Wilkinson/hangman/blob/master/When-Start-Is-Clicked.png)

### Playing Through
![Play-Through](https://github.com/Ryan-Wilkinson/hangman/blob/master/Letters%20in%2C%20Lives%20lost.png)

### First Iteration of the Array Manipulation
Was trying to make a new array of the word when it swept through and checked for the letter, however it would overwrite any letters before it because it would check just for the letter that was pressed, if it didnt match it would place a dash.

![Awkward Methodology](https://github.com/Ryan-Wilkinson/hangman/blob/master/First-Iteration.png)