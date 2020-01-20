// easy3-prob5.js

const triangle = function(sideLength) {
  if (!Number.isInteger(sideLength) || sideLength < 1) {
    console.log('Please pass in a positive integer value');
    return;
  }
  
  for (let counter = 1; counter <= sideLength; counter += 1) {
    console.log(' '.repeat(sideLength - counter) + '*'.repeat(counter));
  }
};

triangle(5);
triangle(9);
triangle('five');
triangle(0);