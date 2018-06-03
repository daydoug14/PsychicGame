var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];


document.onkeyup = function(event) {
   
var userGuess = event.key;

var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)]

var userGuess = event.key;

		 	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

		 	var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
		 	

			if (options.indexOf(userGuess) > -1) {

				if (userGuess === computerGuess) {
					wins++;
					guessesLeft = 9;
					lettersGuessed = [];
				}

				if (userGuess != computerGuess) {
					guessesLeft --;
					lettersGuessed.push(userGuess);
				}

				if (guessesLeft === 0) {

				guessesLeft = 9;
				losses ++;
				lettersGuessed = [];

				
			}

			var html = 
			"<h1> The Psychic Game </h1>" +
			"<p>Guess what letter I'm thinking of!</p>" +
			"<p>Wins: " + wins + "</p>" +
			"<p>Losses: " + losses + "</p>" +
			"<p>Guesses Left: " + guessesLeft + "</p>" +
			"<p>Your Guesses so far: " + lettersGuessed.join(", ") + "</p>";

			document.querySelector("#game").innerHTML = html;

			
        console.log(userGuess)    
        }
		};

    
    

    