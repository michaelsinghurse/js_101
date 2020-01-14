// easy-1-prob-11.js

/*
Problem
- write a function asciiValue(str)
- Input
  - string
  - validate? -> if empty string return 0. not a string send a message
- Output
  - return number
- Rule
  - return the sum of the ASCII value of each char in the string
  - use String.prototype.charCodeAt(index) to find the ASCII value
  - if argument is an empty string, return 0
Examples
asciiValue('Four score');         // 984
asciiValue('Launch School');      // 1251
asciiValue('a');                  // 97
asciiValue('');                   // 0

Data Structure
- Array
  - split input string into an array of characters

Algorithm
- validate input. if not a string, log message and return undefined.
- if length of the string is 0, return 0.
- split the input string into an array of characters
- reduce the array with an accumulator set to 0 and current value equal to 
... the charCodeAt() value
- return the result of the reduce method

*/

const asciiValue = str => {
  if (typeof str !== 'string') {
    console.log('This function takes strings only!');
    return;
  }
  let a = str.split('');
  let sum = 0;
  a.forEach(e => sum += e.charCodeAt(0));
  return sum;
};

console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0
console.log(asciiValue(5));                    // Strings only!, undefined

const asciiValue2 = str => {
  return str.split('').reduce((sum, e) => sum += e.charCodeAt(0), 0);
};

console.log(asciiValue2('Four score'));         // 984
console.log(asciiValue2('Launch School'));      // 1251
console.log(asciiValue2('a'));                  // 97
console.log(asciiValue2(''));                   // 0