// easy-1-prob-7.js

/*
Problem
- write a function called shortLongShort(arg1, arg2)
- Input
  - two strings.
  - assume the strings are different lengths
  - validate that strings are input? Yes!
Output
  - return a string
Rules
  - return string is shorter + longer + shorter

Examples
shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"
shortLongShort('', '');            // ""

Data Structure
- String for both input and output

Algorithm
- validate that both inputs are strings. If not, log please input strings only.
- assign each input string to a variable, long or short, based on length
- return short + long + short
*/

const shortLongShort = (s1, s2) => {
  
  if (typeof s1 !== 'string' || typeof s2 !== 'string') {
    console.log('Please enter string values only!');
    return;
  }
  
  return s1.length > s2.length ? s2 + s1 + s2 : s1 + s2 + s1;
};

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"
console.log(shortLongShort('   ', '__'));       // "__   __"
console.log(shortLongShort(5, 'five'));         // Please enter strings only
