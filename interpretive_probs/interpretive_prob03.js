// interpretive_prob03.js

const ALPHABET_HALF_LENGTH = 'n'.charCodeAt() - 'a'.charCodeAt();

function isBlockWord(word) {
  let wordBlockUsed = {a: false, b: false, c: false, d: false, e: false, 
    f: false, g: false, h: false, i: false, j: false, k: false, l: false,
    m: false };
  
  for (let index = 0; index < word.length; index += 1) {
    let char = word[index].toLowerCase();
    
    if (char > 'm') {
      char = String.fromCharCode(char.charCodeAt() - ALPHABET_HALF_LENGTH);
    }
    
    if (wordBlockUsed[char]) {
      return false;
    } else {
      wordBlockUsed[char] = true;
    }
  }
  
  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('BoAT'));       // false
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false

