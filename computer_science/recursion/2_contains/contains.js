const contains = function(obj, text) {

    if (Object.values(obj).includes(text)) {
        return true;
    }

  
    for (let key in obj) {
        const value = obj[key]

        if (typeof value === 'object' && value !== null) {
            if (contains(value, text) === true)
            return true;
        }
    }

    return false;

};
  
// Do not edit below this line
module.exports = contains;
