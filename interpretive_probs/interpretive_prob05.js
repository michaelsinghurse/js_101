// interpretive_prob05.js

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

function shiftValueFromLetter(letter) {
  let letterCharCode = letter.charCodeAt();

  if (letterCharCode >= LOWER_A_CHAR_CODE &&
      letterCharCode <= LOWER_Z_CHAR_CODE) {
    return letterCharCode - LOWER_A_CHAR_CODE;
  } else {
    return letterCharCode - UPPER_A_CHAR_CODE;
  }
}

function vigenereCipher(plaintext, keyword) {
  let keywordIndex = -1;
  let regexp = RegExp('[A-Z]', 'i');

  return plaintext
    .split('')
    .map(char => {
      if (regexp.test(char)) {
        keywordIndex = (keywordIndex + 1) % keyword.length;

        return rightShiftLetter(
          char, shiftValueFromLetter(keyword[keywordIndex]));
      } else {
        return char;
      }
    })
    .join('');
}

// should all log true
console.log(vigenereCipher("aaaa", "abcd") === "abcd");
console.log(vigenereCipher("AAAA", "zzzz") === "ZZZZ");
console.log(vigenereCipher("Pineapples don't go on pizzas!", "meat") ===
  "Bmnxmtpeqw dhz'x gh ar pbldal!");