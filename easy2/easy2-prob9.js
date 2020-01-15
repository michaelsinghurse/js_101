// easy2-prob9.js

/*
Problem
- write a function stringToInteger(str)
- Input
  - string of numeric digits
- Output
  - returns an integer
Rules
- cannot use any JS method to do the conversion
- assume there is no + or - char at start
- assume all characters are numbers

Examples
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

Data Structure
- Array - split the string argument into an array

Algorithm
- split the string argument into an array using ('')
- reduce the array to the number by
... starting the total at 0
... adding to it the product of the elements value and 10 raised to the
... power of the array's length minus 1 minus the index.
*/

// this solution may not meet the requirements because I'm relying on implicit
// ... type conversion in my reduce statement.
const stringToInteger = str => {
  return str.split('').reduce((num, e, i, arr) => {
    return num += e * Math.pow(10, arr.length - 1 - i);
  }, 0);
};

console.log(stringToInteger('25'));           // logs 25
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true