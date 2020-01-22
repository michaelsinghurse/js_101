// medium1-q3.js

function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}

function factors2(number) {
  let divisor = 1;
  let factors = [];
  
  while (divisor <= number) {
    if (number % divisor === 0) {
      factors.push(divisor);
    }
    
    divisor += 1;
  }
  
  return factors;
}

console.log(factors(10));     // [1, 2, 5, 10]
console.log(factors2(10));    // [1, 2, 5, 10]
console.log(factors(18));     // [1, 2, 3, 6, 9, 18]
console.log(factors2(18));    // [1, 2, 3, 6, 9, 18]
//factors(0)                  // infinite loop
console.log(factors2(0));     // []
//factors(-10)                // infinite loop
console.log(factors2(-10));   // []

