// easy5-prob8.js

function digitList(number) {
  if (!Number.isInteger(number) || number < 0) {
    console.log('The function takes only positive integers');
    return;
  }
  
  return String(number).split('').map(element => Number(element));
}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]
console.log(digitList(-123));        // undefined
console.log(digitList(0));           // [0]
console.log(digitList(123.45));      // undefined

