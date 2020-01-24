// easy6-prob3.js

const rvNum = function reverseNumber(num) {
  if (!Number.isInteger(num) || num < 0) {
    console.log('please only pass positive integers to this function');
    return;
  }
  
  let numStringReversed = String(num).split('').reverse().join('');
  
  return parseInt(numStringReversed, 10);
};

console.log(rvNum(12345) === 54321);
console.log(rvNum(12213) === 31221);
console.log(rvNum(456) === 654);
console.log(rvNum(12000) === 21);
console.log(rvNum(1) === 1);
console.log(rvNum(1010) === 101);