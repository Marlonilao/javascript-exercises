const fibonacci = function(number) {
    if (number <= -1) return "OOPS";
    let fibSeq = [0,1]
    for (let i=0;i<number;i++) {
        fibSeq.push(fibSeq[i]+fibSeq[i+1]);
    };
    return fibSeq[number];
};

// Do not edit below this line
module.exports = fibonacci;
