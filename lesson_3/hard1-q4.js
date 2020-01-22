// hard1-q4.js

function isAnIpNumber(str) {
  return str.trim() !== '' && Number(str) >= 0 && Number(str) <= 255;  
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  
  if (dotSeparatedWords.length !== 4) return false;
  
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}

console.log(isDotSeparatedIpAddress('10.4.5.11') === true);
console.log(isDotSeparatedIpAddress('0.0.0.0') === true);
console.log(isDotSeparatedIpAddress('255.255.255.255') === true);
console.log(isDotSeparatedIpAddress('256.256.256.256') === false);
console.log(isDotSeparatedIpAddress('4.5.5') === false);
console.log(isDotSeparatedIpAddress('1.2.3.4.5') === false);
console.log(isDotSeparatedIpAddress('1.1..1') === false);
console.log(isDotSeparatedIpAddress('.1.1.1') === false);
