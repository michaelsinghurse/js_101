// easy-1-prob-8.js

/*
Problem
- Write a function isLeapYear(year)
- Input
  - year string
  - validate? year must be greater than 0 & year must be an integer
- Ouput
  - return boolean
  - true if the year is leap year; false otherwise
- Rules
  - Leap years:
    - 4 is factor of the year
    - Exception: False if 100 is a factor and 400 is not a factor of the year

Examples
isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true

Data Structure
- Number for the year
- Code/logic for the rules

Algorithm
- Convert the numeric string to number with Number()
- Validate the input
  - Must be an integer (num % 1 === 0).
  - Must be greater than 0.
  - If not, print messgae to console and return undefined.
- If statements:
  - If not divisible by 4 --> return false;
  - Else,
    - if divisble by 100 and not divisible by 400 --> return false
    - else return true;
*/

const isLeapYear = year => {
  let y = Number(year);
  
  if (y % 1 !== 0 || y < 1) {
    console.log('Please enter an integer greater than 0.');
    return;
  }

  if (y % 4 !== 0) {
    return false;
  } else {
    if (y % 100 === 0 && y % 400 !== 0) {
      return false;
    } else {
      return true;
    }
  }
};

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true
