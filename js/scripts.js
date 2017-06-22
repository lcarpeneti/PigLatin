//business logic
var pigLatin = function(word) {
  //console.log(arrayOfWord);
  //return word;
  if (!word.match(/^[a-zA-Z]+$/)) {
    return "not a word";
  } else if (word[0].startsWith("a") || word[0].startsWith("e") || word[0].startsWith("i") || word[0].startsWith("o") || word[0].startsWith("u")) {
     return "hello";
  } else {
      return "nothing";
    }
}



// user interface logic
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var word = ($("input#word").val());
    var arrayOfWord = word.split(" ");
    //console.log(arrayOfWord);
    var answer = pigLatin(word);

    $(".word").text(word);
    $(".answer").text(answer);
    $("#result").show();
  });
});
