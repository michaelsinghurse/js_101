// easy6-prob6.js

function sequence(upperLimit) {
  let numbers = [];
  
  for (let counter = 1; counter <= upperLimit; counter += 1) {
    numbers.push(counter);
  }
  
  return numbers;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]