// list_processing_prob04.js

function substringsAtStart(fullString) {
  let substringArray = [];
  
  for (let idx = 1; idx <= fullString.length; idx += 1) {
    substringArray.push(fullString.slice(0, idx));
  }
  
  return substringArray;
}


console.log(substringsAtStart('abc'));    // ["a", "ab", "abc"]
console.log(substringsAtStart('a'));      // ["a"]
console.log(substringsAtStart('xyzzy'));  // ["x", "xy", "xyz", "xyzz", "xyzzy"]
