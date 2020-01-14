// easy-1-prob-9.js

/*
Problem
- Modify function from previous exercise
- Input
  - same
- Output 
  - same
- Rules
  - In 1752 and following, the logic from the previous example holds.
  - Prior to 1752, a leap year was any year divisble by 4.
  
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
isLeapYear(1700);      // true
isLeapYear(1);         // false
isLeapYear(100);       // true
isLeapYear(400);       // true

Data Structure
- Number for the year
- Code/logic for the rules

Algorithm
- Validate the input as before
- Check whether the input is less than 1752.
  - If yes, call isJulianLeapYear
  - If no, call isGregorianLeapYear
- Take logic from previos problem and move to isGregorianLeapYear
- isJulianLeapYear returns true if the number is divisble by 4.
*/

const isLeapYear = year => {
  let y = Number(year);
  
  if (y % 1 !== 0 || y < 1) {
    console.log('Please enter an integer greater than 0.');
    return;
  }

  return y < 1752 ? isJulianLeapYear(y) : isGregorianLeapYear(y);
};

function isJulianLeapYear(y) {
  return y % 4 === 0;
}

function isGregorianLeapYear(y) {
    if (y % 4 !== 0) {
    return false;
  } else {
    if (y % 100 === 0 && y % 400 !== 0) {
      return false;
    } else {
      return true;
    }
  }
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // true
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // true
console.log(isLeapYear(400));       // true
