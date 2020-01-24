// easy5-prob10.js

function average(arr) {
  let average = arr.reduce((sum, val) => sum += val) / arr.length;
  return Math.floor(average);
}

console.log(average([1, 5, 87, 45, 8, 8]) === 25);       // 25
console.log(average([9, 47, 23, 95, 16, 52]) === 40);    // 40
