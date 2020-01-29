// list_processing_prob05.js

function substringsAtStart(fullString) {
  let substringArray = [];
  
  for (let idx = 1; idx <= fullString.length; idx += 1) {
    substringArray.push(fullString.slice(0, idx));
  }
  
  return substringArray;
}

function substrings(entireString) {
  let allSubstringsArray = [];
  
  for (let idx = 0; idx < entireString.length; idx += 1) {
    let subFromIndex = entireString.slice(idx);
    
    allSubstringsArray.push(...substringsAtStart(subFromIndex));
  }
  
  return allSubstringsArray;
}

console.log(substrings('abcde'));

/*
returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
*/

