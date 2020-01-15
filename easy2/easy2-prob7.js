// easy2-prob7.js

/*
Problem
- write a function xor(arg1, arg2)
- Input
  - two arguments. no restrictions.
- Output
  - returns true if exactly one argument is truthy; false otherwise
      
Examples
console.log(xor(5, 0) === true);        // true
console.log(xor(false, true) === true); // true
console.log(xor(1, 1) === false);       // true
console.log(xor(true, true) === false); // true

Data Structure
- none

Algorithm
  - return true if...
    - arg1 == true && arg2 != true
    - arg1 != true && arg2 == true

*/

const xor = (a, b) => (a && !b) || (!a && b);

console.log(xor(5, 0) === true);        // true
console.log(xor(false, true) === true); // true
console.log(xor(1, 1) === false);       // true
console.log(xor(true, true) === false); // true
console.log(xor('true', 'false') === false); // true
