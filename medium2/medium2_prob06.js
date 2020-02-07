// medium2_prob06.js

function sum(count) {
  if (count === 1) return 1;
  
  return count + sum(count - 1);
}

function squareOfSum(count) {
  return sum(count) ** 2;
}

function sumOfSquares(count) {
  if (count === 1) return 1;
  
  return count ** 2 + sumOfSquares(count - 1);
}

function sumSquareDifference(count) {
  if (count < 1) return undefined;
  
  return squareOfSum(count) - sumOfSquares(count);
}

console.log(sumSquareDifference(2));    // 9 - 5 = 4
console.log(sumSquareDifference(3));    // 36 - 14 = 22
console.log(sumSquareDifference(10));   // 2640
console.log(sumSquareDifference(1));    // 0
console.log(sumSquareDifference(100));  // 25164150