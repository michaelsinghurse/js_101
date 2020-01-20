// easy2-prob12.js

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function signedIntegerToString(number) {
  let result = '';
  let sign = Math.sign(number);
  
  if (sign === -1) {
    number *= -1;
  }
  
  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);
    
    result = DIGITS[remainder] + result;
  } while (number > 0);
  
  if (sign === -1) {
    result = '-' + result;
  } else if (sign === 1) {
    result = '+' + result;
  }
  
  return result;
}

// all should return true
console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");