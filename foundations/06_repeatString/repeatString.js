const repeatString = function(text, num) {

let solution =""

if (num == 0) {
    return "";
}

else if (num > 0) {
    for (let i = 0; i < num; i++) {
        solution = solution + text;
    }
    return solution;
}
else {
    return "ERROR";
}

};

console.log(repeatString("hola",3))
// Do not edit below this line
module.exports = repeatString;
