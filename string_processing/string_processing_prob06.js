// string_processing_prob06.js

function staggeredCase(text) {
  return text
    .split('')
    .map((char, index) => {
      if (/[A-Za-z]/.test(char)) {
        if (index % 2 === 0) {
          return char.toUpperCase();
        } else {
          return char.toLowerCase();
        }
      } else {
        return char;
      }
    })
    .join('');
}

// all should return true
console.log(staggeredCase('I Love Launch School!') === "I LoVe lAuNcH ScHoOl!");
console.log(staggeredCase('ALL_CAPS') === "AlL_CaPs");
console.log(staggeredCase('ignore 77 the 444 numbers') ===
"IgNoRe 77 ThE 444 NuMbErS");