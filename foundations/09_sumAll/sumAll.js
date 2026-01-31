const sumAll = function(a , b) {
    
    if (a < 0 || b < 0 || Number.isInteger(a) === false || Number.isInteger(b) === false ) {
        return "ERROR";
    }
    
    let start = 0;
    let end = 0;

    if (a < b) {
        start = a;
        end = b;
    }
    else {
        start = b;
        end = a;
    }
    console.log(start);
    console.log(end);
    let total = 0;
    while (start < end) {
        total += start;
        start++;
    }
    return total + end;

};

// Do not edit below this line
module.exports = sumAll;
