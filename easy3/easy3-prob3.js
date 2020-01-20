// easy3-prob3.js

/*
Problem
- write a function string(number)
- Input
  - number, positive integer
  - validate? Yes
- Output
  - string. 
- Rules
  - Return string starts with 1.
  - Then alternates 0 and 1.
  - Length of return is numbed passed into the function.
  
Examples
stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"

Data Structure
- String for return value

Algorithm
- validate that parameter isInteger and is greater than 0
  - if not, log statement and return
- let result = '' 
- let numberOfTens = Math.floor(argument / 2)
- repeat '10' numberofTens times
- if argument % 2 is 1 (odd number), then append a '1' to the end of result.
- return result
*/

const stringy = function(length) {
  if (!Number.isInteger(length) || length < 0) {
    console.log('Please only pass in positive integers');
    return;
  }
  
  let numberOfTens = Math.floor(length / 2);
  let result = '10'.repeat(numberOfTens);
  
  if (length % 2 === 1) {
    result += '1';
  }
  
  return result;
};


console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"
console.log(stringy(1));     // "1"
console.log(stringy(0));    // ""

