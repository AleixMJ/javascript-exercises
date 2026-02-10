const palindromes = function (text) {
    const textFiltered = text.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
    let i = 0;
    while (i < textFiltered.length -1) {
        if (textFiltered[i] != textFiltered.at(-(i+1))) {
            return false
        }
        else {
            i++;
        }
    }
    return true;
};


// Do not edit below this line
module.exports = palindromes;
