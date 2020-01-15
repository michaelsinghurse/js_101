// easy2-prob4.js

/*
Problem
- write a function square(arg)
- use the multiply function from previous exercise
- Input
  - one argument
  - assume number or validate? Assume number.
- Output
  - return number, the square of the input
Examples
console.log(square(5) === 25); // logs true
console.log(square(-8) == 64); // logs true
console.log(square(0) === 0); // logs true
console.log(square('5') === 25); // logs Use numbers only, false

Data Structure
- Number

Algorithm
- return the result of calling the multiply function with the input of square
... used for both parameters
*/

// multiply function from previous exercise
const multiply = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    console.log('Please use numbers only.');
    return;
  }
  
  return a * b;
};

// new code
const square = a => multiply(a, a);

console.log(square(5) === 25); // logs true
console.log(square(-8) == 64); // logs true
console.log(square(0) === 0); // logs true
console.log(square('5') === 25); // logs Use numbers only, false

// Further Exploration.... Not complete. Recursion not working.
const powerToTheN = (a, n) => {
  if (n < 0) {
    console.log('Sorry, I can\'t handle negative exponents yet.');
    return;
  }
  
  switch (n) {
    case 0: return 1;
    case 1: return a;
    default:
      let r;
      while (n >= 2) {
        r *= multiply(a, a);
        n -= 1;
      }
      return r;
  }
  
};

console.log(powerToTheN(2, 0) === 1); // logs true
console.log(powerToTheN(2, 1) === 2); // log true
console.log(powerToTheN(2, 3) === 8); // logs true
console.log(powerToTheN(2, 5) === 32); // logs true
console.log(powerToTheN(0, 0) === 1); // logs true
console.log(powerToTheN(0, 100) === 0); // logs true
console.log(powerToTheN(-2, 3) === -8); // logs true





