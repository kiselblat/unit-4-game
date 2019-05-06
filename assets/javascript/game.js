// Crystal game
// Requires jquery to run!

// Variable declarations

// These control the theme of the game
var buttonList = ["assets/images/Amethyst.jpg" , "assets/images/Emerald.jpg" , "assets/images/Ruby.jpg" , "assets/images/Quartz.jpg"]
var winMessage = "You've charged the Magic Crystal. Click any minor crystal to charge another!";
var loseMessage = "You've burned out the Magic Crystal! Click any minor crystal to try again.";
var inPlayMessage = "Charging the crystal. Careful!"
// These control how the game works
var targetNumber = 0;
var totalScore = 0;
var wins = 0;
var losses = 0;
var gameOver = false;
var values = []

//Function declarations

//Picks target number, duh
var pickTargetNumber = function() {
  return Math.floor(Math.random() * 120) + 19;
}
//Resets and starts a new game
var newGame = function() {
  $('#results').text(inPlayMessage);
  $('#crystals').empty();
  totalScore = 0;
  values = [];
  gameOver = false;
  targetNumber = pickTargetNumber();
  growCrystals();
  updateGameboard();
  console.log("new game");
}
//Picks values for buttons that don't repeat
var pickValue = function() {
  for (var i = 0 ; i <= values.length ; i++) {
    var value = Math.floor(Math.random() * 12) + 1;
    if (!values.includes(value)) {
      values.push(value);
      return value;
    } else {
      pickValue();
    }
  }
}
//Creates the buttons
var growCrystals = function() {
  for (i = 0; i < 4; i++) {
    var scoreValue = pickValue();
    var crystalButton = $("<div>");
    var crystalImage = $('<img>').attr('src' , buttonList[i]);
    crystalButton.attr('score-value' , scoreValue);
    crystalButton.addClass('crystal-button mx-auto d-block');
    crystalButton.append(crystalImage);
    console.log(i + 1 , scoreValue);
    $('#crystals').append(crystalButton);
  }
}
//Updates the relevent page elements after each click
var updateGameboard = function() {
  $('#target-number').text(targetNumber);
  $('#total-number').text(totalScore);
  $('#wins').text(wins);
  $('#losses').text(losses);
  console.log(targetNumber, totalScore);
}
//The win routine
var playerWins = function () {
  wins++;
  console.log("win " , wins);
  updateGameboard();
  $('#results').text(winMessage);
}
//The lose routine
var playerLoses = function () {
  losses++;
  console.log("loss " , losses);
  updateGameboard();
  $('#results').text(loseMessage);
}

// Game
$('document').ready(function() {
  newGame();
  //Click handler for div containing the buttons, applied only to buttons
  $('#crystals').on('click' , '.crystal-button' , function() {
    totalScore += parseInt($(this).attr('score-value'));
    console.log("pushed " , $(this).attr('score-value'));
    if (gameOver) {
      newGame();
    } else if (totalScore === targetNumber) {
      gameOver = true;
      playerWins();
    } else if (totalScore > targetNumber) {
      playerLoses();
      gameOver = true;
    } else {
        updateGameboard();
    }
  })
});