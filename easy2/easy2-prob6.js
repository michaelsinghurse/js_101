// easy2-prob6.js

/*
Problem
- function penultimate(str)
- Input
  - string. contains at least one empty space
  - no need to validate
- Output
  - returns string, which is the penultimate word.
  
Examples
console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
console.log(penultimate('a b c') === 'b'); // logs true

Data Structure
- Array

Algorithm
- Split the string input using empty space ' '
- return the second to last element. arr.length - 2
*/

const penultimate = str => {
  let arr = str.trim().split(' ');
  return arr[arr.length - 2];
};

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
console.log(penultimate('a b c') === 'b'); // logs true
console.log(penultimate(' a b') === 'a'); // logs true
console.log(penultimate('a b ') === 'a'); // logs true