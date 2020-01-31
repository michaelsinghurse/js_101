// string_processing_prob05.js

function swapCase(text) {
  return text
    .split('')
    .map(char => {
      return char === char.toUpperCase() ? char.toLowerCase()
                                         : char.toUpperCase();
    })
    .join('');
}

// all should return true
console.log(swapCase('CamelCase') === "cAMELcASE");
console.log(swapCase('Tonight on XYZ-TV') === "tONIGHT ON xyz-tv");
console.log(swapCase(' ') === ' ');
console.log(swapCase('') === '');
console.log(swapCase('5') === '5');

