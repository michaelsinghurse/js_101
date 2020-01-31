// medium1_prob02.js

function rotateRightmostDigits(number, count) {
  let leftStr = String(number).slice(0, -1 * count);
  let rightStr = String(number).slice(-1 * count);
  
  rightStr = rightStr.slice(1) + rightStr[0];
  
  return Number(leftStr + rightStr);
}

// all should return true
console.log(rotateRightmostDigits(735291, 1) === 735291);
console.log(rotateRightmostDigits(735291, 2) === 735219);
console.log(rotateRightmostDigits(735291, 3) === 735912);
console.log(rotateRightmostDigits(735291, 4) === 732915);
console.log(rotateRightmostDigits(735291, 5) === 752913);
console.log(rotateRightmostDigits(735291, 6) === 352917);



