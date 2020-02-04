// medium1_prob08.js

let fiboValues = [undefined, 1, 1];

function fibonacci(nth) {
  if (fiboValues[nth]) {
    return fiboValues[nth];
  }
  else {
    fiboValues[nth] = fibonacci(nth - 1) + fibonacci(nth - 2);
    return fiboValues[nth];
  }
}

// all should return true;
console.log(fibonacci(1) === 1);
console.log(fibonacci(2) === 1);
console.log(fibonacci(3) === 2);
console.log(fibonacci(4) === 3);
console.log(fibonacci(5) === 5);
console.log(fibonacci(12) === 144);
console.log(fibonacci(20) === 6765);
console.log(fiboValues);