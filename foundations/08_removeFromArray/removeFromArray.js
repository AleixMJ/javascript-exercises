const removeFromArray = function(array, ...position) {

return array.filter((item) => !position.includes(item));

};


console.log(removeFromArray([1,2,3,4], 3, 2));
// Do not edit below this line
module.exports = removeFromArray;
