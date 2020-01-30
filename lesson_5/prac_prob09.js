// prac_prob09.js

// Given the following data structure, return a new array with the same 
// structure, but with the subarrays ordered 
// -- (alphabetically or numerically as appropriate -- in ascending order.
let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let arrCopy = JSON.parse(JSON.stringify(arr));

let arr2 = arrCopy.map(subArray => {
  return subArray.sort();
});

console.log(arr);
console.log(arr2);