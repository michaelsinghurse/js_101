// list_processing_prob07.js

function sumOfSums(numArray) {
  return numArray.reduce((acc, val, index) => {
    return acc += val * (numArray.length - index);
  }, 0);
}

function sumOfSums2(numArray) {
  let sum = 0;
  
  numArray.forEach((element, index) => {
    sum += element * (numArray.length - index);
  });
  
  return sum;
}

// all should return true
console.log(sumOfSums([3, 5, 2]) === 21);
console.log(sumOfSums([1, 5, 7, 3]) === 36);
console.log(sumOfSums([4]) === 4);
console.log(sumOfSums([1, 2, 3, 4, 5]) === 35);