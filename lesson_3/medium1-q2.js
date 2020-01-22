// medium1-q2.js

let munstersDescription = 'The Munsters are creepy and spooky.';

let reversedMD = munstersDescription
  .split('')
  .map(element => {
    if (element >= 'a' && element <= 'z') {
      return element.toUpperCase();
    } else if (element >= 'A' && element <= 'Z') {
      return element.toLowerCase();
    } else {
      return element;
    }
  })
  .join('');

console.log(reversedMD);