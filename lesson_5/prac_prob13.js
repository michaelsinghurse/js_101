// prac_prob13.js

// Given the following data structure, sort the array so that the sub-arrays 
// are ordered based on the sum of the odd numbers that they contain.

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
console.log(arr);

function sumOddElements(arr) {
  let sum = 0;
  arr.forEach(element => {
    if (element % 2 === 1) {
      sum += element;
    }
  });
  return sum;
}

function sumOddElements2(arr) {
  return arr.reduce((acc, val) => {
    if (val % 2 === 1) {
      return acc + val;
    }
  }, 0);
}

arr.sort((a, b) => {
  if (sumOddElements(a) > sumOddElements(b)) {
    return 1;
  }
});

console.log(arr);