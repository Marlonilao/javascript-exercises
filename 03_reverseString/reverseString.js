const reverseString = function(word) {
    var splitWord = word.split("");
    var reversedWord = splitWord.reverse();
    var c = reversedWord.join("");
    return c
   }

// Do not edit below this line
module.exports = reverseString;
