// easy3-prob9.js

/*
Problem
- write a function cleanUp(str)
- Input
  - string
  - validate? yes make sure it's a string
- Output
  - string
- Rules
  - all non-alphabetic characters should be replaced with spaces
  - there should never be more than one consecutive space

Examples
cleanUp("---what's my +*& line?");    // " what s my line "
cleanUp('My number is 262-203-2958.') // 'My number is '

Data Structure
- Array for split string

Algorithm
- validate that the typeof argument is string
- split the string at each character into an array
- map the array. return the value if it's charCode is between 'A' and 'Z' or 
  'a' and 'z'. If it's not, return an empty space
- could also use RegEx to test whether it's in the range
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
- filter the array. return the value unless it is a space and the previous char
  is also a space.
- join the array with no separator ('') back into a string
- return the string
*/

function cleanUp(str) {
  
}

console.log(cleanUp("---what's my +*& line?") === " what s my line ");
console.log(cleanUp('My number is 262-203-2958.') === 'My number is ');