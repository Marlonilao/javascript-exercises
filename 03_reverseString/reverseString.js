const reverseString = function(word) {
    array = word.split("")
    result = []
    for (i=0; i<array.length;i++) {
        result.unshift(array[i])
    }
    return result.join("")
};

// Do not edit below this line
module.exports = reverseString;
