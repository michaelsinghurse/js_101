// string_processing_prob10.js

function searchWord(word, text) {
  let regexp = RegExp(`${word}`, 'gi');
  
  return text.replace(regexp, match => '**' + match.toUpperCase() + '**');
}

console.log(searchWord('Michael', 'Hi Michael how are you?'));
console.log(searchWord('like', 'Hi sir how are you?'));
console.log(searchWord('like', 'Like what\'s going on with your like life?'));