const pascal = function(n) {

    if (n === 1) {
        return [1];
    }

    
    let prev = pascal(n -1);
    let processed = prev.map((current, index, arr) => {
        const next = arr[index + 1];
        return next !== undefined ? current + next: current;
    });

    return [1, ...processed];

  
};
  
// Do not edit below this line
module.exports = pascal;
