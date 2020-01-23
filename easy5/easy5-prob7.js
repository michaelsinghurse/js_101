// easy5-prob7.js

const multiplyList = (arr1, arr2) => arr1.map((val, idx) => val * arr2[idx]);

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]
console.log(multiplyList([0], [0]));                  // [0]