// easy4-prob7.js

const runningTotal = arr => {
  if (!Array.isArray(arr) || arr.some(e => Number.isNaN(Number(e)))) {
    console.log('Please only pass in an array of numbers');
    return;
  }
  
  let sum = 0;
  
  return arr.map(element => sum += element);
};

console.log(runningTotal([2, 5, 13]));          // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20])); // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                 // [3]
console.log(runningTotal([]));                  // []
console.log(runningTotal([1, 2, 'a']))    ; //log to console and undefined


