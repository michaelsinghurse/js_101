// list_processing_prob01.js

function sum(num) {
  return String(num).split('').reduce((acc, val) => acc += Number(val), 0);
}


console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45
console.log(sum(0));            // 0