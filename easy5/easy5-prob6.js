// easy5-prob6.js

const multiplicativeAverage = function(numArray) {
  if (!Array.isArray(numArray) 
        || numArray.some(element => !Number.isInteger(element))) {
    console.log('This function only takes an array of integers');
    return;
  }
    
  let product = numArray.reduce((acc, val) => acc *= val);
  let average = product / numArray.length;
  return average.toFixed(3);
};

// all return true
console.log(multiplicativeAverage([3, 5]) === "7.500");
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]) === "28361.667");
console.log(multiplicativeAverage(['1', '2']) === undefined);




