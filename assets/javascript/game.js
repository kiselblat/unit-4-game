// Crystal game
// Requires jquery to run!

// Variable declarations
var targetNumber = 0;
var totalScore = 0;
var wins = 0;
var losses = 0;
var gameOver = false;

//Function declarations
var pickTargetNumber = function() {
  return Math.floor(Math.random() * 120) + 19;
}

var growCrystals = function() {
  for (i = 0; i < 4; i++) {
    var crystalButton = $("<button>");
    scoreValue = Math.floor(Math.random() * 12) + 1;
    console.log(scoreValue);
    crystalButton.attr('class' , 'crystal-button');
    crystalButton.attr('score-value' , scoreValue);
    crystalButton.text('button');
    console.log(crystalButton);
    $('#crystals').append(crystalButton);
  }
}

var newGame = function() {
  console.log($('crystals').childElementCount);
  $('#results').html("");
  $('#crystals').html("");
  totalScore = 0;
  gameOver = false;
  targetNumber = pickTargetNumber();
  console.log($('crystals').childElementCount);
  growCrystals();
  console.log($('crystals').childElementCount);
  updateGameboard();
  console.log(gameOver);
}

var updateGameboard = function() {
  $('#target-number').text(targetNumber);
  $('#total-number').text(totalScore);
  $('#wins').text(wins);
  $('#losses').text(losses);
  console.log(targetNumber, totalScore);
}

var playerWins = function () {
  wins++;
  console.log("win ", wins);
  updateGameboard();
  $('#results').text('Player wins! Click any crystal to start a new game!')
  gameOver = true;
}

var playerLoses = function () {
  losses++;
  console.log("loss ", losses);
  updateGameboard();
  $('#results').text('Player loses! Click any crystal to start a new game!')
  gameOver = true;
}

// Game
$('document').ready(function() {
newGame();

$('#crystals').on('click', '.crystal-button', function() {
    totalScore += parseInt($(this).attr('score-value'));
    console.log("pushed ", $(this).attr('score-value'));
    if (gameOver) {
      newGame();
    } else if (totalScore === targetNumber) {
      // You win
      playerWins();
    } else if (totalScore > targetNumber) {
      // You lose
      playerLoses();
    } else {
      updateGameboard();
    }
  })
});