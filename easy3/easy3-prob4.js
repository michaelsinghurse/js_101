// easy3-prob4.js

function findFibonacciIndexByLength(length) {
  let minimum = Math.pow(10, length - 1);
  let fibo;
  let penultimate = 1;
  let ultimate = 1;
  let index = 3;
  
  while (true) {
    fibo = ultimate + penultimate;
    
    if (fibo >= minimum) break;
    
    penultimate = ultimate;
    ultimate = fibo;
    index += 1;
  }
  
  return index;
}

// should all log true
console.log(findFibonacciIndexByLength(2) === 7);
console.log(findFibonacciIndexByLength(10) === 45);
console.log(findFibonacciIndexByLength(16) === 74);

