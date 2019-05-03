var minerals = [saphirre, amythyst, emerald, topaz]

var growCrystals = function(list) {
  for (i = 0; i < list.length; i++) {
    var crystalButton = $('<button>');
    scoreValue = (Math.floor(Math.random) * 12) + 1;
    console.log(scoreValue);
    crystalButton.addClass('crystal-button');
    crystalButton.attr('score-value' , scoreValue);
    $('#crystals').append(crystalButton);
  }
}

growCrystals();