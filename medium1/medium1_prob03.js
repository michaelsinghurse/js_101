// medium1_prob03.js

function rotateRightmostDigits(number, count) {
  let leftStr = String(number).slice(0, -1 * count);
  let rightStr = String(number).slice(-1 * count);
  
  rightStr = rightStr.slice(1) + rightStr[0];
  
  return Number(leftStr + rightStr);
}

// my solution requires changing `rotateRightmostDigit`'s return value to a 
// string and not a number.
function maxRotation2(numToRotate) {
  let numToRotateStr = String(numToRotate);
  let rotatedNumStr = '';
  
  while (numToRotateStr.length > 0) {
    numToRotateStr = 
      rotateRightmostDigits(numToRotateStr, numToRotateStr.length);
    rotatedNumStr += numToRotateStr[0];
    numToRotateStr = numToRotateStr.slice(1);
  }
  
  return Number(rotatedNumStr);
}

// LS solution
function maxRotation(number) {
  let numberDigits = String(number).length;
  for (let count = numberDigits; count >= 2; count--) {
    number = rotateRightmostDigits(number, count);
  }
  return number;
}

console.log(maxRotation(735291) === 321579);
console.log(maxRotation(3) === 3);
console.log(maxRotation(35) === 53);
console.log(maxRotation(105) === 15);
console.log(maxRotation(8703529146) === 7321609845);