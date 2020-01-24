// easy6-prob1.js

function repeater(str) {
  if (typeof str !== 'string') {
    console.log('this function only accepts strings');
    return;
  }
  
  return str.split('').map(element => element.repeat(2)).join('');
}


console.log(repeater('Hello') === "HHeelllloo");
console.log(repeater('Good job!') === "GGoooodd  jjoobb!!");
console.log(repeater('') === '');