var wordorder = function(text) {
    var word_obj = {};
    var words = text.replace(/[\.,-\/#!$%\^&\*;:?{}=\-_`~()]/g,"  ").toUpperCase().split(" ");

    for (var i in words) {
        if (!word_obj.hasOwnProperty(words[i])) {
            word_obj[words[i]] = 1;
        } else {
            word_obj[words[i]]++;
        }
    }
    var sorted_words = [];
    for (var word in word_obj) {
        sorted_words.push([word, word_obj[word]]);
        sorted_words.sort(function(word1, word2) {
            return word2[1] - word1[1];
        });
    }

    var total = [];
    for (var i in sorted_words) {
        total.push(sorted_words[i][0]);
    }
    return total;
};

$(document).ready(function() {
    $('form#text').submit(function(event) {
        var text = $('input#text').val();
        var final = wordorder(text);
        console.log(final);

        $(".final").text(final[0]);
        for (var i=1; i<final.length; i++) {
            $(".final").append(", " + final[i]);
        }

        $("#result").show();
        event.preventDefault();

    });
});
