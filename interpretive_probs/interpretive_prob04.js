// interpretive_prob04.js

const LOWER_A_CHAR_CODE = 'a'.charCodeAt();
const LOWER_Z_CHAR_CODE = 'z'.charCodeAt();
const UPPER_A_CHAR_CODE = 'A'.charCodeAt();
const UPPER_Z_CHAR_CODE = 'Z'.charCodeAt();
const NUM_CHARS_ALPHABET = LOWER_Z_CHAR_CODE - LOWER_A_CHAR_CODE + 1;

function rightShiftLetter(letter, shift) {
  let letterCharCode = letter.charCodeAt();
  
  if (letterCharCode >= LOWER_A_CHAR_CODE && 
      letterCharCode <= LOWER_Z_CHAR_CODE) {
    letterCharCode += shift;
    
    if (letterCharCode > LOWER_Z_CHAR_CODE) {
      letterCharCode -= NUM_CHARS_ALPHABET;
    }
  } else {
    letterCharCode += shift;
    
    if (letterCharCode > UPPER_Z_CHAR_CODE) {
      letterCharCode -= NUM_CHARS_ALPHABET;
    }
  }
  
  return String.fromCharCode(letterCharCode);
}

function caesarEncrypt(message, key) {
  if (key >= NUM_CHARS_ALPHABET) {
    key = key % NUM_CHARS_ALPHABET;
  }
  
  return message.replace(/[A-Za-z]/g, letter => {
    return rightShiftLetter(letter, key);
  });
}

console.log(caesarEncrypt('A', 0) === "A");
console.log(caesarEncrypt('A', 3) === "D");
console.log(caesarEncrypt('y', 5) === "d");
console.log(caesarEncrypt('a', 47) === "v");
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25) ===
  "ZABCDEFGHIJKLMNOPQRSTUVWXY");
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5)
  === "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!");
console.log(caesarEncrypt(
  'There are, as you can see, many punctuations. Right?; Wrong?', 2) ===
  "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?");


