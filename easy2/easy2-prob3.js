// easy2-prob3.js

/*
Problem
- create a function multiply(arg1, arg2)
- Input
  - two arguments. does not specify type.
  - assume numbers or validate? Validate
- Output
  - return the product of two arguments
  
Examples
console.log(multiply(5, 3) === 15); // logs true
console.log(multiply(0, 10) === 0); // logs true
console.log(multiply(-5, 1) === -5); // logs true
consoel.log(multiply(-5, -1) === -5); // logs false

Data Structure
- Number for both arguments

Algorithm
- if either argument is not a number, log 'only numbers please' and return und.
- return the product of the numbers
*/

const multiply = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    console.log('Please use numbers only.');
    return;
  }
  
  return a * b;
};

console.log(multiply(5, 3) === 15); // logs true
console.log(multiply(0, 10) === 0); // logs true
console.log(multiply(-5, 1) === -5); // logs true
console.log(multiply(-5, -1) === -5); // logs false