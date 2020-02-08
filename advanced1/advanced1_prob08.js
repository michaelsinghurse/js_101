// advanced1_prob08.js

let Fraction = require('fraction.js');

function unegyptian(array) {
  return array.reduce((acc, val) => {
    return acc + new Fraction(1, val);
    }, new Fraction(0));
}

function egyptian(rationalNum) {
  if (rationalNum <= 0) return undefined;
  
  let egyptians = [];
  let denominator = 1;
  
  while (rationalNum > 0) {
    let testFraction = new Fraction(1, denominator);
    if (testFraction <= rationalNum) {
      egyptians.push(denominator);
      rationalNum = rationalNum.sub(testFraction);
    }
    denominator += 1;
  }
  
  return egyptians;
}

console.log(egyptian(Fraction(2, 1))); // -> [1, 2, 3, 6]
console.log(egyptian(Fraction(137, 60))); // -> [1, 2, 3, 4, 5]
console.log(egyptian(Fraction(3, 1))); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]

// all should return true
console.log(unegyptian(egyptian(new Fraction(1, 2))) === 0.5);
console.log(unegyptian(egyptian(new Fraction(3, 4))) === 0.75);
console.log(unegyptian(egyptian(new Fraction(39, 20))) === 1.95);
console.log(unegyptian(egyptian(new Fraction(127, 130))) === 0.9769230769230768);
console.log(unegyptian(egyptian(new Fraction(5, 7))) === 0.7142857142857142);
console.log(unegyptian(egyptian(new Fraction(1, 1))) === 1);
console.log(unegyptian(egyptian(new Fraction(2, 1))) === 2);
console.log(unegyptian(egyptian(new Fraction(3, 1))) === 3);

