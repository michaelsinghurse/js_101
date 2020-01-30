// prac_prob12.js

// Given the following data structure, use a combination of methods, including 
// filter, to return a new array identical in structure to the original, but 
// containing only the numbers that are multiples of 3.

let arr1 = [[2], [3, 5, 7], [9], [11, 15, 18]];

let arr2 = arr1.map(subArray => {
  return subArray.filter(element => element % 3 === 0);
});

console.log(arr1);
console.log(arr2);