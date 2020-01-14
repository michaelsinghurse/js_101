// easy-1-prob-10.js

/*
Problem
- Write a function multisum(num)
- Input
  - an integer
  - assume integer and greater than 1
- Output
  - return number/integer
- Rule
  - Calculate the sum of all numbers less than and including the integer that
  are multiples of 3 or 5
Examples
multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168

Data Structure
- Number for input and for answer

Algorithm
- no need to validate input
- set result variable equal to 0
- set counter variable equal to 1
- while the counter variable is less than or equal to the input number
  - if the counter is divisible by 3 or 5, add the counter to the result
  - increase the counter by 1
- return the result variable
*/

const multisum = num => {
  let result = 0;
  let i = 1;
  
  while (i <= num) {
    if (i % 3 === 0 || i % 5 === 0) {
      result += i;
    }
    i += 1;
  }
  return result;
};

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168