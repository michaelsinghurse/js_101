// easy6-prob5.js

function negative(num) {
  if (typeof num !== 'number') {
    console.log('please only pass numbers to this function');
    return;
  }
  
  return num < 0 ? num : -1 * num;
}

// all should log true
console.log(negative(5) === -5);
console.log(negative(-3) === -3);
console.log(negative(0) === -0);
console.log(negative(-0) === -0);
console.log(negative('5') === undefined);