// medium1_prob07.js

function fibonacci(nth) {
  if (nth <= 2) return 1;
  
  let nMinus1 = 1;
  let nMinus2 = 1;
  let fibo;
  
  for (let counter = 3; counter <= nth; counter += 1) {
    fibo = nMinus1 +  nMinus2;
    nMinus2 = nMinus1;
    nMinus1 = fibo;
  }
  
  return fibo;
}


console.log(fibonacci(20) === 6765);
console.log(fibonacci(50) === 12586269025);
console.log(fibonacci(75) === 2111485077978050);