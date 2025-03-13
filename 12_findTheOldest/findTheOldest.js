const findTheOldest = function(arr) {
    const oldestToYoungest = arr.sort((a,b) => {
        const currentYear = new Date().getFullYear();
        return ((b.yearOfDeath || currentYear) - b.yearOfBirth) - ((a.yearOfDeath || currentYear) - a.yearOfBirth);
    });
    return oldestToYoungest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
