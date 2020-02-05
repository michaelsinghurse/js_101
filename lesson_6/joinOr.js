// joinOr.js

function joinOr(arr, del = ', ', word = 'or') {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  if (arr.length === 1) return `${arr[0]}`;
  if (arr.length === 2) return `${arr[0]} ${word} ${arr[1]}`;
  
  let str = '';
  
  for (let index = 0; index < arr.length; index += 1) {
    if (index !== arr.length - 1) {
      str += `${arr[index]}${del}`;
    } else {
      str += `${word} ${arr[index]}`;
    }
  }
  
  return str;
}

// all should log true
console.log(joinOr([1]) === '1');
console.log(joinOr([1, 2]) === "1 or 2");
console.log(joinOr([1, 2, 3]) === "1, 2, or 3");
console.log(joinOr([1, 2, 3], '; ') === "1; 2; or 3");
console.log(joinOr([1, 2, 3], ', ', 'and') === "1, 2, and 3");
