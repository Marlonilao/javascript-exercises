const repeatString = function(string,num) {
    let strings = ""; 
    let error = "ERROR"
    if (num >= 0) {
        for (let i=0 ; i<num ; i++) {
        strings += string;
        } return strings
    } else if (num < 0) {
        return error
    }
};

// Do not edit below this line
module.exports = repeatString;
