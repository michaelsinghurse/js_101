// easy4-prob6.js

const isPalindromicNumber = function(num) {
  if (!Number.isInteger(num) || num < 0) {
    console.log('Function only takes non-negative integers');
    return;
  }
  
  let numString = String(num);
  
  return numString === numString.split('').reverse().join('');
};

// all should return true
console.log(isPalindromicNumber(34543) === true);
console.log(isPalindromicNumber(123210) === false);
console.log(isPalindromicNumber(22) === true);
console.log(isPalindromicNumber(5) === true);
console.log(isPalindromicNumber(-1314) === undefined); // also logs to console

