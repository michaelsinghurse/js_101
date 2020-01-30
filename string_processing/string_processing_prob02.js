// string_processing_prob02.js

const VOWELS = ['a', 'e', 'i', 'o', 'u'];

function isVowel(char) {
  return VOWELS.includes(char.toLowerCase());
}

function removeVowels(arrayOfStrings) {
  return arrayOfStrings.map(element => {
    return element.split('').filter(char => !isVowel(char)).join('');
  });
}


console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         
// ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  
// ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                
// ["BC", "", "XYZ"]



