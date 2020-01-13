// easy-1-prob-1.js

/*
Problem
- Write a function
- Input
  - One integer - positive, negative, or 0
- Output 
  - true if absolute value is odd
  - false otherwise
- Can assume that the value is integer. No type checking.

Examples
console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

Data Structure
- Number
- JS has an absolute value function

Algorithm
- Find the absolute value of the number
- If the number mod 2 is equal to 1, return true.
- Otherwise return false
*/

const isOdd = num => {
  return Math.abs(num) % 2 === 1 ? true : false;
};

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true
