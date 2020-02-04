// medium2_prob02.js

const NUM_EQUAL_SIDES_NAME = ['scalene', 'isosceles', undefined, 'equilateral'];

function triangle(side1, side2, side3) {
  if (Number.isNaN(Number(side1)) || 
      Number.isNaN(Number(side2)) || 
      Number.isNaN(Number(side3))) {
        return undefined;
  }
  
  let sides = [side1, side2, side3];
  
  sides.sort((a, b) => a - b);
  
  if (sides[0] <= 0 || sides[0] + sides[1] <= sides[2]) {
    return 'invalid';
  }
  
  let numEqualSides = 0;
  
  if (sides[0] === sides[1]) {
    numEqualSides += 1;
  }
  
  if (sides[0] === sides[2]) {
    numEqualSides += 1;
  }
  
  if (sides[1] === sides[2]) {
    numEqualSides += 1;
  }
  
  return NUM_EQUAL_SIDES_NAME[numEqualSides];
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
