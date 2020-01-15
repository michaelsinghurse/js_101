// easy2-prob8.js

/*
Problem
- write a function oddities(arg)
- Input
  - Array
- Output
  - returns Array
- Rules
  - return element at index 0, 2, 4, 6, etc.
  - if arg is [], return []
Examples
console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

Data Structure
- Array

Algorithm
- check that the argument isArray. If false, log message and return.
- filter the array for elements with an even index.
- return that filtered array.
*/

const oddities = arr => {
  if (Array.isArray(arr) === false) {
    console.log('Please pass in an array.');
    return;
  }
  
  return arr.filter((e, i) => i % 2 === 0);
};

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []
console.log(oddities('array')); // logs 'Please pass array', undefined