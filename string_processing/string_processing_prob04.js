// string_processing_prob04.js

function wordCap(text) {
  return text
    .split(' ')
    .map(word => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

// all should return true
console.log(wordCap('four score and seven') === "Four Score And Seven");
console.log(wordCap('the javaScript language') === "The Javascript Language");
console.log(wordCap('this is a "quoted" word') === 'This Is A "quoted" Word');
