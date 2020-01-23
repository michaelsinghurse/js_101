// easy4-prob10.js

const swap = inputStr => {
  return inputStr.split(' ').map(element => {
    if (element.length === 1) {
      return element;
    } else {
      return element.slice(-1) + element.slice(1, -1) + element.slice(0, 1);
    }
  })
  .join(' ');
};

console.log(swap('Oh what a wonderful day it is') === 
"hO thaw a londerfuw yad ti si");
console.log(swap('Abcde') === "ebcdA");
console.log(swap('a') === "a");
