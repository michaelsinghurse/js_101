// easy2-prob11.js

const integerToString = number => {
  if (!Number.isInteger(number) || number < 0) {
    console.log('Please only pass positive integers to the function.');
    return;
  }
  
  let counter = 1;
  let remainder = 0;
  let digit = 0;
  let returnString = '';
  let numToString = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  while (true) {
    remainder = number % Math.pow(10, counter);
    
    digit = remainder / Math.pow(10, counter - 1);
    
    returnString = numToString[digit] + returnString;
    
    if (remainder === number) break;
    
    number -= remainder;
    counter += 1;
  }
  
  return returnString;
};

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"
console.log(integerToString(1234567890));      // "1234567890"









