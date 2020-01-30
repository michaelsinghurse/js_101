// string_processing_prob01.js

function isUppercase(text) {
  for (let index = 0; index < text.length; index += 1) {
    if (text[index] >= 'a' && text[index] <= 'z') {
      return false;
    }
  }
  
  return true;
}

// all should return true
console.log(isUppercase('t') === false);
console.log(isUppercase('T') === true);
console.log(isUppercase('Four Score') === false);
console.log(isUppercase('FOUR SCORE') === true);
console.log(isUppercase('4SCORE!') === true);
console.log(isUppercase('') === true);
