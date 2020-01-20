// easy3-prob7.js

const twice = num => {
  if (!Number.isInteger(num) || num < 1) {
    console.log('Please pass in a positive integer');
    return;
  }
  
  let numStr = String(num);
  let numStr1 = numStr.substring(0, Math.floor(numStr.length / 2)); 
  let numStr2 = numStr.substring(Math.floor(numStr.length / 2));
  
  return numStr1 === numStr2 ? num : num * 2;
};

// all should log true
console.log(twice(37) === 74);
console.log(twice(44) === 44);
console.log(twice(334433) === 668866);
console.log(twice(444) === 888);
console.log(twice(107) === 214);
console.log(twice(103103) === 103103);
console.log(twice(3333) === 3333);
console.log(twice(7676) === 7676);
console.log(twice(-1212) === undefined); // should also log message
console.log(twice(0) === undefined); // should also log message