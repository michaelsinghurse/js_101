// prac_prob08.js

// Using the forEach method, output all vowels from the strings in the arrays. 
// Don't use a for or while loop.

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let VOWELS = ['a', 'i', 'e', 'o', 'u'];

Object.values(obj).forEach(arr => {
  arr.forEach(element => {
    element.split('').forEach(char => {
      if (VOWELS.includes(char.toLowerCase())) {
        console.log(char);
      }
    });
  });
});