const permutations = function(arr) {
  
if (arr.length === 0) return [[]];

let result = [];

for (let i = 0; i < arr.length; i++) {
    const currentNum = arr[i];
    const subArr = arr.filter((item,index) => index !==i);
    const newArr = permutations(subArr)
    const combined = newArr.map(sub => [currentNum, ...sub])
    result.push(...combined);
}

return result;
};
  
// Do not edit below this line
module.exports = permutations;
