// easy3-prob9.js

function cleanUp(str) {
  if (typeof str !== 'string') {
    console.log('Please only pass strings to this function.');
    return;
  }
  
  let regexp = /[A-Z ]/i;
  
  return str
         .split('')
         .map(element => regexp.test(element) ? element : ' ')
         .filter((element, index, arr) => {
           if (element !== ' ') {
            return element;
          } else if (element === ' ' && arr[index - 1] !== ' ') {
            return element;
          }
         })
         .join('');
}

// all should return true
console.log(cleanUp("---what's my +*& line?") === " what s my line ");
console.log(cleanUp('My number is 262-203-2958.') === 'My number is ');
console.log(cleanUp('') === '');
console.log(cleanUp(5315) === undefined);