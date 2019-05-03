var growCrystals = function() {
  for (i = 0; i < 4; i++) {
    var crystalButton = $('<button></button>');
    scoreValue = Math.floor(Math.random() * 10) + 1;
    console.log(scoreValue);
    crystalButton.text("crystal");
    crystalButton.addClass('crystal-button');
    crystalButton.attr('score-value' , scoreValue);
    $('#crystals').append(crystalButton);
  }
}

growCrystals();