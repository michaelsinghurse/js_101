// string_processing_prob07.js

function staggeredCase(text) {
  let letterCount = 0;
  
  return text
    .split('')
    .map((char, index) => {
      if (/[A-Za-z]/.test(char)) {
        if (letterCount % 2 === 0) {
          char = char.toUpperCase();
        } else {
          char = char.toLowerCase();
        }
        
        letterCount += 1;
      }
      
      return char;
    })
    .join('');
}

// all should log true
console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);