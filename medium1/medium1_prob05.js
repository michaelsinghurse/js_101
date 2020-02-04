// medium1_prob05.js

function wordToDigit(words) {
  let wordToNumber = {'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4,
    'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9 };
  let regexp = /\b\w+\b/g;
  
  return words
    .replace(regexp, word => wordToNumber[word.toLowerCase()] || word);
}

console.log(
  wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

console.log(wordToDigit('Two six two is my area code'));