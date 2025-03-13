const palindromes = function (string) {
    // this was my original solution;
//     if (string.at(-1) == "!") {
//         if (string.at(0) == string.at(0).toUpperCase()) {
//             let backward = string.split("");
//             backward.pop();
//             backward[0] = backward[0].toLowerCase();
//             backward[backward.length-1] = backward[backward.length-1].toUpperCase();
//             backward.reverse();
//             if (backward.join("") == string.slice(0,-1)) return true;
//             else return false;
//         };
//     backward = string.split("");
//     backward.pop();
//     backward.reverse();
//     if (backward.join("") == string.slice(0,-1)) return true;
//     else return false;
//     } else if (string.at(-1) == "." && string.at(0) == string.at(0).toUpperCase()) {
//         backward = string.split("");
//         backward.pop();
//         backward[0] = backward[0].toLowerCase();
//         backward[backward.length-1] = backward[backward.length-1].toUpperCase();
//         backward.reverse();
//         if (backward.join("") == string.slice(0,-1)) return true;
//         else return false
//     } else {
//          backward = string.split("").reverse().join("");
//          if (backward == string) return true;
//          else return false;
//     };
// };

    // 2nd attempt but I already saw the solution and just wanna try if I can code the same thing;
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const cleanString = string.toLowerCase()
                        .split('')
                        .filter((char) => alphanumerical.includes(char))
                        .join('');
    const backwardString = cleanString.split('').reverse().join('');
    
    return cleanString === backwardString ? true : false ;
}    
// Do not edit below this line
module.exports = palindromes;
