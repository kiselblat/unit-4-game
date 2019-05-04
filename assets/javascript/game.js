var growCrystals = function() {
  for (i = 0; i < 4; i++) {
    var crystalButton = $("<button>");
    scoreValue = Math.floor(Math.random() * 12) + 1;
    console.log(scoreValue);
    crystalButton.attr('class' , 'crystal-button');
    crystalButton.attr('score-value' , scoreValue);
    crystalButton.text('crystal button' , scoreValue);
    console.log(crystalButton);
    $('#crystals').append(crystalButton);
  }
}

var pickTargetNumber = function() {
  return (Math.floor(Math.random()) * 120) + 19;
}


$('document').ready(function() {
  var targetNumber = pickTargetNumber();
  $('#target-number').text(targetNumber);
  console.log(targetNumber)
  growCrystals();
});
