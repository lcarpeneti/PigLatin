//business logic
var pigLatin = function(word) {
  //return word;
  if (!word.match(/^[a-zA-Z]+$/)) {
    return "not a word";
  } else {
    return word;
  }
};



// user interface logic
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var word = ($("input#word").val());
    var answer = pigLatin(word);

    $(".word").text(word);
    $(".answer").text(answer);
    $("#result").show();
  });
});
