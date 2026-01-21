const reverseString = function(text) {
    let solution = "";
    for (let i = text.length -1; i >= 0 ; i--) {
        solution = solution + text[i];
    }
    return solution

};

console.log(reverseString("hola"));

// Do not edit below this line
module.exports = reverseString;
