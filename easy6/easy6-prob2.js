// easy6-prob2.js

const VOWELS = ['a', 'e', 'i', 'o', 'u'];

function doubleConsonants(str) {
  if (typeof str !== 'string') {
    console.log('this function only accepts strings');
    return;
  }
  
  let regexp = /[A-Za-z]/;
  
  return str
    .split('')
    .map(element => {
      if (regexp.test(element) && !VOWELS.includes(element.toLowerCase())) {
        return element + element;
      }
      else {
        return element;
      }
    })
    .join('');
}

// all should return true
console.log(doubleConsonants('String') === "SSttrrinngg");
console.log(doubleConsonants('Hello-World!') === "HHellllo-WWorrlldd!");
console.log(doubleConsonants('July 4th') === "JJullyy 4tthh");
console.log(doubleConsonants('') === "");

























