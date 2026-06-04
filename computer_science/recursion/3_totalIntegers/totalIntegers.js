const totalIntegers = function(list) {
    let total = 0
    
    if (typeof list !== 'object' || list === null) 
        {
            return undefined;
        }


    for(item in list) {
        const value = list[item];

        if (Number.isInteger(value))
            total += 1;

        else if (typeof value === 'object' && value !== null) {
            total += totalIntegers(value);
        }            
    }

    return total
};
  
// Do not edit below this line
module.exports = totalIntegers;
