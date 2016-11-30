var rockChoice = document.getElementById('rock-choice');
var paperChoice = document.getElementById('paper-choice');
var scissorsChoice = document.getElementById('scissors-choice');
var rpsSelect = document.getElementById('rps-select');
var rpsResults = document.getElementById('rps-results');
var rockShow = document.getElementById('rock-show');
var paperShow = document.getElementById('paper-show');
var scissorsShow = document.getElementById('scissors-show');
var rockComp = document.getElementById('rock-comp');
var paperComp = document.getElementById('paper-comp');
var scissorsComp = document.getElementById('scissors-comp');
var winsNumber = document.getElementById('wins-number');
var lossesNumber = document.getElementById('losses-number');
var drawNumber = document.getElementById('draws-number');
var winLoseText = document.getElementById('winlose-text');
var playAgain = document.getElementById('play-again');
var userChoice = 0;
var compChoice = 0;
var winCount = 0;
var loseCount = 0;
var drawCount = 0;

rockChoice.addEventListener('click', function() {
	userChoice = 1;
	fadeOut(rpsSelect);
	compSelect();
	showHands();
	outcome();
	setTimeout(function(){fadeIn(rpsResults)}, 750);
	setTimeout(function(){fadeIn(playAgain)}, 1750);
});

paperChoice.addEventListener('click', function() {
	userChoice = 2;
	fadeOut(rpsSelect);
	compSelect();
	showHands();
	outcome();
	setTimeout(function(){fadeIn(rpsResults)}, 750);
	setTimeout(function(){fadeIn(playAgain)}, 1750);
});

scissorsChoice.addEventListener('click', function() {
	userChoice = 3;
	fadeOut(rpsSelect);
	compSelect();
	showHands();
	outcome();
	setTimeout(function(){fadeIn(rpsResults)}, 750);
	setTimeout(function(){fadeIn(playAgain)}, 1750);
});

function compSelect() {
	compChoice = Math.floor(Math.random() * 3 + 1);
}

function showHands() {
	switch(userChoice) {
		case 1:
			rockShow.style.display = "inline-block";
			paperShow.style.display = "none";
			scissorsShow.style.display = "none";
			break;
		case 2:
			rockShow.style.display = "none";
			paperShow.style.display = "inline-block";
			scissorsShow.style.display = "none";
			break;
		case 3:
			rockShow.style.display = "none";
			paperShow.style.display = "none";
			scissorsShow.style.display = "inline-block";
			break;
	}

	switch(compChoice) {
		case 1:
			rockComp.style.display = "inline-block";
			paperComp.style.display = "none";
			scissorsComp.style.display = "none";
			break;
		case 2:
			rockComp.style.display = "none";
			paperComp.style.display = "inline-block";
			scissorsComp.style.display = "none";
			break;
		case 3:
			rockComp.style.display = "none";
			paperComp.style.display = "none";
			scissorsComp.style.display = "inline-block";
			break;
	}
}

function outcome() {
	if (userChoice === compChoice) {
		winLoseText.innerText = "It's a draw!"
		setTimeout(function(){addDraw()}, 1250);
	} else {
		if (userChoice === 1) {
			switch(compChoice) {
				case 2:
				winLoseText.innerText = "You lose!"
				setTimeout(function(){addLoss()}, 1250);
					break;
				case 3:
				winLoseText.innerText = "You win!"
				setTimeout(function(){addWin()}, 1250);
					break;
			}
		}

		if (userChoice === 2) {
			switch(compChoice) {
				case 3:
				winLoseText.innerText = "You lose!"
				setTimeout(function(){addLoss()}, 1250);
					break;
				case 1:
				winLoseText.innerText = "You win!"
				setTimeout(function(){addWin()}, 1250);
					break;
			}
		}

		if (userChoice === 3) {
			switch(compChoice) {
				case 1:
				winLoseText.innerText = "You lose!"
				setTimeout(function(){addLoss()}, 1250);
					break;
				case 2:
				winLoseText.innerText = "You win!"
				setTimeout(function(){addWin()}, 1250);
					break;
			}
		}
	}
}

function addWin() {
	winCount++
	winsNumber.innerText = winCount
}

function addLoss() {
	loseCount++
	lossesNumber.innerText = loseCount
}

function addDraw() {
	drawCount++
	drawNumber.innerText = drawCount
}

playAgain.addEventListener('click', function() {
	userChoice = 0;
	compChoice = 0;
	fadeOut(rpsResults);
	fadeOut(playAgain);
	setTimeout(function(){fadeIn(rpsSelect)}, 750);
});

function fadeOut (element) {
  var elem = element;
  var opac = 1.0;
  var id = setInterval(frame, 5);
  function frame() {
    if (opac <= 0) {
      clearInterval(id);
      elem.style.display = "none";
    } else {
      opac -= 0.01; 
      elem.style.opacity = opac; 
    }
  }
}

function fadeIn (element) {
  var elem = element;
  var opac = 0.0;
  elem.style.display = "block";
  elem.style.opacity = 0.0;
  var id = setInterval(frame, 5);
  function frame() {
    if (opac >= 1) {
      clearInterval(id);
    } else {
      opac += 0.01; 
      elem.style.opacity = opac;
    }
  }
}